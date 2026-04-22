# Iniciativa: Integración de Respuestas de Plantillas Meta WhatsApp a Adobe Journey Optimizer vía CDP

## 1. Objetivo de la Iniciativa
El objetivo principal de esta iniciativa es establecer la capacidad de ingerir las respuestas de los usuarios a las plantillas de WhatsApp (clics en botones o envío de texto libre interactivo) hacia un endpoint de streaming del Customer Data Platform (CDP / AEP). 
Con esto, se busca crear un *Unitary Event* en Adobe Journey Optimizer (AJO) que permita bifurcar y continuar los journeys basándose específicamente en qué botón de Meta presionó el usuario y desde qué plantilla específica se originó la interacción.

## 2. Situación Actual y Reto Técnico
Actualmente, los eventos nativos de AJO (`message.tracking`) no capturan de manera explícita el **ID o Nombre de la Plantilla de Meta** de una manera que facilite aislar las campañas para ruteo avanzado. Al recibir las respuestas, es crítico saber con exactitud no solo la opción elegida (ej. "Quiero mi préstamo"), sino la plantilla exacta ("sqtye_wsp_jour_awr_casousouno_principal") para validar correctamente el evento en AJO.

**Solución Propuesta:**
Crear un **Esquema XDM Custom** bajo la clase *Experience Event* en AEP, el cual recibirá un payload estructurado desde el middleware webhook que intercepta la salida de Meta para enviarla procesada al CDP.

## 3. Arquitectura del Evento (Payload JSON)
A continuación la estructura JSON propuesta que deberá recibir el endpoint de ingesta por Streaming en CDP:

```json
{
  "timestamp": "2026-04-21T18:46:45Z",
  "eventType": "whatsapp.template.interaction",
  "identityMap": {
    "CICID": [
      {
        "id": "jorzondelgadoorrillo",
        "primary": true
      }
    ]
  },
  "_tutenantedbcp": {
    "whatsappInteraction": {
      "template": {
        "id": "884803141285677", 
        "name": "sqtye_wsp_jour_awr_casousouno_principal",
        "category": "MARKETING"
      },
      "interaction": {
        "type": "button",
        "actionName": "reply",
        "inboundMessage": "Quiero mi préstamo"
      },
      "context": {
        "profileNumber": "51936022870",
        "inboundNumber": "51918209989",
        "reactionMessageID": "wamid.HBgLNTE5MzYwMjI4NzAVAgARGBI0NDVFMkQ2Njd..."
      }
    }
  }
}
```
*(Nota: `_tutenantedbcp` debe reemplazarse por el ID de tenant real)*

## 4. Definición de Schema XDM en CDP

Para implementar lo anterior, se requiere que el equipo de Datos cree un **Experience Event Schema** soportando el siguiente "Field Group" (`whatsappInteraction`):

| Campo a crear en Schema | Tipo de Dato | Origen / Mapeo | Propósito en AJO |
| :--- | :--- | :--- | :--- |
| `identityMap.CICID[0].id` | String | Obtenido de BD/Evento | **(Obligatorio)** ID del cliente para resolver el perfil unificado. |
| `timestamp` | DateTime | Fecha actual | **(Obligatorio)** Fecha de interacción. |
| `eventType` | String | Fijo: `whatsapp.template.interaction` | Identifica la familia del evento entrante. |
| **`_tenant.whatsappInteraction.template.id`** | String | Obtenido de Meta API | **(CLAVE)** Identifica de forma única qué plantilla originó la respuesta (ej. `884803141285677`). |
| `_tenant.whatsappInteraction.template.name` | String | Obtenido de Meta API | Nombre descriptivo de la campaña asociable. |
| **`_tenant.whatsappInteraction.interaction.inboundMessage`** | String | Meta Webhook / Payload | **(CLAVE)** Contiene el texto exacto del botón que se oprimió o el texto tipeado (ej. `Quiero mi préstamo`). |
| `_tenant.whatsappInteraction.interaction.type` | String | `button` o `text` | Permite discriminar la naturaleza de iteración. |
| `_tenant.whatsappInteraction.context.inboundNumber` | String | Obtenido del webhook | Número asignado a la empresa. |
| `_tenant.whatsappInteraction.context.reactionMessageID`| String | ID original del WAMID | Útil para trazabilidad en capas de debug/log. |

## 5. Implementación del Caso de Uso en AJO (Adobe Journey Optimizer)

Con el endpoint alimentando al CDP, el equipo de campañas podrá ejecutar las respuestas así:

1.  **Crear el Evento Unitario:**
    *   Ir a *Configurations > Events > Create Event*.
    *   **Schema:** El esquema XDM recién creado.
    *   **Condición Global:** `eventType == "whatsapp.template.interaction"`.
    *   **Namespace:** `Customer ID` (o el relativo al CICID).

2.  **Uso en el Lienzo del Journey:**
    *   Insertar este Evento Unitario en el flujo (como trigger de inicio de Journey secundario o como punto de espera dentro de un Journey principal).
    *   **Condición de Escucha del Nodo (Event Condition):**  
        Se configurará `@_tutenantedbcp.whatsappInteraction.template.id == '884803141285677'` para asegurar que el Journey reaccione solo si el cliente responde a la campaña pertinente.

3.  **Lógica de Ramificación Dinámica (Condition Node):**
    *   Una vez que el cliente avanza por haber respondido, se anexa un bloque condicional múltiple (Split):
        *   **Camino A:** Si `@_tenant...inboundMessage == 'Quiero mi préstamo'` -> Disparar API Action para sistema core o enviar Template Paso 2.
        *   **Camino B:** Si `@_tenant...inboundMessage == 'Conocer más'` -> Redirigir la atención o enviar Template alternativo.
        *   **Camino C:** Si `@_tenant...inboundMessage == 'No por ahora'` -> Agregar al rule de fatiga o marcar End.

## 6. Siguientes Pasos (Accionables Técnicos)
1. **Creación en AEP:** Diseñar el Experience Event Schema e importar este Field Group sugerido.
2. **Generación Endpoint CDP:** Habilitar el HTTP API (Streaming) linkeado al Dataset del esquema y proveer el endpoint URL al equipo middleware.
3. **Desarrollo Middleware:** Actualizar el webhook actual en Node.js que captura Meta (`nfm_reply` o `message.tracking`) para que inyecte o localice explícitamente el `Template ID`, y dispare este formato JSON por HTTP Post hacia la URL de AEP CDP.
