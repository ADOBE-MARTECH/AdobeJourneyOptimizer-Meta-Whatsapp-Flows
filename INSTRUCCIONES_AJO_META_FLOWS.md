# Resumen de Configuración: Meta WhatsApp Flows + Adobe Journey Optimizer

Este archivo contiene el resumen de las configuraciones y los payloads de prueba que armamos para el ecosistema de préstamos con Meta y AJO. 

## 1. El Flow Estático (`whatsapp_flow_static.json`)
El archivo JSON ha sido ajustado eliminando la estructura dinámica (`data_exchange`) para que no dependa del backend para cargar las opciones. En lugar de usar referencias de API como `${data.amount}`, los Dropdowns (Listas) y RadioButtons (Opciones) ya traen incrustados los montos en Soles (PEN) y plazos en meses fijos. 
También ajustamos las variables de navegación para que se envíe el objeto completo en la última pantalla.

**Instrucción:** Debes copiar el contenido de ese archivo JSON completo, pegarlo en el **Administrador de WhatsApp > Flows**, corregir los errores visuales nativos, darle clic a "Publicar" y anotar el `FLOW_ID` (Ej. `1696109881559194`).

---

## 2. Token de Acceso para Pruebas (Postman)
Para enviar mensajes sin AJO, requieres el "Access Token" de Facebook. 
Si estás en entorno Demo, usa el token temporal de 24 hrs:
1. Ve a `developers.facebook.com`.
2. En tus Aplicaciones, entra en la app configurada para WhatsApp.
3. A la izquierda ve a `WhatsApp > Configuración de la API`.
4. Copia tu `Token de acceso temporal`.

---

## 3. Disparo Manual del Flow por Postman (Webhook Request)
Configura una nueva pestaña en Postman con la siguiente data para invocar el Flow en tu chat:

- **Método**: `POST`
- **URL**: `https://graph.facebook.com/v19.0/1959375484965263/messages` (Reemplaza el Identificador `1959375484965263` por el de tu número telefónico originador en Meta App si es diferente).
- **Headers / Auth**: En la pestaña *Authorization*, selecciona *Bearer Token* y pega el token largo que obtuviste en el paso anterior.
- **Body**: Selecciona `raw` y asegúrate de elegir el formato `JSON`. Pega este bloque de abajo:

```json
{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "51918209989",
  "type": "interactive",
  "interactive": {
    "type": "flow",
    "header": {
      "type": "text",
      "text": "Préstamo Pre-aprobado"
    },
    "body": {
      "text": "Hola, hemos pre-aprobado S/10,000 para ti en un entorno de pruebas."
    },
    "footer": {
      "text": "AJO Demo"
    },
    "action": {
      "name": "flow",
      "parameters": {
        "flow_message_version": "3",
        "flow_token": "ESTE_ES_UN_TOKEN_OCULTO_ID_USUARIO",
        "flow_id": "REEMPLAZA_ESTO_CON_TU_NUEVO_FLOW_ID",
        "flow_cta": "Desembolsar Ahora",
        "flow_action": "navigate",
        "flow_action_payload": {
          "screen": "LOAN"
        }
      }
    }
  }
}
```

---

## 4. Probando el Webhook Local (AJO Ingestion)
Una vez llegue el mensaje a tu teléfono `51918209989` y presiones "Aceptar y Solicitar" al final del formulario en WhatsApp, la data viajará vía Internet a tu servidor intermedio para ser inyectada a Adobe Journey Optimizer. 

Asegúrate de preparar tu consola encendiendo el servidor local:

1. Abre tu terminal de Visual Studio Code o CMD.
2. Navega a esta carpeta.
3. Ejecuta el comando:
   ```bash
   node meta_webhook_processor.js
   ```
4. El servidor local interceptará el objeto Payload JSON construido dinámicamente y lo mandará a `AEP_STREAMING_ENDPOINT` mapeándolo en un esquema XDM final.
