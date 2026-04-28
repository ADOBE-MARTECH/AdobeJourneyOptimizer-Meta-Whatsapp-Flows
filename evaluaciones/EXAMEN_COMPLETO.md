# 🎯 Examen de Certificación Adobe - Preguntas

Este documento contiene todas las preguntas subidas para tu preparación. Iremos completando las respuestas y la documentación a medida que avancemos.

---

### ❓ Pregunta 1
![Pregunta 1](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.37.42%20PM.jpeg)

**Transcripción de la pregunta:**
Which are available in the solution for personalization? (Choose three.)

*   **Opciones:**
    *   [A] helper functions
    *   [B] offer decisions
    *   [C] audiences
    *   [D] calculated attributes

*   **✅ Respuesta Correcta:** `[A] helper functions, [B] offer decisions, [D] calculated attributes` (Las funciones de ayuda, las decisiones de ofertas y los atributos/eventos calculados son elementos clave en el editor de personalización).

*   **🧠 Intención de la Pregunta:** 
    *   Evaluar el conocimiento sobre los elementos disponibles en el Editor de Personalización (Personalization Editor) de AJO para insertar contenido dinámico.

*   **📖 Justificación Detallada:**
    *   En Adobe Journey Optimizer, el Personalization Editor permite construir expresiones complejas. Para ello, pone a disposición atributos del perfil, eventos (incluyendo atributos calculados), decisiones de oferta (Offer Decisioning) y una amplia variedad de funciones de ayuda (Helper Functions) como `capitalize`, `formatDate`, etc. Las *Audiences* (Segmentos) se utilizan como nodos de entrada o para condicionales dentro del lienzo del Journey, pero en el menú de sintaxis del Personalization Editor (donde se escribe el código de personalización del mensaje), los recursos a inyectar son las variables y funciones, no los objetos de audiencia directamente.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Trabajo con el editor de personalización (Adobe Experience League)](https://experienceleague.adobe.com/es/docs/journey-optimizer/using/content-management/personalization/personalization-editor)

---

### ❓ Pregunta 3
![Pregunta 3](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.39.05%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner has built a journey and wants to launch it. What would the business practitioner do to launch the journey?

*   **Opciones:**
    *   [A] Select the Run button
    *   [B] Schedule the journey
    *   [C] Hit the Publish button

*   **✅ Respuesta Correcta:** `[C] Hit the Publish button`

*   **🧠 Intención de la Pregunta:** 
    *   Conocer el mecanismo exacto para activar un Journey en AJO una vez que se ha terminado de diseñar.

*   **📖 Justificación Detallada:**
    *   En Adobe Journey Optimizer, una vez que el diseño del journey (incluyendo audiencias, eventos, condiciones y acciones) está completo y validado, el último paso para que este comience a escuchar eventos o procesar audiencias es publicarlo. El botón correspondiente en la interfaz se llama **Publish** (Publicar). No existe un botón de "Run" en el contexto de journeys, y programarlo (Schedule) es parte de la configuración del nodo de lectura de audiencia, pero la activación final requiere publicar el lienzo.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Publishing a journey (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/about-journey-building/publish-journey)

---

### ❓ Pregunta 2
![Pregunta 2](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.38.41%20PM.jpeg)

**Transcripción de la pregunta:**
A journey has been running for a month and an issue with the email content has just been reported. The business practitioner needs to check the reporting for that journey in order to provide all of the KPIs required to measure the impact. How would the business practitioner access this information?

*   **Opciones:**
    *   [A] Access the Global Report of that journey and check the data in the "All time view"
    *   [B] Access the Report menu item, then select "Journeys" in the "Action from" drop-down and filter out the data
    *   [C] Access the Live Report of that journey and check the data for the last 24 hours

*   **✅ Respuesta Correcta:** `[A] Access the Global Report of that journey and check the data in the "All time view"`

*   **🧠 Intención de la Pregunta:** 
    *   Validar que el profesional comprende la diferencia entre el Global Report (histórico) y el Live Report (tiempo real / últimas 24 hrs) en AJO.

*   **📖 Justificación Detallada:**
    *   Como el journey ha estado activo durante "un mes" (a month) y se requiere medir el impacto total, se necesita data histórica. El **Live Report** solo almacena y muestra las métricas de las últimas 24 horas para un monitoreo en tiempo real. Por lo tanto, el profesional de negocio debe dirigirse al **Global Report** (Informe Global) del journey, donde puede ver el acumulado "All time" o filtrar por rangos de fechas históricos para consolidar todos los KPIs de correos electrónicos desde que se lanzó el journey.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Global Report for Journeys (Adobe Experience League)](https://experienceleague.adobe.com/es/docs/journey-optimizer/using/reporting/global-reports/journey-global-report)

---

### ❓ Pregunta 4
![Pregunta 4](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.39.53%20PM.jpeg)

**Transcripción de la pregunta:**
A digital marketing specialist is planning a comprehensive campaign using Adobe Journey Optimizer for a new product launch. Personalization is a critical element of the strategy to maximize engagement. The specialist wants to ensure that customers receive content tailored to their preferences, including past purchases and browsing behavior. 

Which enables the specialist to leverage historical customer data, such as past purchases and interactions, to personalize content and interactions within a customer's journey?

*   **Opciones:**
    *   [A] Journey Analytics
    *   [B] Experience Events
    *   [C] Real-time Triggers
    *   [D] Personalization Fields

*   **✅ Respuesta Correcta:** `[B] Experience Events`

*   **🧠 Intención de la Pregunta:** 
    *   Identificar qué componente de datos de AEP permite a AJO acceder al comportamiento histórico del usuario (compras, interacciones, etc.) para personalizar mensajes.

*   **📖 Justificación Detallada:**
    *   En Adobe Experience Platform, el esquema estándar para almacenar datos de comportamiento a lo largo del tiempo (como vistas de página, clics, compras pasadas y carritos abandonados) es la clase **XDM ExperienceEvent**. AJO utiliza estos *Experience Events* para acceder al historial de interacciones del cliente dentro del contexto de personalización de un journey o mensaje. Las otras opciones son incorrectas para este propósito específico: "Journey Analytics" es para reportes, "Real-time Triggers" se basan en eventos en vivo (no es todo el historial consolidado) y "Personalization Fields" es un término genérico, no la estructura subyacente.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [XDM ExperienceEvent class (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/experience-platform/xdm/classes/experienceevent)

---

### ❓ Pregunta 5
![Pregunta 5](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.40.32%20PM.jpeg)

**Transcripción de la pregunta:**
What are two types of Expression Fragments that can be authored in Adobe Journey Optimizer? (Choose two.)

*   **Opciones:**
    *   [A] XML
    *   [B] HTML
    *   [C] IMAGE
    *   [D] JSON

*   **✅ Respuesta Correcta:** `[B] HTML, [D] JSON`

*   **🧠 Intención de la Pregunta:** 
    *   Conocer los tipos (subtypes) de "Expression Fragments" que soporta AJO para guardar bloques lógicos reutilizables.

*   **📖 Justificación Detallada:**
    *   A diferencia de los "Visual Fragments" (que son bloques de diseño para arrastrar y soltar), los "Expression Fragments" son fragmentos de código o texto que contienen expresiones lógicas, variables o formatos para inyectar en campos de personalización. AJO soporta formalmente la creación de Expression Fragments de tipo **HTML**, **JSON** y **Text** (Texto plano). XML e IMAGE no son subtipos válidos para Expression Fragments.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Create an expression fragment (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/content-management/fragments/expression-fragments)

---

### ❓ Pregunta 6
![Pregunta 6](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.41.10%20PM.jpeg)

**Transcripción de la pregunta:**
A retail company uses Adobe Journey Optimizer (AJO) for personalized marketing campaigns and Adobe Experience Platform (AEP) for data management. The business practitioner want to ensure data used in AJO journeys complies with data regulations and internal policies. 
Which AEP capability best supports this objective?

*   **Opciones:**
    *   [A] AEP Profiles: Provides a unified customer...
    *   [B] AEP Data Governance: Defines usage policies and enforce usage control
    *   [C] AEP Schema Registry: Standardizes data format...

*   **✅ Respuesta Correcta:** `[B] AEP Data Governance: Defines usage policies and enforce usage control`

*   **🧠 Intención de la Pregunta:** 
    *   Identificar qué herramienta dentro de AEP se utiliza para cumplir con las regulaciones de privacidad y políticas de uso de datos.

*   **📖 Justificación Detallada:**
    *   La funcionalidad de **Data Governance** (que incluye el framework DULE: Data Usage Labeling and Enforcement) de Adobe Experience Platform permite a las empresas aplicar etiquetas de uso de datos a campos específicos y definir políticas de uso. Esto garantiza que cuando AJO accede a la data, respete restricciones regulatorias (como HIPAA o GDPR) impidiendo que datos sensibles se utilicen en ciertos tipos de campañas sin autorización.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Data Governance in Adobe Experience Platform (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/experience-platform/data-governance/home)

---

### ❓ Pregunta 7
![Pregunta 7](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.41.33%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner wants to add a level of personalization inside an email message and has the Expression Editor open. The required field has a listString type and is disabled.
How would the business practitioner access this field?

*   **Opciones:**
    *   [A] Switch the Expression Editor to Advanced Mode
    *   [B] Access the Profile Schema to access the profile-level field
    *   [C] Convert the field from listString to String
    *   [D] Use a loop to access the field

*   **✅ Respuesta Correcta:** `[A] Switch the Expression Editor to Advanced Mode`

*   **🧠 Intención de la Pregunta:** 
    *   Comprender cómo interactuar con arreglos/colecciones (como `listString`) en el menú de personalización de AJO, ya que no se pueden arrastrar directamente.

*   **📖 Justificación Detallada:**
    *   En el "Basic Mode" (Modo Básico) del Expression Editor, los campos que contienen colecciones o arreglos (como `listString`) aparecen deshabilitados porque no se pueden insertar directamente en el HTML sin definir cómo se mostrarán. La solución provista por la plataforma es **cambiar al Advanced Mode (Modo Avanzado)**, donde el usuario puede escribir el código Handlebars necesario para recorrer o tratar dicho arreglo (típicamente usando `{{#each}}`). Aunque se requiere un bucle internamente, el paso procedimental en la herramienta es activar el modo avanzado para desbloquear la inserción.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Add personalization (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/content-management/personalization/personalization-editor)

---

### ❓ Pregunta 8
![Pregunta 8](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.42.04%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner is putting together a new "Weekend Sale" journey that will send an Email to all customers. Inside the message and only for the loyal customers, the business practitioner wants to include an additional image banner at the top with a discount based on the three levels of loyalty (Gold, Silver and Bronze).
How can this be configured in Adobe Journey Optimizer?

*   **Opciones:**
    *   [A] Image Placements can be leveraged into the Email Designer to decide on the best images to serve to the targeted profiles.
    *   [B] Conditional rules can be leveraged into the Email Designer and the expression editor to create dynamic content which will adapt the images to the loyal customers.
    *   [C] Event attributes can be leveraged within the image URL to personalize the image based on the value of a query string parameter.

*   **✅ Respuesta Correcta:** `[B] Conditional rules can be leveraged into the Email Designer and the expression editor to create dynamic content which will adapt the images to the loyal customers.`

*   **🧠 Intención de la Pregunta:** 
    *   Saber cómo utilizar reglas dinámicas dentro del diseñador de correos para mostrar o esconder bloques enteros de contenido (como banners de imagen) basados en atributos de perfil (niveles de lealtad).

*   **📖 Justificación Detallada:**
    *   La mejor forma nativa y directa de conseguir variaciones visuales basadas en un atributo de perfil en AJO es mediante **Dynamic Content (Contenido Dinámico)** utilizando **Reglas Condicionales**. Se pueden definir condiciones (si lealtad = Gold, mostrar Imagen A; si lealtad = Silver, mostrar Imagen B, etc.) y aplicarlas a los componentes en el Email Designer.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Create dynamic content (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/content-management/personalization/dynamic-content)

---

### ❓ Pregunta 9
![Pregunta 9](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.42.30%20PM.jpeg)

**Transcripción de la pregunta:**
An email marketing manager using Adobe Journey Optimizer is focused on enhancing the deliverability of email campaigns.
To increase the likelihood of the messages reaching recipients inboxes, which factor should be prioritized?

*   **Opciones:**
    *   [A] Ensuring a stable and positive sender reputation
    *   [B] Including a plethora of links in the email content
    *   [C] Crafting highly generic and broad subject lines

*   **✅ Respuesta Correcta:** `[A] Ensuring a stable and positive sender reputation`

*   **🧠 Intención de la Pregunta:** 
    *   Entender las buenas prácticas fundamentales de entregabilidad de correos electrónicos.

*   **📖 Justificación Detallada:**
    *   La métrica de **reputación del remitente (sender reputation)** es el factor número uno que los Proveedores de Servicios de Correo (ISPs) consideran para decidir si envían un correo a la bandeja de entrada o a spam. Mantener una buena reputación (calentando la IP, enviando a usuarios interactuando y reduciendo rebotes) garantiza la entregabilidad. Las otras opciones son prácticas negativas (exceso de links genera sospecha de spam; asuntos muy genéricos perjudican la apertura y la reputación a largo plazo).

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Deliverability best practices (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/deliverability/about-deliverability)

---

### ❓ Pregunta 10
![Pregunta 10](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.43.11%20PM.jpeg)

**Transcripción de la pregunta:**
While running a test, a journey reaches a decision point based on a customer's loyalty points. However, all audiences seem to be directed down the same path, regardless of their points.
What might be the problem?

*   **Opciones:**
    *   [A] In test mode, all the audiences will do the first path.
    *   [B] The condition for the branching point is incorrectly formulated.
    *   [C] The journey needs to be republished after modifying the branching conditions.

*   **✅ Respuesta Correcta:** `[B] The condition for the branching point is incorrectly formulated.`

*   **🧠 Intención de la Pregunta:** 
    *   Saber hacer troubleshooting (resolución de problemas) sobre reglas de ramificación en un Journey.

*   **📖 Justificación Detallada:**
    *   El "Test Mode" de un Journey evalúa realmente las condiciones configuradas basándose en los datos de los perfiles de prueba ingresados. No envía forzosamente a todos por la primera ruta. Si todos los perfiles, independientemente de sus puntos, van por la misma ruta, la causa principal es que la **condición lógica (Condition)** del nodo de decisión está mal formulada o no evalúa correctamente el campo del perfil. Re-publicar no tiene sentido en modo prueba porque estás testeando un draft.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Testing a journey (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/about-journey-building/test-journey)

---

### ❓ Pregunta 11
![Pregunta 11](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.43.26%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner is using an image from Assets into a new email message but realizes that the image does not look like it used to be in a previous email message.
How would the business practitioner troubleshoot this?

*   **Opciones:**
    *   [A] Click on the Import Media button, browse the image and upload the image that was used previously
    *   [B] Open the email message from a different internet browser to refresh the cache and access the latest image
    *   [C] Open an asset's preview in the Assets section and click on the Versions icon from the right sidebar, preview the previous version, select it and click Make Latest
    *   [D] Open the previous email message and copy the image URL, in the new email message click on the image placeholder and paste the image URL

*   **✅ Respuesta Correcta:** `[C] Open an asset's preview in the Assets section and click on the Versions icon from the right sidebar, preview the previous version, select it and click Make Latest`

*   **🧠 Intención de la Pregunta:** 
    *   Comprender el manejo de versiones de los recursos centralizados (Assets) en Adobe Experience Manager (AEM) Assets Essentials, el cual está integrado nativamente con AJO.

*   **📖 Justificación Detallada:**
    *   En Adobe Journey Optimizer, la biblioteca de Assets guarda un historial de versiones de los archivos. Si un asset fue sobreescrito o modificado accidentalmente, el flujo correcto para restaurarlo a nivel global (de modo que se corrija en todos los lugares donde está vinculado) no es resubirlo manualmente o copiar URLs antiguas, sino ir a la interfaz de Assets, visualizar el historial de versiones del asset específico y marcar la versión deseada como "Make Latest" (Hacer más reciente).

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Manage asset versions (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/experience-manager-assets-essentials/using/manage-assets)

---

### ❓ Pregunta 12
![Pregunta 12](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.44.08%20PM.jpeg)

**Transcripción de la pregunta:**
A journey needs to listen to Adobe Experience Platform data in order to send messages daily to a specified set of profiles.
What would a business practitioner do to achieve this?

*   **Opciones:**
    *   [A] Create Batch List
    *   [B] Create Batch Dataset
    *   [C] Create Batch Segment
    *   [D] Create Batch Evaluation Audience

*   **✅ Respuesta Correcta:** `[C] Create Batch Segment`

*   **🧠 Intención de la Pregunta:** 
    *   Identificar el método correcto de segmentación en AEP para evaluar grupos de perfiles de forma periódica (diariamente) que luego son procesados por AJO.

*   **📖 Justificación Detallada:**
    *   Cuando un journey necesita ejecutarse periódicamente (por ejemplo, todos los días) sobre un grupo que cumple ciertas condiciones estáticas o acumuladas en el tiempo, se utiliza una segmentación "Batch" (por lotes). En AEP, esto se conoce formalmente como un **Batch Segment** (Segmento por Lotes). Posteriormente, en AJO se configura un Journey que use una actividad "Read Segment" configurada con un horario diario para procesar dicho segmento.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Evaluate segments (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/experience-platform/segmentation/home#evaluate-segments)

---

### ❓ Pregunta 13
![Pregunta 13](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.44.22%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner is launching a loyalty program offering different tiers of personalized discounts based on purchase history. 
How can Decision Management help ensure accurate offer selection and prevent tiered customers from receiving lower-tier discounts?

*   **Opciones:**
    *   [A] Implement "Profile Caps" to limit the total number of discounts each user can receive across all tiers
    *   [B] Utilize fallback offers with generic discounts in case loyalty tier verification fails
    *   [C] Define decision rules within each offer collection to validate the user's loyalty tier against the offer eligibility

*   **✅ Respuesta Correcta:** `[C] Define decision rules within each offer collection to validate the user's loyalty tier against the offer eligibility`

*   **🧠 Intención de la Pregunta:** 
    *   Comprender cómo utilizar Offer Decisioning (Decision Management) para segmentar qué ofertas recibe qué cliente utilizando reglas de decisión (Decision Rules).

*   **📖 Justificación Detallada:**
    *   En Adobe Journey Optimizer - Decision Management, la funcionalidad central para garantizar que un cliente solo reciba ofertas para las que es elegible (por ejemplo, ofertas exclusivas de su "tier" de lealtad) es la aplicación de **Decision Rules (Reglas de Decisión)**. Estas reglas se asocian a las ofertas personalizadas dentro de una colección o decisión, forzando a que la IA / motor de elegibilidad filtre y solo entregue la oferta si el perfil cumple exactamente con la condición de lealtad requerida.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Create decision rules (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/offer-decisioning/create-components/create-decision-rules)

---

### ❓ Pregunta 14
![Pregunta 14](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.44.34%20PM.jpeg)

**Transcripción de la pregunta:**
An analyst responsible for orchestrating data flows into Adobe Experience Platform notices that a scheduled data ingestion job has failed.
What step would the analyst take to diagnose and resolve this issue?

*   **Opciones:**
    *   [A] Examine the Data Ingestion logs for detailed error information
    *   [B] Ask the source system to resend the data
    *   [C] Delete the failed job and recreate it with the same configurations
    *   [D] Retry the ingestion job immediately to see if it resolves itself

*   **✅ Respuesta Correcta:** `[A] Examine the Data Ingestion logs for detailed error information`

*   **🧠 Intención de la Pregunta:** 
    *   Identificar el paso inicial estándar de diagnóstico técnico y buenas prácticas cuando fallan integraciones de datos en AEP.

*   **📖 Justificación Detallada:**
    *   Cuando falla la ingesta de datos en Adobe Experience Platform (ya sea mediante batch o streaming), la primera y mejor acción antes de pedir reenvíos o eliminar flujos, es **revisar los logs de Data Ingestion**. AEP provee herramientas de monitoreo en la interfaz de "Monitoring" (Monitoreo) que indican exactamente dónde falló el archivo (por ejemplo: error de mapeo, error de sintaxis JSON, incompatibilidad con el XDM, etc.), permitiendo al analista diagnosticar la causa raíz correctamente.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Monitor data flows (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/experience-platform/dataflows/ui/monitor-sources)

---

### ❓ Pregunta 15
![Pregunta 15](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.44.50%20PM.jpeg)

**Transcripción de la pregunta:**
For which two channels in the Adobe Journey Optimizer solution are "Expression fragments" accessible? (Choose two.)

*   **Opciones:**
    *   [A] SMS
    *   [B] In-app
    *   [C] Web
    *   [D] Email

*   **✅ Respuesta Correcta:** `[A] SMS, [D] Email`

*   **🧠 Intención de la Pregunta:** 
    *   Saber a nivel de arquitectura en qué canales específicos de entrega de AJO se permite el uso de Expression Fragments para contenido recurrente.

*   **📖 Justificación Detallada:**
    *   Los "Expression Fragments" (fragmentos de expresión) se pueden usar en aquellos canales que soportan el Editor de Expresiones avanzado para personalización de carga de trabajo. Actualmente, canales como **Email** (Correo electrónico) y **SMS** (y notificaciones Push) soportan la inyección de Fragmentos de Expresiones. La documentación oficial establece explícitamente que estos fragmentos NO están disponibles actualmente para el canal "In-app". 

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Create an expression fragment (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/content-management/fragments/expression-fragments)

---

### ❓ Pregunta 16
![Pregunta 16](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.45.14%20PM.jpeg)

**Transcripción de la pregunta:**
In addition to impressions, which Key Performance Indicators are in the in-app total engagement report?

*   **Opciones:**
    *   [A] Impression rate, Bounce, Bounce rate
    *   [B] Interactions, Dismisses, Dismiss rate
    *   [C] Sent, Click, Click rate

*   **✅ Respuesta Correcta:** `[B] Interactions, Dismisses, Dismiss rate`

*   **🧠 Intención de la Pregunta:** 
    *   Conocer las métricas (KPIs) estándar de los informes de rendimiento para los mensajes In-App en Adobe Journey Optimizer.

*   **📖 Justificación Detallada:**
    *   Los mensajes In-app (mensajes dentro de la aplicación) no tienen los conceptos de "Bounce" (Rebote) o "Sent" (Enviado) de la misma forma que el correo electrónico. Los KPIs principales que rastrean el engagement (interacción) de los usuarios con estos mensajes son: Impresiones (displays), **Interactions** (clics o interacciones positivas con el mensaje), y **Dismisses** (cierres manuales o descartes por parte del usuario sin interactuar).

*   **🔗 Documentación Oficial de Respaldo:**
    *   [In-app report (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/reporting/channel-report/inapp-report)

---

### ❓ Pregunta 17
![Pregunta 17](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.45.38%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner wants to validate a customer journey by sending a proof to a specific email, but is not able to send it.
What might be the reason for this?

*   **Opciones:**
    *   [A] A test profile has not been created with the specific email address.
    *   [B] The journey is not published.
    *   [C] The given email address does not qualify for the journey.
    *   [D] The namespace selected for generating the proof is Email Address.

*   **✅ Respuesta Correcta:** `[A] A test profile has not been created with the specific email address.`

*   **🧠 Intención de la Pregunta:** 
    *   Entender los requisitos técnicos para poder enviar un "Proof" (prueba) de un correo electrónico durante la creación de un Journey o Campaign.

*   **📖 Justificación Detallada:**
    *   En Adobe Journey Optimizer, no puedes enviar correos de prueba a una dirección arbitraria tipeándola directamente como en otras plataformas simples. Para poder enviar una prueba (Proof) y que las variables de personalización funcionen, esa dirección de correo debe existir como un **Test Profile (Perfil de Prueba)** dentro de la base de datos de Adobe Experience Platform. Si el perfil de prueba no está creado, la herramienta no podrá enviar la prueba.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Create test profiles (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/audience-management/test-profiles)

---

### ❓ Pregunta 18
![Pregunta 18](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.46.03%20PM.jpeg)

**Transcripción de la pregunta:**
What are two use cases for which a business practitioner would use an "Unitary Event" in a journey? (Choose two.)

*   **Opciones:**
    *   [A] A product has restocked, notify customers with a favorite for that product
    *   [B] A cart has been abandoned, notify customers with an abandoned cart
    *   [C] An appointment is coming up, so notify customers what they need to prepare for it
    *   [D] A price drop has occured, notify customers that are interested

*   **✅ Respuesta Correcta:** `[B] A cart has been abandoned, notify customers with an abandoned cart`, `[C] An appointment is coming up, so notify customers what they need to prepare for it`

*   **🧠 Intención de la Pregunta:** 
    *   Distinguir entre "Unitary Events" (eventos ligados a una acción individual de un perfil) y "Business Events" (eventos genéricos del sistema que afectan a múltiples personas).

*   **📖 Justificación Detallada:**
    *   Un **Unitary Event** (Evento Unitario) en AJO se dispara debido a la acción individual o el estado de un único perfil (por ejemplo: el usuario X abandonó su carrito, o el usuario Y tiene una cita médica inminente). Por el contrario, un reabastecimiento de producto (restock) o una caída de precio (price drop) son **Business Events** (Eventos de Negocio), ya que no están atados a una persona específica en su inicio, sino al sistema, y luego el sistema busca qué audiencias están interesadas en ese cambio.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [About events (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/about-journey-building/about-events)

---

### ❓ Pregunta 19
![Pregunta 19](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.46.18%20PM.jpeg)

**Transcripción de la pregunta:**
What is the purpose of an email surface in Adobe Journey Optimizer?

*   **Opciones:**
    *   [A] The email surface determines the frequency rules of messaging.
    *   [B] The email surface defines the technical parameters required for the messages, including email type, sender email and sender name.
    *   [C] The email surface determines the template to use for the email design, including the subject, images and text.

*   **✅ Respuesta Correcta:** `[B] The email surface defines the technical parameters required for the messages, including email type, sender email and sender name.`

*   **🧠 Intención de la Pregunta:** 
    *   Conocer el concepto de "Channel Surface" (Superficie de Canal, antes llamada Configuración de Canal) en la arquitectura de AJO.

*   **📖 Justificación Detallada:**
    *   En Adobe Journey Optimizer, un **Channel Surface** (para email, SMS, etc.) no guarda plantillas de diseño ni reglas de negocio. Su objetivo es almacenar la configuración técnica y de envío. Para el correo electrónico, esto incluye el nombre y dirección del remitente (From Name, From Email), la dirección de respuesta (Reply-To), el subdominio delegado, el tipo de correo (Marketing vs Transaccional), y los parámetros de reintento.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [About channel surfaces (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/configuration/channel-surfaces)

---

### ❓ Pregunta 20
![Pregunta 20](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.46.32%20PM.jpeg)

**Transcripción de la pregunta:**
What is the result when identities link consumers across devices and channels?

*   **Opciones:**
    *   [A] Identity graph
    *   [B] Identity query
    *   [C] Identity matrix
    *   [D] Identity service

*   **✅ Respuesta Correcta:** `[A] Identity graph`

*   **🧠 Intención de la Pregunta:** 
    *   Identificar la terminología base de AEP relacionada a la unificación de identidades del cliente.

*   **📖 Justificación Detallada:**
    *   En Adobe Experience Platform, la función principal del Identity Service es unir (linkear) los diferentes identificadores de un mismo cliente (ECID de web, correo electrónico, número de teléfono, CRM ID, etc.) a través de los canales. El resultado visual y estructural de estas relaciones conectadas se denomina **Identity Graph (Grafo de Identidad)**.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Identity Graph overview (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/experience-platform/identity/features/identity-graph-overview)

---

### ❓ Pregunta 21
![Pregunta 21](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.46.55%20PM.jpeg)

**Transcripción de la pregunta:**
While adding an offer decision to an email, a business practitioner sees only one offer decision in the selection list although there are multiple in the system.
What could be the reason for this?

*   **Opciones:**
    *   [A] Only one offer decision has the right collection qualifier.
    *   [B] Only one offer decision matches the selected placement.
    *   [C] The business practitioner has access to only one offer decision.

*   **✅ Respuesta Correcta:** `[B] Only one offer decision matches the selected placement.`

*   **🧠 Intención de la Pregunta:** 
    *   Entender las limitaciones impuestas por los "Placements" al integrar Offer Decisioning en los correos.

*   **📖 Justificación Detallada:**
    *   Las "Decisiones" de Ofertas en AJO se configuran para ser servidas en espacios o formatos específicos llamados **Placements** (por ejemplo: ubicación de imagen de héroe, texto plano en SMS, bloque HTML). Cuando un usuario inserta un componente de Decisión de Oferta en el Email Designer, el diseñador filtra automáticamente la lista y solo muestra las Decisiones que están configuradas para ser compatibles con el "Placement" que el usuario ha seleccionado (por ejemplo, "Image placement"). Si solo ve una opción, es porque las otras decisiones en el sistema están configuradas para Placements distintos.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Create placements (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/offer-decisioning/create-components/create-placements)

---

### ❓ Pregunta 22
![Pregunta 22](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.47.19%20PM.jpeg)

**Transcripción de la pregunta:**
When a simple event is triggered via an external system, a business practitioner sees it show up on the test profile and the published journey triggers. However, the email is never sent. All the events reach the email activity but then flow down the path for "timeout or error". The business practitioner checked the channel surface and test profile and there was no issue.
What else would be checked to continue troubleshooting?

*   **Opciones:**
    *   [A] That the journey entry qualification was configured correctly
    *   [B] If a wait activity is triggering the time out
    *   [C] That the event identity matches the profile identity

*   **✅ Respuesta Correcta:** `[C] That the event identity matches the profile identity`

*   **🧠 Intención de la Pregunta:** 
    *   Saber realizar troubleshooting cuando una actividad de email falla y se desvía por el camino de "timeout/error" debido a problemas de identidad y payload.

*   **📖 Justificación Detallada:**
    *   Si el evento ingresó correctamente al journey (pasó el punto de entrada) pero falla exactamente en la actividad de correo, y sabemos que la superficie de canal (Channel Surface) está bien, la causa técnica más común es que **el sistema no puede recuperar la dirección de correo del perfil**. Esto sucede si el identificador (namespace/Identity) que viene en el evento no coincide, o no está "cocido" (stitched) correctamente con el perfil en el Identity Graph. Si AJO no puede cruzar el ID del evento con un Real-Time Customer Profile válido para sacar el email, se produce un error técnico y el flujo se va por la ruta de error/timeout de la actividad.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Troubleshooting journey errors (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/troubleshoot/troubleshooting)

---

### ❓ Pregunta 23
![Pregunta 23](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.47.30%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner is putting together the content of an email in the Adobe Journey Optimizer's email designer. The hero image of this email needs to switch based on personalization parameters and all variations are available in Assets. 
How can Dynamic Media URLs be leveraged in this case while authoring emails in Journey Optimizer?

*   **Opciones:**
    *   [A] Paste the image URLs, instead of selecting from the Asset Selector, and add the personalization fields to the URL
    *   [B] GIFs and Video are available in the Assets library and can be selected as Dynamic Media
    *   [C] In the expression editor within the Image URL field write down an IF/ELSE statement to change the image URL
    *   [D] Click on the "Select an asset" button on the image placeholder and then activate the Dynamic Media capability

*   **✅ Respuesta Correcta:** `[A] Paste the image URLs, instead of selecting from the Asset Selector, and add the personalization fields to the URL`

*   **🧠 Intención de la Pregunta:** 
    *   Saber cómo inyectar variables de personalización de perfil dentro de los parámetros de Dynamic Media (AEM) para generar imágenes personalizadas de forma dinámica en un correo.

*   **📖 Justificación Detallada:**
    *   Dynamic Media funciona utilizando parámetros pasados por Query String en la URL de la imagen (ej: `.../image?text=Hola`). En el Email Designer de AJO, la forma de lograr esto es introduciendo la URL base del Asset y **pegando manualmente los campos de personalización (tokens)** al final de esa URL dentro del campo de origen de la imagen (Image URL field). No se puede activar esta capacidad mágicamente usando el botón genérico de selección de Assets.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Use Dynamic Media in Journey Optimizer (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/content-management/assets/dynamic-media)

---

### ❓ Pregunta 24
![Pregunta 24](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.47.47%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner creates a journey with the activities Read Audience -> Email. They want to re-target anyone who does not click the email in 1 day.
What else would be configured in the journey to allow this?

*   **Opciones:**
    *   [A] Add a Wait activity set to 1 day, then add an email action to the output branch
    *   [B] Build a streaming audience that looks for Email 1 opens in the last 1 day, use a Read Audience activity to listen for that audience, then add a second email action to the output branch
    *   [C] Define the timeout of the first Email activity to be one day within the action configuration, then add a second email action to the output branch
    *   [D] Add a Reactions event, select Email opened, and define the event timeout to be 1 day, then add an email action to the timeout branch

*   **✅ Respuesta Correcta:** `[D] Add a Reactions event, select Email opened, and define the event timeout to be 1 day, then add an email action to the timeout branch`

*   **🧠 Intención de la Pregunta:** 
    *   Diseñar una lógica de retargeting para no-respondedores usando Eventos de Reacción (Reaction events) y sus respectivos tiempos de expiración (timeout).

*   **📖 Justificación Detallada:**
    *   En Journey Optimizer, el patrón estándar de la industria para tomar acciones sobre personas que **NO** reaccionan a un correo (ej. no lo abren o no le dan clic en X tiempo) es usar un **Reaction Event (Evento de Reacción)** anclado al correo original. Al agregar el Reaction Event, se especifica el límite de espera (timeout) de 1 día. Si el usuario reacciona, se va por el camino principal del evento. Si pasa 1 día y el usuario NO reaccionó, AJO enviará al perfil por la "Timeout branch" (ruta de expiración/tiempo de espera). Es exactamente en esa rama de timeout donde se coloca el correo de retargeting.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Reaction events (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/about-journey-building/reaction-events)

---

### ❓ Pregunta 25
![Pregunta 25](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.47.59%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner is running a content experiment.
What two best practices would the business practitioner keep in mind? (Choose two.)

*   **Opciones:**
    *   [A] Isolate the variables that are being tested
    *   [B] Ensure right metric is being used
    *   [C] Use a content survey
    *   [D] Understand the certainty

*   **✅ Respuesta Correcta:** `[A] Isolate the variables that are being tested`, `[B] Ensure right metric is being used`

*   **🧠 Intención de la Pregunta:** 
    *   Conocer los principios y buenas prácticas fundamentales a la hora de configurar experimentos A/B en Journey Optimizer.

*   **📖 Justificación Detallada:**
    *   Las dos mejores prácticas al realizar experimentación de contenido (A/B testing) son:
        1. **Aislar las variables:** Modificar un solo elemento a la vez (por ejemplo, solo la imagen o solo el asunto) para saber exactamente qué causó el cambio en el rendimiento.
        2. **Asegurar la métrica correcta:** Escoger un indicador de éxito que esté directamente vinculado con la variable que estás probando (ej. si pruebas Asuntos, la métrica correcta es "Open rate", no "Purchase rate").

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Content experimentation best practices (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/content-management/content-experiment/content-experiment)

---

### ❓ Pregunta 26
![Pregunta 26](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.48.13%20PM.jpeg)

**Transcripción de la pregunta:**
A Journey Optimizer business practitioner wants to target an audience with personalized offers across multiple channels. What would be configured in the offer representation for each marketing channel?

*   **Opciones:**
    *   [A] Rules
    *   [B] Placements
    *   [C] Components

*   **✅ Respuesta Correcta:** `[B] Placements`

*   **🧠 Intención de la Pregunta:** 
    *   Conocer la arquitectura del catálogo de ofertas y qué elemento define dónde (en qué canal/formato) se mostrará la oferta.

*   **📖 Justificación Detallada:**
    *   En Offer Decisioning, las **Representaciones** (Representations) de una oferta contienen los activos creativos y de texto (la imagen, el copy). Para que la oferta sepa en qué formato y canal debe entregarse esa representación específica (ej. un banner HTML vs un texto SMS), cada representación debe estar mapeada a un **Placement** (Ubicación/Emplazamiento).

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Create personalized offers (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/offer-decisioning/create-components/create-offers)

---

### ❓ Pregunta 27
![Pregunta 27](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.48.25%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner needs to evaluate a segment for a customer journey of product view > product add > checkout > No purchase.
What evaluation method would be used in combination with streaming data ingestion?

*   **Opciones:**
    *   [A] Dynamic
    *   [B] Multi-entity
    *   [C] Sequential

*   **✅ Respuesta Correcta:** `[C] Sequential`

*   **🧠 Intención de la Pregunta:** 
    *   Identificar el tipo de segmentación necesario para evaluar patrones de comportamiento basados en el orden del tiempo.

*   **📖 Justificación Detallada:**
    *   Un recorrido que requiere detectar una cadena de eventos específicos en un orden cronológico estricto ("product view" SEGUIDO DE "product add" SEGUIDO DE "checkout" SEGUIDO DE "No purchase") utiliza una lógica de segmentación **Secuencial (Sequential)**. AEP Segment Builder permite construir estas audiencias secuenciales arrastrando eventos al lienzo y usando el operador "Then" (Luego).

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Sequential segmentation (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/experience-platform/segmentation/ui/segment-builder#sequential-segmentation)

---

### ❓ Pregunta 28
![Pregunta 28](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.48.41%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner is creating a real-time journey to send an email to all profiles who viewed the "Seasonal Promotion" page only during the period of February 1- March 31, as a particular promotion is displayed during these months.
In what two ways would the business practitioner ensure that these profiles will join the journey only during this period? (Choose two.)

*   **Opciones:**
    *   [A] Set the Start date and End date of the Journey properties accordingly
    *   [B] Set the Start date and End date conditions accordingly directly within the Audience definition
    *   [C] Set the Start date and End date of the Message properties accordingly
    *   [D] Get the Adobe Journey Optimizer administrator to create an event that includes the corresponding Start date and End date

*   **✅ Respuesta Correcta:** `[A] Set the Start date and End date of the Journey properties accordingly`, `[B] Set the Start date and End date conditions accordingly directly within the Audience definition`

*   **🧠 Intención de la Pregunta:** 
    *   Saber cómo limitar la ventana de tiempo de calificación o entrada a un journey.

*   **📖 Justificación Detallada:**
    *   Existen dos enfoques primarios para limitar temporalmente quién entra a la experiencia:
        1. **Nivel de Journey:** Configurar la Fecha de Inicio y Fin directamente en las **Propiedades del Journey**. Una vez pasada la fecha de fin, el journey deja de aceptar nuevos perfiles.
        2. **Nivel de Audiencia/Segmento:** Si se usa una audiencia como entrada, se puede colocar la regla de negocio de tiempo (Ej: `timestamp between Feb 1 and Mar 31`) directamente en la **definición del segmento**.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Journey properties (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/about-journey-building/journey-properties)

---

### ❓ Pregunta 29
![Pregunta 29](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.48.57%20PM.jpeg)

**Transcripción de la pregunta:**
A marketer wants to analyze the click to open ratio (CTOR) across multiple email campaigns.
What feature within Adobe Journey Optimizer allows the marketer to achieve this goal?

*   **Opciones:**
    *   [A] Channel Analytics Integration
    *   [B] Dynamic Content Optimization
    *   [C] Engagement Tracking
    *   [D] Tracking Statistics

*   **✅ Respuesta Correcta:** `[A] Channel Analytics Integration`

*   **🧠 Intención de la Pregunta:** 
    *   Identificar la capacidad de AJO para integrarse con herramientas de análisis avanzadas (CJA) para visualizar KPIs agregados y multidimensionales (cross-campaign).

*   **📖 Justificación Detallada:**
    *   Mientras que AJO tiene un panel de reportes base, la evaluación profunda de KPIs (como el CTOR) "a través de múltiples campañas" ("across multiple email campaigns") a un nivel analítico avanzado se logra gracias a la arquitectura subyacente que integra el canal con **Customer Journey Analytics (CJA)** (referido en opciones de examen clásico como "Channel Analytics Integration"). Las opciones de "Tracking statistics" o "Engagement tracking" suelen ser capacidades transaccionales unitarias, no "características analíticas cruzadas".

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Reporting capabilities in AJO (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/reporting/reporting-overview)

---

### ❓ Pregunta 30
![Pregunta 30](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.49.10%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner wants to test a journey with a profile in order to test the journey logic.
What field needs to be set to "True" for a profile to be used in a journey in Test Mode?

*   **Opciones:**
    *   [A] testProfile
    *   [B] validator
    *   [C] QAProfile
    *   [D] tester

*   **✅ Respuesta Correcta:** `[A] testProfile`

*   **🧠 Intención de la Pregunta:** 
    *   Saber identificar qué atributo booleano debe inyectarse en los perfiles de AEP para que sean reconocidos por el sistema de Test de Journey Optimizer.

*   **📖 Justificación Detallada:**
    *   Para que un perfil pueda ser disparado usando el botón "Test" en el lienzo de Journey Optimizer, el perfil debe estar explícitamente etiquetado como perfil de prueba en la base de datos de Experience Platform. Esto se logra seteando a `true` el campo booleano estándar del esquema principal llamado **`testProfile`**. Si no es True, AJO bloqueará la ejecución de la prueba con ese perfil.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Test your journey (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/about-journey-building/test-your-journey)

---

### ❓ Pregunta 31
![Pregunta 31](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.49.23%20PM.jpeg)

**Transcripción de la pregunta:**
What is the primary benefit of using fragments?

*   **Opciones:**
    *   [A] Security
    *   [B] Compatibility
    *   [C] Reusability

*   **✅ Respuesta Correcta:** `[C] Reusability`

*   **🧠 Intención de la Pregunta:** 
    *   Entender la propuesta de valor fundamental de la arquitectura de "Fragmentos" (ya sean de contenido o de expresión) en Adobe.

*   **📖 Justificación Detallada:**
    *   Los Fragmentos (como Content Fragments o Expression Fragments) se crean con el objetivo principal de la **Reusabilidad (Reusability)**. Permiten a los practitioners crear un bloque de texto, lógica o código HTML una sola vez y usarlo en múltiples correos, journeys o campañas. Si algo cambia (ej. un link de términos y condiciones), solo se edita el fragmento y se actualiza en todas partes.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [About fragments (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/content-management/fragments/about-fragments)

---

### ❓ Pregunta 32
![Pregunta 32](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.50.00%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner needs to evaluate a segment for same-page and next-page personalization.
What evaluation method would be used?

*   **Opciones:**
    *   [A] Batch
    *   [B] Streaming
    *   [C] Edge

*   **✅ Respuesta Correcta:** `[C] Edge`

*   **🧠 Intención de la Pregunta:** 
    *   Diferenciar entre Batch, Streaming y Edge Segmentation y saber cuál usar para lograr latencias ultra-bajas (milisegundos) que interactúan con una web en vivo.

*   **📖 Justificación Detallada:**
    *   Para casos de uso in-bound (es decir, el usuario está navegando tu página web y necesitas personalizar lo que ve al instante), necesitas latencias extremas. Esto se logra con la segmentación de tipo **Edge**, donde las reglas del segmento se evalúan geográficamente cerca del usuario en la red de AEP Edge Network, y no en el Hub/Plataforma principal. Esto es lo que permite personalizar la "misma página" o la "página siguiente" durante la visita del usuario.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Edge segmentation overview (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/experience-platform/segmentation/ui/edge-segmentation)

---

### ❓ Pregunta 33
![Pregunta 33](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.50.19%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner wants to build a "Black Friday" Offer Collection by manually selecting individual offers relevant to a "Black Friday" promotion.
Which type of Offer Collection would the business practitioner create?

*   **Opciones:**
    *   [A] A Dynamic Collection
    *   [B] A Mixed Collection
    *   [C] A Static Collection

*   **✅ Respuesta Correcta:** `[C] A Static Collection`

*   **🧠 Intención de la Pregunta:** 
    *   Conocer los diferentes tipos de Colecciones de Ofertas (Offer Collections) disponibles en el módulo de Offer Decisioning de AJO.

*   **📖 Justificación Detallada:**
    *   Una **Static Collection (Colección Estática)** se compone eligiendo a mano y seleccionando ofertas individuales (una por una) de la lista disponible para meterlas a una carpeta/colección. Por otro lado, una Dynamic Collection usa reglas lógicas o etiquetas (tags) para auto-poblarse de ofertas. Como la pregunta menciona "by manually selecting individual offers" (seleccionando manualmente ofertas individuales), es por definición una colección estática.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Create collections (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/offer-decisioning/create-components/create-collections)

---

### ❓ Pregunta 34
![Pregunta 34](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.50.26%20PM.jpeg)

**Transcripción de la pregunta:**
An Adobe Journey Optimizer business practitioner wants to capture the state of the system at the time an action occurred.
Which class would the business practitioner use for this purpose?

*   **Opciones:**
    *   [A] XDM ExperienceEvent
    *   [B] XDM Individual Profile
    *   [C] XDM Time-series Schema
    *   [D] XDM Ad-hoc Schema

*   **✅ Respuesta Correcta:** `[A] XDM ExperienceEvent`

*   **🧠 Intención de la Pregunta:** 
    *   Diferenciar entre las clases base de esquemas XDM para registros estáticos vs. eventos de comportamiento de series de tiempo.

*   **📖 Justificación Detallada:**
    *   El modelo de datos Experience Data Model (XDM) maneja dos clases principales: "XDM Individual Profile" para guardar el estado y atributos persistentes de una persona, y **"XDM ExperienceEvent"** para registrar transacciones y comportamientos inmutables con una marca de tiempo. Es decir, captura el estado o la acción exactamente en el milisegundo en el que ocurrió (por ejemplo, una adición al carrito o una compra).

*   **🔗 Documentación Oficial de Respaldo:**
    *   [XDM ExperienceEvent class (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/experience-platform/xdm/classes/experienceevent)

---

### ❓ Pregunta 35
![Pregunta 35](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.50.37%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner sets up a streaming segment B that qualifies profiles based on data fields and membership to segment A. Segment A has the condition that people who have purchased a product in the past hour. They notice that the segment is not qualifying profiles as expected.
Why might this be?

*   **Opciones:**
    *   [A] Because segment B is based on segment A, it too will be evaluated nightly even though it's defined as a streaming segment.
    *   [B] The data fields are likely set up incorrectly and not populating the right data.
    *   [C] Because segment A is a batch segment, B will move further away from the actual data until it re-syncs with the segment B update.
    *   [D] A membership to a batch segment in the conditional configuration of a streaming segment cannot be used.

*   **✅ Respuesta Correcta:** `[A] Because segment B is based on segment A, it too will be evaluated nightly even though it's defined as a streaming segment.`

*   **🧠 Intención de la Pregunta:** 
    *   Entender las limitaciones sistémicas y la "degradación" automática a evaluación Batch cuando se anidan segmentos con tiempos de evaluación diferentes.

*   **📖 Justificación Detallada:**
    *   En Adobe Experience Platform, la regla general para la anidación de segmentos es el denominador común más restrictivo. Si intentas crear un Segmento B como "Streaming", pero dentro de sus reglas lo haces dependiente de pertenecer a un Segmento A que, por sus condiciones pesadas, califica para evaluación **Batch** (Lote nocturno), la plataforma automáticamente degrada el Segmento B a evaluación Batch (Nightly evaluation). Por lo tanto, el Segmento B no calificará usuarios en streaming (tiempo real) como se esperaba, sino que esperará al procesamiento del lote de 24 horas.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Streaming segmentation (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/experience-platform/segmentation/ui/streaming-segmentation#guardrails)

---

### ❓ Pregunta 36
![Pregunta 36](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.50.59%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner wants to create an audience of customers except Platinum ones. The practitioner can use these audiences:
A = All customers
B = Platinum customers
C = Gold customers
D = Silver customers
What is the correct sequence to follow?

*   **Opciones:**
    *   [A] Add audience A, Add audience B to A by using the intersection method
    *   [B] Add audience A, Exclude audience C, Exclude audience D
    *   [C] Add audience A, Exclude audience B

*   **✅ Respuesta Correcta:** `[C] Add audience A, Exclude audience B`

*   **🧠 Intención de la Pregunta:** 
    *   Validar conocimientos básicos de lógica de conjuntos en el constructor de segmentos (Segment Builder) de AEP.

*   **📖 Justificación Detallada:**
    *   Para crear un segmento que incluya a todos los clientes excepto a los Platino ("customers except Platinum ones"), la lógica de exclusión directa es la más eficiente y correcta. Se arrastra el segmento de todos los clientes (Audiencia A) y luego se usa la función de exclusión ("Exclude") para restar a la Audiencia B (Platinum). Tratar de sumar oro, plata, etc., podría dejar fuera a clientes sin tier que sí son clientes, por ende la exclusión directa es la respuesta exacta.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Segment Builder overview (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/experience-platform/segmentation/ui/segment-builder#exclude)

---

### ❓ Pregunta 37
![Pregunta 37](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.51.14%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner notices that the Profile is missing when an event Activity is triggered along with the Profile API creation.
What two actions would the business practitioner take? (Choose two.)

*   **Opciones:**
    *   [A] Set up a journey that does not immediately leverage the profile
    *   [B] Add a wait activity after the first event, to give the time it needs to perform the ingestion to Profile Service
    *   [C] Wait for the Dataset refresh to UPS that happens every 15 minutes
    *   [D] Wait for the segmentation job to Run before Publishing the Journey

*   **✅ Respuesta Correcta:** `[A] Set up a journey that does not immediately leverage the profile`, `[B] Add a wait activity after the first event, to give the time it needs to perform the ingestion to Profile Service`

*   **🧠 Intención de la Pregunta:** 
    *   Manejar condiciones de carrera (race conditions) entre la ingesta de eventos de streaming y la resolución/hidratación del perfil en el Unified Profile Service (UPS).

*   **📖 Justificación Detallada:**
    *   Cuando un perfil se crea mediante API al mismo tiempo que se dispara un evento, la creación del perfil en la base de datos (Identity Graph/Profile Store) puede tomar algunos segundos o milisegundos más que el evento en llegar al journey. Para evitar que el journey falle porque "no encuentra el perfil", las mejores prácticas son: 1) Poner una actividad de **Wait** (ej. 1 minuto) para darle tiempo al sistema de ingestar el perfil, o 2) Diseñar un journey que en sus primeros pasos use solo datos del payload del evento (que vienen en el mismo evento) y no dependa inmediatamente de ir a buscar atributos históricos del perfil.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Data ingestion latency (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/about-journey-building/read-audience#data-latency)

---

### ❓ Pregunta 38
![Pregunta 38](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.51.29%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner is creating a new "Business Event" and has to select a schema that describes this event.
What is the type of the identity namespace that must be set in the schema for the primary ID attribute?

*   **Opciones:**
    *   [A] Non-people identifier
    *   [B] Cross Device ID
    *   [C] Email
    *   [D] Device ID

*   **✅ Respuesta Correcta:** `[A] Non-people identifier`

*   **🧠 Intención de la Pregunta:** 
    *   Entender la diferencia fundamental en el modelado de datos (XDM) entre eventos unitarios (asociados a personas) y Business Events (eventos del sistema/negocio).

*   **📖 Justificación Detallada:**
    *   Un "Business Event" en Adobe Journey Optimizer es un evento que no está atado a un individuo específico (por ejemplo, "Un producto volvió a estar en stock", "El clima cambió", "El sistema se cayó"). Por lo tanto, en su esquema XDM, la identidad principal NO puede ser un identificador de persona (como Email o Device ID), sino que debe ser un **Non-people identifier** (Identificador que no es de persona, como un ID de producto o un ID de tienda).

*   **🔗 Documentación Oficial de Respaldo:**
    *   [About business events (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/about-journey-building/business-events)

---

### ❓ Pregunta 39
![Pregunta 39](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.51.44%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner is asked to execute one control group and two content treatments for a Campaign.
What steps would the business practitioner take?

*   **Opciones:**
    *   [A] Use A/B testing feature in Campaign
    *   [B] Use the A/B/control group test feature Email Action
    *   [C] Create a journey with two treatment plans and one holdout group
    *   [D] Create a Campaign with two treatment plans and one holdout group

*   **✅ Respuesta Correcta:** `[D] Create a Campaign with two treatment plans and one holdout group`

*   **🧠 Intención de la Pregunta:** 
    *   Conocer la terminología exacta de la UI de Adobe Journey Optimizer para experimentación de contenido en Campañas.

*   **📖 Justificación Detallada:**
    *   En Adobe Journey Optimizer, para realizar pruebas A/B dentro de una Campaña, la función específica se llama "Content Experiment". Al configurarlo, el sistema te permite añadir variaciones del contenido llamadas **"Treatments"** (Tratamientos) y reservar un porcentaje de la audiencia que no recibirá nada, llamado **"Holdout group"** (Grupo de control). Por tanto, la acción literal es crear una campaña con "dos treatment plans" y "un holdout group".

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Content experiment in campaigns (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/content-management/content-experiment/content-experiment)

---

### ❓ Pregunta 40
![Pregunta 40](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.52.13%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner wants to start a customer journey whenever someone makes an online purchase.
What activity type will the business practitioner need to use to start this journey?

*   **Opciones:**
    *   [A] A Reaction activity
    *   [B] An Orchestration activity
    *   [C] An Action activity
    *   [D] An Event activity

*   **✅ Respuesta Correcta:** `[D] An Event activity`

*   **🧠 Intención de la Pregunta:** 
    *   Identificar las categorías principales de actividades en el canvas de un Journey y saber cuál inicia procesos basados en comportamientos en tiempo real.

*   **📖 Justificación Detallada:**
    *   Las actividades de inicio ("Start activities") en AJO se dividen típicamente en Eventos y Audiencias. Una "compra online" es una acción discreta en el tiempo (un ExperienceEvent). Por lo tanto, para que el journey empiece "cada vez" que ocurre esta acción individual, se requiere colocar una actividad de **Event** en el lienzo.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Journey activities overview (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/about-journey-building/journey-activities)

---

### ❓ Pregunta 41
![Pregunta 41](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.52.32%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner is working on a loyalty program and wants to congratulate the new customers who are entering the Silver level of the program, but not all the Silver customers. The practitioner can use a streamed audience named 'Silver customers'.
What is the correct way to configure the journey?

*   **Opciones:**
    *   [A] Start the journey with an 'Audience qualification' activity, Select the audience named 'Silver customers' and check the box 'Enter', Add an Email activity to congratulate customers
    *   [B] Start the journey with an 'Audience qualification' activity, Select the audience named 'Silver customers', Add a condition to check that the 'Last qualification time' is greater than 10 minutes, Add an Email activity
    *   [C] Start the journey with a 'Read an audience' activity, Select the audience named 'Silver customers', Add an Email activity

*   **✅ Respuesta Correcta:** `[A] Start the journey with an 'Audience qualification' activity, Select the audience named 'Silver customers' and check the box 'Enter', Add an Email activity to congratulate customers`

*   **🧠 Intención de la Pregunta:** 
    *   Diferenciar entre "Read Audience" (campaña masiva a todos los existentes) vs "Audience Qualification" (triggeado por cambios de estado), y entender las opciones "Enter" vs "Exit".

*   **📖 Justificación Detallada:**
    *   Como el objetivo es felicitar solo a los clientes **nuevos** que están "entrando" al nivel, no queremos a los que ya eran Silver (los históricos). La actividad **Audience Qualification** (Calificación de audiencia) escucha en tiempo real cuando un perfil cambia de estado. Al configurar la opción **"Enter"** (Entrar), el journey se disparará exclusivamente para el perfil en el momento exacto en que sus datos cambian y califica para el segmento "Silver customers" por primera vez.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Audience Qualification activity (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/about-journey-building/audience-qualification)

---

### ❓ Pregunta 42
![Pregunta 42](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.52.56%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner in California (Pacific Time) is building a journey for a company that services multiple time zones in the USA. They want the email to go to each customer at 1:00pm in their unique time zones.
Assuming the company has time zone data for their customers, how would this be achieved?

*   **Opciones:**
    *   [A] In the journey preferences, select "Use Profile time zone in waits and conditions", then use a Wait activity before the email to wait until 1:00pm
    *   [B] In the journey preferences, select "Use Profile time zone in waits and conditions", then configure the journey as desired and schedule the start for 1:00pm Pacific Time
    *   [C] Configure a different journey for each time zone and schedule each on to start at 1:00pm in their respective time zones

*   **✅ Respuesta Correcta:** `[A] In the journey preferences, select "Use Profile time zone in waits and conditions", then use a Wait activity before the email to wait until 1:00pm`

*   **🧠 Intención de la Pregunta:** 
    *   Configurar la ejecución de nodos de un journey respetando el huso horario local de cada perfil de forma dinámica.

*   **📖 Justificación Detallada:**
    *   AJO permite usar el huso horario almacenado en el esquema de cada perfil (Profile time zone). Para habilitar esta funcionalidad globalmente en el journey, se debe ir a "Journey properties" y habilitar **"Use Profile time zone in waits and conditions"**. Una vez habilitado, si insertas una actividad de **Wait** configurada para esperar hasta una hora específica (1:00 PM), AJO calculará dinámicamente cuándo liberar a cada usuario basándose en su huso horario individual, garantizando que cada quien reciba el correo a la 1:00 PM local.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Time zone management in journeys (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/about-journey-building/timezone-management)

---

### ❓ Pregunta 43
![Pregunta 43](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.53.15%20PM.jpeg)

**Transcripción de la pregunta:**
When validating the content of an email template, what are two recommended processes? (Choose two.)

*   **Opciones:**
    *   [A] Within the Edit content from the Template properties, select an email surface and send a proof
    *   [B] Within the Journey main screen, create a test journey and use the new template in an email activity
    *   [C] Within a validation tool, import the HTML of the final template and validate
    *   [D] Within the Edit content from the Template properties, click Simulate Content and select a test profile to check the email rendering

*   **✅ Respuesta Correcta:** `[A] Within the Edit content from the Template properties, select an email surface and send a proof`, `[D] Within the Edit content from the Template properties, click Simulate Content and select a test profile to check the email rendering`

*   **🧠 Intención de la Pregunta:** 
    *   Conocer el flujo de QA nativo dentro del Email Designer de AJO sin necesidad de construir un journey de prueba complejo.

*   **📖 Justificación Detallada:**
    *   Para validar un correo, Adobe provee dos herramientas directamente en el editor:
        1. **Simulate Content (Simular contenido):** Permite elegir perfiles de prueba de la base de datos para previsualizar cómo se renderizan las variables personalizadas y la lógica condicional en la pantalla.
        2. **Send a proof (Enviar prueba):** Permite enviar el correo físico a tu bandeja de entrada de QA, seleccionando un perfil de prueba para inyectar los datos, garantizando que el HTML y los enlaces lleguen bien al cliente final.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Simulate and prove messages (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/content-management/preview-and-proof/preview-and-proof)

---

### ❓ Pregunta 44
![Pregunta 44](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.53.25%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner creates, tests, and publishes a journey. A few days later the business practitioner needs to edit a condition in the live journey.
What is the best way to do this?

*   **Opciones:**
    *   [A] Open the live journey, click "Create a new version", make the edits in the new version then publish
    *   [B] Open the live journey, click "Duplicate", make the edits in the new version and publish, then stop the previous version
    *   [C] Close the live journey to new entrances, click "Duplicate", make the edits in the new version and publish
    *   [D] Stop the live journey, highlight all the activities, copy and paste into a new journey, make the edits in the new journey and publish

*   **✅ Respuesta Correcta:** `[A] Open the live journey, click "Create a new version", make the edits in the new version then publish`

*   **🧠 Intención de la Pregunta:** 
    *   Conocer la funcionalidad de control de versiones de Journeys en AJO para editar recorridos en producción de forma segura sin interrupciones.

*   **📖 Justificación Detallada:**
    *   Los Journeys en AJO no se pueden editar directamente una vez que están "Live" (publicados). La mejor práctica y la herramienta nativa diseñada para esto es hacer clic en el botón **"Create a new version"** dentro del journey en vivo. Esto crea un borrador de la versión 2. Al publicar la versión 2, la versión 1 dejará automáticamente de recibir nuevos usuarios, pero permitirá que los que ya estaban adentro terminen su recorrido, mientras que los nuevos entrarán limpiamente a la versión 2. Detener (Stop) o Duplicar genera caídas en los reportes e interrupciones en la experiencia de cliente.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Journey versions (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/about-journey-building/journey-versions)

---

### ❓ Pregunta 45
![Pregunta 45](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.53.54%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner published a journey with Audience Qualification but does not see any audience getting qualified in the Journey immediately after publishing even if the audience is entering.
What would be the reason for this?

*   **Opciones:**
    *   [A] Journey re-entrance is not selected
    *   [B] Number of activities in the journey is more than 50
    *   [C] Audience qualification activity may take up to 10 minutes
    *   [D] Waiting period for segment evaluation is 24 hours

*   **✅ Respuesta Correcta:** `[C] Audience qualification activity may take up to 10 minutes`

*   **🧠 Intención de la Pregunta:** 
    *   Entender los tiempos de propagación y latencia del sistema al activar escuchas en streaming (Audience Qualification) en AJO.

*   **📖 Justificación Detallada:**
    *   De acuerdo con los "Guardrails" y mejores prácticas de Adobe Journey Optimizer, una vez que un journey es publicado conteniendo una actividad de tipo **"Audience Qualification"**, el servicio encargado de escuchar la red de Edge y procesar estos triggers puede tomar **hasta 10 minutos** en cachear la configuración y estar completamente activo. Por tanto, es normal no ver personas ingresando de inmediato, incluso si están calificando para la audiencia en ese mismo instante.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Audience Qualification guardrails (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/about-journey-building/audience-qualification)

---

### ❓ Pregunta 46
![Pregunta 46](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.54.08%20PM.jpeg)

**Transcripción de la pregunta:**
What two ways would a business practitioner use to create an Offer Collection that contains all offers with a common theme? (Choose two).

*   **Opciones:**
    *   [A] Adjust the Eligibility Conditions of the offer to select that theme.
    *   [B] Manually select the offers with that theme in the Offer Collection.
    *   [C] Create the Offer Qualifier for this theme, then create the offers and make sure to select the corresponding Offer Qualifier. Then create the offer collection to search for offers with that Offer Qualifier and include them automatically.
    *   [D] Create the offers and make sure to add the theme in the offer label. Then create the Offer Collection to search for offers with that theme and include them automatically.

*   **✅ Respuesta Correcta:** `[B] Manually select the offers with that theme in the Offer Collection.`, `[C] Create the Offer Qualifier for this theme, then create the offers and make sure to select the corresponding Offer Qualifier. Then create the offer collection to search for offers with that Offer Qualifier and include them automatically.`

*   **🧠 Intención de la Pregunta:** 
    *   Diferenciar entre las dos metodologías principales para crear Colecciones de Ofertas (Offer Collections): estática y dinámica.

*   **📖 Justificación Detallada:**
    *   En Adobe Offer Decisioning, las colecciones agrupan ofertas para usarse en las decisiones. Puedes hacerlo de manera **Estática** (seleccionando manualmente una a una las ofertas que deseas incluir, opción B) o de manera **Dinámica**. Para que sea dinámico basado en un "tema", primero creas un **Collection Qualifier** (a veces llamado Tag u Offer Qualifier), se lo asignas a las ofertas, y luego configuras la colección para que incluya automáticamente todas las ofertas que tengan ese Qualifier (opción C).

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Create collections (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/offer-decisioning/manage-offers/collections)

---

### ❓ Pregunta 47
![Pregunta 47](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.54.24%20PM.jpeg)

**Transcripción de la pregunta:**
A quality assurance worker tries to send 150 Test Profiles through a journey in Test Mode but is unable to do so.
For what two reasons would this happen? (Choose two.)

*   **Opciones:**
    *   [A] One or more of the profiles has already been used in Test Mode previously
    *   [B] One of the activities is configured incorrectly
    *   [C] The maximum number of test profiles than can enter a journey during a test session is 100
    *   [D] One or more of the profiles is not marked as a Test Profile

*   **✅ Respuesta Correcta:** `[C] The maximum number of test profiles than can enter a journey during a test session is 100`, `[D] One or more of the profiles is not marked as a Test Profile`

*   **🧠 Intención de la Pregunta:** 
    *   Conocer las limitaciones técnicas ("guardrails") y requisitos de atributos para usar el Test Mode en Adobe Journey Optimizer.

*   **📖 Justificación Detallada:**
    *   El "Test Mode" en AJO tiene restricciones de seguridad para no sobrecargar el sistema durante las pruebas. La primera regla es que el sistema admite un **máximo de 100 perfiles de prueba** en una sola sesión; intentar enviar 150 causará error. La segunda regla es que cualquier perfil que ingrese a esta modalidad DEBE tener el atributo del sistema `testProfile` establecido como `true`. Si alguno de esos 150 perfiles carece de esa marca, será rechazado.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Test a journey (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/about-journey-building/test-your-journey)

---

### ❓ Pregunta 48
![Pregunta 48](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.54.37%20PM.jpeg)

**Transcripción de la pregunta:**
When designing an email in a campaign or a journey, which option would be selected to save email HTML for future reuse?

*   **Opciones:**
    *   [A] "Save"; all new content is automatically stored as a template
    *   [B] "Save as content template"
    *   [C] Export HTML

*   **✅ Respuesta Correcta:** `[B] "Save as content template"`

*   **🧠 Intención de la Pregunta:** 
    *   Identificar el botón correcto dentro del Email Designer de AJO para persistir un diseño en la biblioteca global.

*   **📖 Justificación Detallada:**
    *   Al crear un diseño de correo electrónico específico dentro del contexto de una Campaña o Journey, usar la opción "Save" (Guardar) simplemente guarda el borrador para esa ejecución en particular. Para guardar el diseño en la biblioteca de Content Templates (plantillas de contenido) de forma que otros Journeys o Campañas puedan consumirlo en el futuro, se debe usar la función explícita **"Save as content template"** (Guardar como plantilla de contenido).

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Save content as a template (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/content-management/content-templates)

---

### ❓ Pregunta 49
![Pregunta 49](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.54.54%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner wants to find out how many times an offer was shown in a delivery.
What is the name of this metric in the Journey global report?

*   **Opciones:**
    *   [A] Offer view
    *   [B] Offer display
    *   [C] Offer impression
    *   [D] Offer open

*   **✅ Respuesta Correcta:** `[C] Offer impression`

*   **🧠 Intención de la Pregunta:** 
    *   Conocer el glosario de métricas estándar de Adobe Journey Optimizer y Offer Decisioning en los reportes globales.

*   **📖 Justificación Detallada:**
    *   En Adobe Experience Platform y Journey Optimizer, el evento técnico que indica que un motor de decisiones entregó una oferta y esta fue renderizada se mapea al tipo de evento XDM `decisioning.propositionDisplay`. En los tableros de reportes de AJO (Journey global reports y Offer reports), la métrica que cuantifica este volumen de exposiciones recibe el nombre de **"Offer impression"** (Impresión de la oferta).

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Global report: Offers dimensions and metrics (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/reporting/global-report/global-offers)

---

### ❓ Pregunta 50
![Pregunta 50](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.55.11%20PM.jpeg)

**Transcripción de la pregunta:**
While defining a segment a business practitioner needs to extend Real-Time Customer Profile data with additional data based on products.
Which advanced segmentation method would be used?

*   **Opciones:**
    *   [A] Sequential
    *   [B] Multi-entity
    *   [C] Dynamic

*   **✅ Respuesta Correcta:** `[B] Multi-entity`

*   **🧠 Intención de la Pregunta:** 
    *   Reconocer qué funcionalidad del Segment Builder permite cruzar los perfiles con clases XDM "Record" (como tablas de catálogo de productos) usando relaciones.

*   **📖 Justificación Detallada:**
    *   El método de segmentación **Multi-entity** (Multi-entidad) es una característica avanzada que te permite extender la información del Perfil del Cliente en Tiempo Real con datos de otras entidades (esquemas) conectadas. Por ejemplo, te permite decir "Muéstrame las personas que compraron productos de la clase Zapatos, donde el catálogo de productos indica que los Zapatos pertenecen a la marca X". Accedes a los atributos del producto (que no residen en el perfil, sino en una tabla auxiliar de inventario) a través de las relaciones establecidas entre los esquemas XDM.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Multi-entity segmentation (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/experience-platform/segmentation/multi-entity-segmentation)

---

### ❓ Pregunta 51
![Pregunta 51](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.55.34%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner creates a customer journey with a Send Email activity. The business practitioner wants the journey to pause for up to one day or until the email is clicked by the recipient. They would also like to change the next activity based on whether the email was clicked or not.
Which event activity can be used to accomplish this?

*   **Opciones:**
    *   [A] The Reaction activity
    *   [B] The Audience Qualification activity
    *   [C] A Custom activity

*   **✅ Respuesta Correcta:** `[A] The Reaction activity`

*   **🧠 Intención de la Pregunta:** 
    *   Entender el propósito específico del "Reaction Event" para ramificar flujos según el comportamiento del usuario respecto a un mensaje anterior en el mismo journey.

*   **📖 Justificación Detallada:**
    *   En Adobe Journey Optimizer, un evento de **Reacción (Reaction activity)** es un evento de escucha especial diseñado exclusivamente para reaccionar a la entrega u opens/clicks del mensaje enviado justo en pasos anteriores dentro de ese mismo journey. Al poner un nodo de Reacción tras un email, configuras un tiempo de espera ("timeout" de 1 día) y el sistema ramificará a los usuarios dinámicamente: camino 1 si hicieron clic, camino de "timeout" si no interactuaron pasado ese día.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Reaction events (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/about-journey-building/reaction-events)

---

### ❓ Pregunta 52
![Pregunta 52](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.55.50%20PM.jpeg)

**Transcripción de la pregunta:**
A Test Profile flows the right way in the journey but does not receive the messages as expected.
What two things should be checked? (Choose two.)

*   **Opciones:**
    *   [A] If any of the personalization fields are empty
    *   [B] That the request to send the message was accepted
    *   [C] That the Streaming Ingestion APIs payload structure was correctly followed
    *   [D] That Journey Optimizer has successfully sent the message

*   **✅ Respuesta Correcta:** `[A] If any of the personalization fields are empty`, `[D] That Journey Optimizer has successfully sent the message`

*   **🧠 Intención de la Pregunta:** 
    *   Pasos de "troubleshooting" cuando un journey se ejecuta pero el "delivery" falla para el canal destino.

*   **📖 Justificación Detallada:**
    *   Si el log o interfaz muestra que el perfil de prueba entró y avanzó "correctamente" por las ramificaciones del journey (descartando así la opción C de ingesta de API, porque si estuviera mal no entraría), el problema se encuentra en la etapa final de renderizado y envío del mensaje. Las dos revisiones obligatorias son: 1) Chequear en los reportes de ejecución paso a paso ("That Journey Optimizer has successfully sent the message") para ver si el nodo de correo arroja un estatus de error o éxito, y 2) Confirmar que el Perfil de prueba tenga datos en todos los campos que el correo usa como variables ("If any of the personalization fields are empty"), ya que un campo vacío en un atributo requerido provoca que el correo falle el proceso de renderización (Rendering failed) y se descarte de la cola.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Troubleshooting journey test mode (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/about-journey-building/test-your-journey#troubleshoot)

---

### ❓ Pregunta 53
![Pregunta 53](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.56.08%20PM.jpeg)

**Transcripción de la pregunta:**
A retail company uses Adobe Journey Optimizer (AJO) and Adobe Experience Platform (AEP) to personalize customer experiences. An AJO business practitioner wants to ensure that only approved custom marketing actions are activated for each channel.
Which approach is most effective in achieving this goal?

*   **Opciones:**
    *   [A] Configure AJO to automatically filter these custom actions based on pre-defined criteria, ignoring data governance policies
    *   [B] Create separate journeys for approved custom actions based on their governance policies
    *   [C] Utilize Data Governance policies to define data usage labels for approved custom actions, then apply these labels within the journeys

*   **✅ Respuesta Correcta:** `[C] Utilize Data Governance policies to define data usage labels for approved custom actions, then apply these labels within the journeys`

*   **🧠 Intención de la Pregunta:** 
    *   Identificar el marco de Data Governance de Adobe (DULE) como el estándar de la plataforma para asegurar el uso legítimo de datos.

*   **📖 Justificación Detallada:**
    *   Adobe Experience Platform tiene un marco de gobernanza llamado "Data Governance (DULE - Data Usage Labeling and Enforcement)". Para garantizar que datos sensibles o personalizados solo se envíen a los destinos correctos (marketing actions) que tienen permiso legal (aprobados), la mejor práctica y más efectiva es aplicar **Data usage labels** (etiquetas de uso de datos, ej: C1, C2) a los atributos de esquema, y luego configurar políticas que validen estas etiquetas contra la acción de marketing que el Journey o Campaña intenta realizar, bloqueando las ejecuciones no autorizadas.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Data Governance overview (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/experience-platform/data-governance/home)

---

### ❓ Pregunta 54
![Pregunta 54](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.56.18%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner has been assigned a task to organize customer experience data in a standardized framework in Adobe Experience Platform.
Which service provides this framework?

*   **Opciones:**
    *   [A] Identity Service
    *   [B] Real-Time Customer Profile
    *   [C] Experience Data Model (XDM)
    *   [D] Catalog Service

*   **✅ Respuesta Correcta:** `[C] Experience Data Model (XDM)`

*   **🧠 Intención de la Pregunta:** 
    *   Conocimiento fundamental de la arquitectura de AEP y la estandarización de datos.

*   **📖 Justificación Detallada:**
    *   El **Experience Data Model (XDM)** es el framework estandarizado (una estructura de diccionarios, clases y esquemas de datos) proporcionado por Adobe Experience Platform para describir las experiencias del cliente. XDM normaliza y categoriza todos los datos provenientes de distintas fuentes en una taxonomía unificada, lo que permite a los demás servicios de la plataforma (como Real-Time Customer Profile o AJO) entender la información de inmediato.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [XDM System overview (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/experience-platform/xdm/home)

---

### ❓ Pregunta 55
![Pregunta 55](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.56.34%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner has made updates to an offer that is being used in several emails.
What would happen next to reflect the changes?

*   **Opciones:**
    *   [A] Changes will appear automatically
    *   [B] Clear the cache
    *   [C] Create new email messages because changes cannot be propagated
    *   [D] Open the emails and reselect the offer

*   **✅ Respuesta Correcta:** `[A] Changes will appear automatically`

*   **🧠 Intención de la Pregunta:** 
    *   Aprovechar el dinamismo del Offer Decisioning Engine, comprendiendo cómo los cambios se propagan a todos los envíos.

*   **📖 Justificación Detallada:**
    *   Una de las mayores ventajas de usar Offer Decisioning en AJO es que las ofertas operan de forma dinámica como referencias (referral blocks). Si se actualiza la imagen, URL o el texto en la oferta original desde el catálogo de la Offer Library, la próxima vez que los emails se despachen (o se abran, dependiendo del setup del canal y tiempo de ejecución de decisión), el motor buscará la última versión aprobada de la oferta. Por lo tanto, los **cambios aparecerán automáticamente** sin tener que editar manualmente ("Open the emails and reselect the offer") todas las plantillas.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Manage offers (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/offer-decisioning/manage-offers/manage-offers)

---

### ❓ Pregunta 56
![Pregunta 56](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.56.50%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner wants to test the offer decisions being created and verify if all are rendering correctly for different audience segments in the email journey.
How would this be accomplished?

*   **Opciones:**
    *   [A] From Offers - choose the Simulation Menu, choose Placement, add Test Profile, add Decision Scope, then "View Results"
    *   [B] For each audience segment, go to the Customer Profiles menu, open the Rendering tab, select the relevant offer, and click "Run Simulation"
    *   [C] Use a test profile in the Journey and trigger individual email sends to users representing each segment

*   **✅ Respuesta Correcta:** `[A] From Offers - choose the Simulation Menu, choose Placement, add Test Profile, add Decision Scope, then "View Results"`

*   **🧠 Intención de la Pregunta:** 
    *   Verificar el conocimiento de la herramienta nativa de simulación dentro de la interfaz de "Offer Decisioning".

*   **📖 Justificación Detallada:**
    *   Para probar cómo un motor de decisiones entregará y renderizará las ofertas para diferentes perfiles, Adobe Journey Optimizer incluye una herramienta dedicada llamada **Simulation** dentro de la sección de Offers (Decision Management). El flujo correcto es ir al menú de Simulación, configurar el Placement (e.g. Email HTML), seleccionar el Test Profile (que tiene los atributos del segmento que deseas probar), y definir el Decision Scope (la decisión que estás testeando), para finalmente ver los resultados y comprobar qué ofertas ganan y cómo se ven.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Simulate offer decisions (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/offer-decisioning/simulate-offers)

---

### ❓ Pregunta 57
![Pregunta 57](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.57.02%20PM.jpeg)

**Transcripción de la pregunta:**
A digital marketer is planning a campaign for a travel agency using Adobe Journey Optimizer (AJO). The goal is to encourage customers to explore personalized travel destinations based on their preferences and past booking history. As part of the campaign, the marketer wants to leverage personalized URLs within the email messages to direct recipients to specific pages showcasing tailored travel packages.
How can the marketer implement personalized URLs effectively in Adobe Journey Optimizer to drive engagement for the travel campaign?

*   **Opciones:**
    *   [A] Create a dynamic personalized URL directing each recipient to a unique page
    *   [B] Use a personalized URL without parameters so it does not raise any security issues
    *   [C] Apply a personalized URL only to text content in email messages, as images might cause loading issues
    *   [D] Use the same personalized URL for all recipients to ensure a consistent user experience

*   **✅ Respuesta Correcta:** `[A] Create a dynamic personalized URL directing each recipient to a unique page`

*   **🧠 Intención de la Pregunta:** 
    *   Comprender el concepto y beneficio de los PURLs (Personalized URLs) en campañas de marketing.

*   **📖 Justificación Detallada:**
    *   Las URL personalizadas (PURLs) se construyen dinámicamente inyectando atributos del perfil (como el ID del usuario, su nombre o destino preferido) en la estructura del enlace. La opción A describe exactamente este uso: crear un enlace dinámico que dirige a cada usuario a una página única (o a una página base que renderiza contenido único basado en los parámetros de la URL pasados). Las otras opciones anulan el propósito de la personalización (D, B) o presentan limitaciones irreales (C).

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Personalize URLs (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/content-management/personalization/personalize-urls)

---

### ❓ Pregunta 58
![Pregunta 58](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.57.16%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner wants to do next page personalization on their website based on specific attributes of those visitors.
What evaluation method would be used?

*   **Opciones:**
    *   [A] Streaming
    *   [B] Edge
    *   [C] Batch

*   **✅ Respuesta Correcta:** `[B] Edge`

*   **🧠 Intención de la Pregunta:** 
    *   Diferenciar los distintos motores de evaluación de segmentos (Batch, Streaming, Edge) según la latencia requerida.

*   **📖 Justificación Detallada:**
    *   La "next-page personalization" requiere latencia de milisegundos para que la segmentación ocurra inmediatamente después del clic, y el contenido cambie en la siguiente página antes de que termine de cargar. En Adobe Experience Platform, la única metodología de segmentación capaz de alcanzar tiempos por debajo de un segundo es la **Edge Segmentation** (Segmentación en el perímetro). La segmentación *Streaming* tiene latencia de minutos (ocurre en el Hub de datos), y *Batch* tarda horas (se evalúa cíclicamente).

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Edge segmentation overview (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/experience-platform/segmentation/ui/edge-segmentation)

---

### ❓ Pregunta 59
![Pregunta 59](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.57.30%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner has created a Dynamic Offer Collection for an upcoming "Black Friday" promotion and wants to add two more offers to this collection.
How would the offers be added?

*   **Opciones:**
    *   [A] Go into the Offer Collection and manually add additional offers
    *   [B] Add the correct collection qualifier to the offers that need to be added
    *   [C] New offers cannot be added once an Offer Collection has been created

*   **✅ Respuesta Correcta:** `[B] Add the correct collection qualifier to the offers that need to be added`

*   **🧠 Intención de la Pregunta:** 
    *   Comprender el comportamiento automático y la arquitectura de una "Colección Dinámica" de ofertas.

*   **📖 Justificación Detallada:**
    *   A diferencia de una colección estática, donde seleccionas ofertas individualmente, una "Colección Dinámica" se alimenta a través de reglas basadas en etiquetas, llamadas **Collection Qualifiers** (también conocidas como tags). Por lo tanto, si la colección dinámica de "Black Friday" está configurada para buscar ofertas con el tag "black_friday_2024", la única acción necesaria para agregar dos nuevas ofertas es ir a esas ofertas en el inventario y asignarles ese Collection Qualifier exacto. Automáticamente formarán parte de la colección.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Create collections (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/offer-decisioning/manage-offers/collections)

---

### ❓ Pregunta 60
![Pregunta 60](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.57.41%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner has setup a new offer that includes the Offer Decision in the email. When browsing the different offers being displayed in the Email Designer the business practitioner cannot see the new offer.
For what two reasons would this happen? (Choose two.)

*   **Opciones:**
    *   [A] There is no Email Representation for this particular offer.
    *   [B] The Offer Collection used in the Decision is static and does not include the new offer.
    *   [C] The offer's Eligibility Conditions do not apply at this stage.
    *   [D] The email designer only shows the first three offers of the Offer Decision.

*   **✅ Respuesta Correcta:** `[A] There is no Email Representation for this particular offer.`, `[B] The Offer Collection used in the Decision is static and does not include the new offer.`

*   **🧠 Intención de la Pregunta:** 
    *   Troubleshooting de por qué una oferta no está disponible como inventario para un placement/decisión de correo electrónico.

*   **📖 Justificación Detallada:**
    *   Si una oferta existe en el sistema pero no aparece listada bajo una Decisión al diseñar un Email, los motivos estructurales principales son dos:
        1) **No Email Representation:** La oferta carece de una representación para el canal Email (el *Placement* no coincide). Si solo tiene representación "Web Image", no se mostrará en el Email Designer.
        2) **Static Collection omission:** Si la decisión consultada fue configurada utilizando una colección estática, y el usuario olvidó seleccionar manualmente la nueva oferta e incluirla en la colección, la Decisión simplemente ignorará su existencia, por más que la oferta esté aprobada.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Add offers to a message (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/offer-decisioning/manage-offers/add-offers)

---

### ❓ Pregunta 61
![Pregunta 61](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.57.55%20PM.jpeg)

**Transcripción de la pregunta:**
A journey with an email message and an SMS message is live and running correctly.
In addition to the journey report, what other report(s) can the business practitioner see?

*   **Opciones:**
    *   [A] SMS message report
    *   [B] A report for each channel in use in this journey
    *   [C] Email message report

*   **✅ Respuesta Correcta:** `[B] A report for each channel in use in this journey`

*   **🧠 Intención de la Pregunta:** 
    *   Reconocer la jerarquía de los reportes en AJO: Reporte Global del Journey vs Reportes Específicos por Canal/Mensaje.

*   **📖 Justificación Detallada:**
    *   Al acceder al "Journey Report" en Adobe Journey Optimizer, no solo ves las estadísticas de flujo del canvas (entradas y salidas). La plataforma tabula y genera pestañas e informes de ejecución hiper-específicos para cada acción de envío dentro de ese Journey. Es decir, tendrás a tu disposición **un reporte para cada canal en uso en este journey** (puedes ver entregabilidad de Email, y en otra vista, entregabilidad de SMS).

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Journey global report (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/reporting/global-report/journey-global-report)

---

### ❓ Pregunta 62
![Pregunta 62](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.58.09%20PM.jpeg)

**Transcripción de la pregunta:**
Where can a business practitioner check the consent value for a profile?

*   **Opciones:**
    *   [A] Profile => Events, Attributes
    *   [B] Profile => Detail, Attributes
    *   [C] Profile => Detail, Audiences

*   **✅ Respuesta Correcta:** `[B] Profile => Detail, Attributes`

*   **🧠 Intención de la Pregunta:** 
    *   Conocer la interfaz del "Real-Time Customer Profile" y la ubicación de los datos de consentimiento.

*   **📖 Justificación Detallada:**
    *   Los consentimientos y preferencias de los usuarios (como el Opt-in o Opt-out de correo) se modelan mediante el grupo de campos `consents and preferences` del esquema de perfil en XDM. Para ver esta información de un usuario particular en la interfaz de usuario de AEP/AJO, debes buscar el perfil específico, entrar a la pestaña de **Detalles (Detail)** y examinar el widget de **Atributos (Attributes)**, donde se presentarán los valores de este esquema en forma de lista o JSON.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [View profile details (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/experience-platform/profile/ui/user-guide#profile-dashboard)

---

### ❓ Pregunta 63
![Pregunta 63](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.58.40%20PM.jpeg)

**Transcripción de la pregunta:**
A chief marketing officer (CMO) has a requirement to set up an offer to display images for male profiles and female profiles separately. A Journey Optimizer business practitioner has started creating the necessary elements required to set up the offer.
Which two components of Offer Decisioning can be used to personalize the offers as required? (Choose two.)

*   **Opciones:**
    *   [A] Decision Rule
    *   [B] Decisioning Scope
    *   [C] Offer Cap
    *   [D] Offer Placement

*   **✅ Respuesta Correcta:** `[A] Decision Rule`, `[D] Offer Placement`

*   **🧠 Intención de la Pregunta:** 
    *   Identificar los bloques de construcción de una oferta personalizada que contiene múltiples "Representaciones" o variantes.

*   **📖 Justificación Detallada:**
    *   Para crear una única Oferta Personalizada que contenga diferentes activos visuales (imágenes) basándose en atributos (género), se requiere crear múltiples Representaciones (Representations) dentro de esa oferta. Cada representación necesita: 
        1) Un **Offer Placement** (Ubicación de la oferta): Que dicta el tipo de contenedor (ej: Imagen para Web).
        2) Una **Decision Rule** (Regla de decisión, ligada a la representación): Para evaluar y decir "Usa esta representación si el perfil es masculino" y "Usa esta otra si el perfil es femenino".

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Create personalized offers (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/offer-decisioning/manage-offers/create-personalized-offers)

---

### ❓ Pregunta 64
![Pregunta 64](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.59.04%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner would like to cut an audience, A, into two sets, B and C, of the same size.
What is the correct sequence to follow to create the two new audiences?

*   **Opciones:**
    *   [A] Add audience A -> Split by using 'Attribute Split' mode -> Define 1 path for profiles who are customers and enable the 'other profiles' path -> Save B and C
    *   [B] Add audience A -> Split by using 'Percent Split' mode -> Define 1 path of 50% and disable the 'other profiles' path -> Save B and C
    *   [C] Add audience A -> Split by using 'Percent Split' mode and define 2 paths of 50% in a random way -> Save B and C

*   **✅ Respuesta Correcta:** `[C] Add audience A -> Split by using 'Percent Split' mode and define 2 paths of 50% in a random way -> Save B and C`

*   **🧠 Intención de la Pregunta:** 
    *   Manejo del componente "Split" dentro de los workflows de Audience Composition en Adobe Experience Platform.

*   **📖 Justificación Detallada:**
    *   Dentro del lienzo de Composición de Audiencias (Audience Composition), el bloque de **Split** permite dividir perfiles en sub-audiencias. Para asegurar dos grupos de igual tamaño de manera aleatoria, debes seleccionar la modalidad **Percentage split** (división por porcentaje). Al configurar los caminos, estableces rutas del 50% de la población (la opción C refleja esta configuración). La opción A es incorrecta porque usa una partición por atributo en lugar de porcentaje aleatorio. La opción B está errada porque al deshabilitar el camino "other profiles", el 50% restante de la población simplemente se descarta y desaparece, fallando en el requerimiento de crear un conjunto "C".

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Audience Composition: Split block (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/experience-platform/segmentation/ui/audience-composition)

---

### ❓ Pregunta 65
![Pregunta 65](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.59.22%20PM.jpeg)

**Transcripción de la pregunta:**
An e-commerce manager for an online fashion retailer is gearing up for a special promotional email campaign. The manager has a diverse catalog with various clothing items, including dresses, shoes, and accessories. To maximize the impact of the campaign, the manager decides to leverage the product schema from the catalog to create a highly personalized email.
Which option would be used to personalize an email using a product schema?

*   **Opciones:**
    *   [A] Use business events by stitching product attributes
    *   [B] Use audience enrichment and add product attributes
    *   [C] Use product specific journeys using merge capability
    *   [D] Use computed attributes by enriching product attributes

*   **✅ Respuesta Correcta:** `[B] Use audience enrichment and add product attributes`

*   **🧠 Intención de la Pregunta:** 
    *   Comprender cómo vincular esquemas externos (como catálogos) al perfil para personalizar mensajes utilizando la funcionalidad "Enrichment".

*   **📖 Justificación Detallada:**
    *   En Adobe Journey Optimizer, para usar información que no reside directamente en el "Customer Profile" sino en un esquema relacionado (como un esquema de inventario o catálogo de productos), se utiliza la funcionalidad de **Audience Enrichment** (Enriquecimiento de audiencia). Esto se puede configurar durante la importación de la audiencia en un Journey (mediante un Read Audience o en Audience Composition), permitiendo asociar los IDs de producto del cliente con los detalles del esquema secundario (precio, imagen, nombre), para que esos atributos viajen en el payload y estén disponibles en el Email Designer para la personalización.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Audience Enrichment in Journeys (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/experience-platform/segmentation/ui/audience-composition#enrich)

---

### ❓ Pregunta 66
![Pregunta 66](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.59.35%20PM.jpeg)

**Transcripción de la pregunta:**
A journey being validated is put into test mode. After running a few tests, test mode is disabled.
How many more times after this can test mode be enabled?

*   **Opciones:**
    *   [A] Four more times for a total of five times
    *   [B] Test mode can be enabled/disabled as many times as needed.
    *   [C] It is not possible to enable it again, it can only be enabled once.
    *   [D] Nine more times for a total of ten times

*   **✅ Respuesta Correcta:** `[B] Test mode can be enabled/disabled as many times as needed.`

*   **🧠 Intención de la Pregunta:** 
    *   Validar el conocimiento sobre las restricciones operativas (o la falta de ellas) del "Test mode" en la creación de Journeys.

*   **📖 Justificación Detallada:**
    *   En Adobe Journey Optimizer, el "Test mode" es un estado temporal que se utiliza para probar el comportamiento de un Journey en un entorno seguro utilizando perfiles de prueba antes de publicarlo oficialmente. No existe un límite estricto ni un contador máximo en la plataforma sobre cuántas veces puedes activar o desactivar este modo. Puedes alternar (toggle) el modo de prueba tantas veces como sea necesario durante la fase de validación y QA de la campaña.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Test your journey (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/testing-journeys/test-your-journey)

---

### ❓ Pregunta 67
![Pregunta 67](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.59.47%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner is creating a new journey and started it with an "Audience Qualification" event.
What will the Namespace drop down look like?

*   **Opciones:**
    *   [A] It will be visible but disabled because it will have no identity namespace to select.
    *   [B] It will be filled with only the event-based identity namespace.
    *   [C] It will be filled with all the people-based and event-based identity namespace.
    *   [D] It will be filled with only the people-based identity namespace.

*   **✅ Respuesta Correcta:** `[D] It will be filled with only the people-based identity namespace.`

*   **🧠 Intención de la Pregunta:** 
    *   Diferenciar cómo interactúan los distintos nodos de entrada (Audience Qualification vs. Events) con los espacios de identidad (Namespaces).

*   **📖 Justificación Detallada:**
    *   El nodo de "Audience Qualification" está diseñado para escuchar cuándo los **Customer Profiles** (perfiles de personas/clientes) entran o salen de un segmento en específico evaluado en el Real-Time Customer Profile. Debido a que las audiencias se construyen agrupando datos a nivel de persona y no como eventos aislados, el menú desplegable de Namespace filtrará y mostrará únicamente los "people-based identity namespaces" (por ejemplo: Email, CRM ID, ECID). Los identificadores exclusivamente basados en eventos (event-based) no aparecerán en esta lista porque no resuelven a un Perfil estático.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Audience Qualification events (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/about-journey-building/audience-qualification-events)

---

### ❓ Pregunta 68
![Pregunta 68](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%207.59.58%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner is creating a new journey and drag and drop the first activity.
Which Orchestration Activity can be used to start a Customer Journey?

*   **Opciones:**
    *   [A] The Condition activity
    *   [B] The Read Audience activity
    *   [C] The Wait activity

*   **✅ Respuesta Correcta:** `[B] The Read Audience activity`

*   **🧠 Intención de la Pregunta:** 
    *   Conocer los nodos de inicio válidos en el canvas de un Journey.

*   **📖 Justificación Detallada:**
    *   En Adobe Journey Optimizer, un Journey no puede iniciar con nodos lógicos secuenciales como **Condition** (Condición) o **Wait** (Espera), porque estos nodos requieren que ya exista un perfil activo dentro del flujo para evaluarlo o pausarlo. Los únicos tipos de actividades que pueden iniciar un Customer Journey son los nodos de la categoría "Events" (Eventos Unitarios, Business Events o Audience Qualification) y de la categoría "Orchestration" la actividad **Read Audience** (Leer Audiencia), que se encarga de inyectar en lote un segmento completo dentro del Journey de forma programada.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Read Audience activity (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/about-journey-building/read-audience)

---

### ❓ Pregunta 69
![Pregunta 69](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.00.10%20PM.jpeg)

**Transcripción de la pregunta:**
When a business practitioner tries to split the audience for treatment for the content experiment, how is the audience split across the treatments?

*   **Opciones:**
    *   [A] Change the percentage if there are more than two experiments
    *   [B] Toggle between the percentage of the audience for treatments
    *   [C] Change the percentage if there is a hold-out group, otherwise it is evenly split
    *   [D] Evenly split across A and B treatments

*   **✅ Respuesta Correcta:** `[D] Evenly split across A and B treatments`

*   **🧠 Intención de la Pregunta:** 
    *   Entender el comportamiento por defecto de la asignación de tráfico en la creación de Experimentos de Contenido (A/B testing) dentro de AJO.

*   **📖 Justificación Detallada:**
    *   Al configurar un "Content Experiment" en Adobe Journey Optimizer para evaluar múltiples "Treatments" (Tratamientos, usualmente A y B), el sistema por defecto aplica una partición estadísticamente balanceada, dividiendo el tráfico de la audiencia de manera uniforme **(Evenly split)** entre los tratamientos (es decir, 50/50 para un test clásico A/B). Aunque existe la flexibilidad de modificar manualmente estos porcentajes o agregar un grupo de control (hold-out group), el comportamiento estándar y la primera distribución automática al agregar variantes es el split equivalente (Evenly split).

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Create a content experiment (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/content-management/content-experiment/create-experiment)

---

### ❓ Pregunta 70
![Pregunta 70](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.00.21%20PM.jpeg)

**Transcripción de la pregunta:**
Which two categories of labels are supported in DULE? (Choose two.)

*   **Opciones:**
    *   [A] Private
    *   [B] Sensitive
    *   [C] Public
    *   [D] Contract

*   **✅ Respuesta Correcta:** `[B] Sensitive`, `[D] Contract`

*   **🧠 Intención de la Pregunta:** 
    *   Memorizar la categorización del framework de gobernanza de datos nativo de AEP (Data Usage Labeling and Enforcement).

*   **📖 Justificación Detallada:**
    *   El framework DULE (Data Usage Labeling and Enforcement) de Adobe Experience Platform permite a los administradores aplicar etiquetas a nivel de dataset o de campo para regir cómo pueden usarse los datos. Este framework cuenta con tres categorías principales, reconocidas universalmente en AEP:
        1) **Contract (C):** Datos con restricciones dictadas por contratos u obligaciones legales (ej. prohibición de exportar a terceros).
        2) **Identity (I):** Datos que pueden identificar directamente a un individuo (PII).
        3) **Sensitive (S):** Datos confidenciales o regulados, como la ubicación geográfica (GPS) o datos médicos.
        *Private* y *Public* no forman parte de las categorías predeterminadas del framework DULE.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Data usage labels overview (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/experience-platform/data-governance/labels/overview)

---

### ❓ Pregunta 71
![Pregunta 71](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.00.33%20PM.jpeg)

**Transcripción de la pregunta:**
A travel agency is evaluating the performance of its welcome campaign for new customers using Adobe Journey Optimizer (AJO).
Which metrics found in the AJO Global Report would be most helpful in determining the campaign's effectiveness in driving engagement and conversions?

*   **Opciones:**
    *   [A] Number of entered profiles
    *   [B] Journey completion rate
    *   [C] Total email opens
    *   [D] Click-through rate

*   **✅ Respuesta Correcta:** `[D] Click-through rate`

*   **🧠 Intención de la Pregunta:** 
    *   Comprender el significado de negocio de las diferentes métricas de reporte en un escenario de conversión.

*   **📖 Justificación Detallada:**
    *   Cuando el objetivo es evaluar la **efectividad para generar interacción (engagement) y conversiones**, el indicador principal de rendimiento en la mensajería de correo es la **Tasa de clics (Click-through rate o CTR)**. Esta métrica demuestra qué porcentaje de la audiencia no solo vio el mensaje, sino que interactuó con el Call-to-Action (CTA) redirigiéndose al sitio web o la app donde ocurre la "conversión" real. Métrica como "Total email opens" (Aperturas) es de visibilidad y suele estar sesgada (por ej., Apple Mail Privacy Protection), mientras que "Number of entered profiles" (Volumen de entrada) solo muestra alcance, no engagement.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Email execution report (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/reporting/global-report/email-global)

---

### ❓ Pregunta 72
![Pregunta 72](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.01.50%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner has built a Journey and wants to run it.
What would the business practitioner do?

*   **Opciones:**
    *   [A] Select the Run button in the Toolbar
    *   [B] Schedule the Journey at desired time
    *   [C] Hit the Publish Button to execute

*   **✅ Respuesta Correcta:** `[C] Hit the Publish Button to execute`

*   **🧠 Intención de la Pregunta:** 
    *   Confirmar el conocimiento del proceso final para activar un flujo de trabajo en AJO.

*   **📖 Justificación Detallada:**
    *   En Adobe Journey Optimizer, para que un Journey pase de borrador (Draft) a un estado activo y comience a procesar perfiles, el usuario debe hacer clic en el botón **Publish**. No existe un botón de "Run" en la barra de herramientas para ejecución inmediata sin publicación previa. La publicación valida la estructura del journey y lo despliega en el motor de orquestación.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Publish a journey (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/publish-journey)

---

### ❓ Pregunta 73
![Pregunta 73](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.02.07%20PM.jpeg)

**Transcripción de la pregunta:**
A digital marketing specialist is planning a comprehensive campaign using Adobe Journey Optimizer for a new product launch. Personalization is a key element of the strategy to maximize engagement. The specialist wants to ensure that customers receive content tailored to their preferences, past purchases and browsing behavior.
Which enables the specialist to leverage historical customer data, such as past purchases and interactions, to personalize content and interactions in a customer's journey?

*   **Opciones:**
    *   [A] Journey Analytics
    *   [B] Experience Events
    *   [C] Real-time Triggers
    *   [D] Personalization Fields

*   **✅ Respuesta Correcta:** `[B] Experience Events`

*   **🧠 Intención de la Pregunta:** 
    *   Identificar el componente del Experience Data Model (XDM) que almacena el historial de comportamiento.

*   **📖 Justificación Detallada:**
    *   En Adobe Experience Platform (la base de AJO), los datos históricos de comportamiento (compras pasadas, navegación web, interacciones con apps) se capturan y almacenan como **Experience Events**. A diferencia de los atributos de perfil (que representan el estado actual), los Experience Events son una serie de eventos cronológicos que permiten a AJO realizar personalizaciones basadas en el historial completo del cliente.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Experience Events overview (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/experience-platform/xdm/classes/experienceevent)

---

### ❓ Pregunta 74
![Pregunta 74](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.02.27%20PM.jpeg)

**Transcripción de la pregunta:**
A retail company uses Adobe Journey Optimizer (AJO) for personalized marketing campaigns and Adobe Experience Platform (AEP) for data management. The business practitioner want to ensure data used in AJO journeys complies with data regulations and internal policies.
Which AEP capability best supports this objective?

*   **Opciones:**
    *   [A] AEP Profiles: Provides a unified customer view but has limited control over data activation
    *   [B] AEP Data Governance: Defines usage policies and enforces restrictions on data used in AJO journeys
    *   [C] AEP Schema Registry: Standardizes data formats across different sources but does not enforce usage control

*   **✅ Respuesta Correcta:** `[B] AEP Data Governance: Defines usage policies and enforces restrictions on data used in AJO journeys`

*   **🧠 Intención de la Pregunta:** 
    *   Identificar la herramienta de cumplimiento normativo y políticas de uso dentro del ecosistema AEP/AJO.

*   **📖 Justificación Detallada:**
    *   **AEP Data Governance** es el conjunto de capacidades que permite etiquetar datos según su nivel de sensibilidad y definir políticas de uso. En AJO, esto se manifiesta mediante el framework de gobernanza que impide, por ejemplo, que un journey envíe datos marcados contractualmente como "no exportables" a un proveedor externo de SMS o que se use información sensible para fines publicitarios no permitidos.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Data Governance overview (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/experience-platform/data-governance/home)

---

### ❓ Pregunta 75
![Pregunta 75](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.02.46%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner is putting together a new "Weekend Sale" journey that will send an Email to all customers. Inside the message and only for the loyal customers, the business practitioner wants to include an additional image banner at the top with a discount based on the three levels of loyalty (Gold, Silver and Bronze).
How can this be configured in Adobe Journey Optimizer?

*   **Opciones:**
    *   [A] Image Placements can be leveraged into the Email Designer to decide on the best images to serve to the targeted profiles.
    *   [B] Conditional rules can be leveraged into the Email Designer and the expression editor to create dynamic content which will adapt the images to the loyal customers.
    *   [C] Event attributes can be leveraged within the image URL to personalize the image based on the value of a query string parameter.

*   **✅ Respuesta Correcta:** `[B] Conditional rules can be leveraged into the Email Designer and the expression editor to create dynamic content which will adapt the images to the loyal customers.`

*   **🧠 Intención de la Pregunta:** 
    *   Diferenciar las técnicas de personalización "en línea" (Conditional Content) de otras técnicas como el Offer Decisioning.

*   **📖 Justificación Detallada:**
    *   Para mostrar bloques de contenido específicos (como un banner) basados en atributos del perfil (niveles de lealtad Gold, Silver, Bronze) dentro del diseñador de correo electrónico, se utiliza el **Contenido Condicional (Dynamic Content)**. El profesional de negocios puede aplicar reglas de visibilidad a un componente de imagen para que solo aparezca si se cumple la condición de lealtad, adaptando así el mensaje sin necesidad de múltiples plantillas.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Add dynamic content in Email Designer (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/email/content-design/dynamic-content)

---

### ❓ Pregunta 76
![Pregunta 76](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.03.01%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner is using an image from Assets into a new email message but realizes that the image does not look like it used to be in a previous email message.
How would the business practitioner troubleshoot this?

*   **Opciones:**
    *   [A] Click on the Import Media button, browse the image and upload the image that was used previously
    *   [B] Open the email message from a different internet browser to refresh the cache and access the latest image
    *   [C] Open an asset's preview in the Assets section and click on the Versions icon from the right sidebar, preview the previous version, select it and click Make Latest
    *   [D] Open the previous email message and copy the image URL, in the new email message click on the image placeholder and paste the image URL

*   **✅ Respuesta Correcta:** `[C] Open an asset's preview in the Assets section and click on the Versions icon from the right sidebar, preview the previous version, select it and click Make Latest`

*   **🧠 Intención de la Pregunta:** 
    *   Conocer las capacidades de control de versiones de Adobe Experience Manager (AEM) Assets dentro de AJO.

*   **📖 Justificación Detallada:**
    *   Adobe Journey Optimizer está integrado con Adobe Experience Manager Assets. Si una imagen ha cambiado indeseadamente, se puede utilizar el **historial de versiones** nativo de Assets. El flujo correcto es abrir la previsualización del asset, ir al panel de Versiones, identificar la versión anterior correcta y establecerla como la versión actual ("Make Latest"). Esto restaurará la imagen a su estado anterior en todas las referencias futuras.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Manage assets with Adobe Experience Manager Assets (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/content-management/assets-essentials/manage-assets)

---

### ❓ Pregunta 77
![Pregunta 77](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.03.21%20PM.jpeg)

**Transcripción de la pregunta:**
What are two use cases for which a business practitioner would use an "Unitary Event" in a journey? (Choose two.)

*   **Opciones:**
    *   [A] A product has restocked, notify customers with a favorite for that product
    *   [B] A cart has been abandoned, notify customers with an abandoned cart
    *   [C] An appointment is coming up, so notify customers what they need to prepare for it
    *   [D] A price drop has occured, notify customers that are interested

*   **✅ Respuesta Correcta:** `[B] A cart has been abandoned, notify customers with an abandoned cart`, `[C] An appointment is coming up, so notify customers what they need to prepare for it`

*   **🧠 Intención de la Pregunta:** 
    *   Diferenciar los disparadores en tiempo real (Unitary Events) de los procesos masivos o basados en audiencias (Business Events / Read Audience).

*   **📖 Justificación Detallada:**
    *   Los **Unitary Events** (Eventos Unitarios) en AJO se refieren a interacciones directas e individuales de un usuario en un momento específico. 
        *   **Abandono de carrito (B):** Es un evento unitario porque ocurre inmediatamente después de la acción (o inacción) de un solo usuario.
        *   **Recordatorio de cita (C):** Aunque está basado en tiempo, en el contexto de AJO, la notificación de una cita próxima para un individuo específico se maneja típicamente como un evento de sistema unitario que dispara el journey para ese perfil.
        *Nota:* El reabastecimiento (A) o caída de precio (D) suelen considerarse Business Events o Batch (Read Audience) porque afectan a muchos usuarios simultáneamente basándose en un cambio de estado del catálogo.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [About events (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/about-journey-building/about-events)

---

### ❓ Pregunta 78
![Pregunta 78](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.03.40%20PM.jpeg)

**Transcripción de la pregunta:**
What is the purpose of an email surface in Adobe Journey Optimizer?

*   **Opciones:**
    *   [A] The email surface determines the frequency rules of messaging.
    *   [B] The email surface defines the technical parameters required for the messages, including email type, sender email and sender name.
    *   [C] The email surface determines the template to use for the email design, including the subject, images and text.

*   **✅ Respuesta Correcta:** `[B] The email surface defines the technical parameters required for the messages, including email type, sender email and sender name.`

*   **🧠 Intención de la Pregunta:** 
    *   Comprender la configuración técnica necesaria para realizar envíos (Channel Configurations / Surfaces).

*   **📖 Justificación Detallada:**
    *   Una **Email Surface** (antes conocida como Channel Configuration) agrupa todos los parámetros técnicos necesarios para que AJO pueda enviar el correo: el subdominio de envío, la dirección del remitente (Sender Email), el nombre visible (Sender Name) y la configuración de entregabilidad (IPs, firmas DKIM, etc.). No define el contenido visual ni las reglas de frecuencia (que se manejan en Fatiga de Mensajería).

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Create channel configurations (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/configuration/channel-surfaces)

---

### ❓ Pregunta 79
![Pregunta 79](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.03.53%20PM.jpeg)

**Transcripción de la pregunta:**
A business practitioner creates a journey with the activities Read Audience -> Email. They want to re-target anyone who does not click the email in 1 day.
What else would be configured in the journey to allow this?

*   **Opciones:**
    *   [A] Add a Wait activity set to 1 day, then add an email action to the output branch
    *   [B] Build a streaming audience that looks for Email 1 opens in the last 1 day, use a Read Audience activity to listen for that audience, then add a second email action to the output branch
    *   [C] Define the timeout of the first Email activity to be one day within the action configuration, then add a second email action to the output branch
    *   [D] Add a Reactions event, select Email opened, and define the event timeout to be 1 day, then add an email action to the timeout branch

*   **✅ Respuesta Correcta:** `[D] Add a Reactions event, select Email opened, and define the event timeout to be 1 day, then add an email action to the timeout branch`

*   **🧠 Intención de la Pregunta:** 
    *   Dominar el uso del nodo "Reactions" para flujos de re-impacto basados en comportamiento y tiempo.

*   **📖 Justificación Detallada:**
    *   Para realizar una acción basada en la **ausencia** de una interacción (como no hacer clic o no abrir) tras un periodo determinado, el método estándar en AJO es usar el nodo **Reactions**. Este nodo escucha eventos de mensaje (como "Email clicked"). Se debe configurar un "timeout" (tiempo de espera) de 1 día. Si el usuario interactúa, irá por la rama del evento; si el tiempo expira sin interacción, el usuario saldrá por la rama de **Timeout**, donde se conecta el segundo envío de re-impacto.

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Reaction events (Adobe Experience League)](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/about-journey-building/reaction-events)

---

### ❓ Pregunta 80
![Pregunta 80](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.03.53%20PM.jpeg)

*   **Opciones:**
    *   [A] 
    *   [B] 
    *   [C] 
    *   [D] 

*   **✅ Respuesta Correcta:** `[Pendiente]`

*   **🧠 Intención de la Pregunta:** 
    *   [Pendiente]

*   **📖 Justificación Detallada:**
    *   [Pendiente]

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Documentación de Adobe](https://experienceleague.adobe.com/)

---

### ❓ Pregunta 81
![Pregunta 81](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.04.06%20PM.jpeg)

*   **Opciones:**
    *   [A] 
    *   [B] 
    *   [C] 
    *   [D] 

*   **✅ Respuesta Correcta:** `[Pendiente]`

*   **🧠 Intención de la Pregunta:** 
    *   [Pendiente]

*   **📖 Justificación Detallada:**
    *   [Pendiente]

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Documentación de Adobe](https://experienceleague.adobe.com/)

---

### ❓ Pregunta 82
![Pregunta 82](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.04.37%20PM.jpeg)

*   **Opciones:**
    *   [A] 
    *   [B] 
    *   [C] 
    *   [D] 

*   **✅ Respuesta Correcta:** `[Pendiente]`

*   **🧠 Intención de la Pregunta:** 
    *   [Pendiente]

*   **📖 Justificación Detallada:**
    *   [Pendiente]

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Documentación de Adobe](https://experienceleague.adobe.com/)

---

### ❓ Pregunta 83
![Pregunta 83](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.04.53%20PM.jpeg)

*   **Opciones:**
    *   [A] 
    *   [B] 
    *   [C] 
    *   [D] 

*   **✅ Respuesta Correcta:** `[Pendiente]`

*   **🧠 Intención de la Pregunta:** 
    *   [Pendiente]

*   **📖 Justificación Detallada:**
    *   [Pendiente]

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Documentación de Adobe](https://experienceleague.adobe.com/)

---

### ❓ Pregunta 84
![Pregunta 84](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.05.44%20PM.jpeg)

*   **Opciones:**
    *   [A] 
    *   [B] 
    *   [C] 
    *   [D] 

*   **✅ Respuesta Correcta:** `[Pendiente]`

*   **🧠 Intención de la Pregunta:** 
    *   [Pendiente]

*   **📖 Justificación Detallada:**
    *   [Pendiente]

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Documentación de Adobe](https://experienceleague.adobe.com/)

---

### ❓ Pregunta 85
![Pregunta 85](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.05.53%20PM.jpeg)

*   **Opciones:**
    *   [A] 
    *   [B] 
    *   [C] 
    *   [D] 

*   **✅ Respuesta Correcta:** `[Pendiente]`

*   **🧠 Intención de la Pregunta:** 
    *   [Pendiente]

*   **📖 Justificación Detallada:**
    *   [Pendiente]

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Documentación de Adobe](https://experienceleague.adobe.com/)

---

### ❓ Pregunta 86
![Pregunta 86](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.06.01%20PM.jpeg)

*   **Opciones:**
    *   [A] 
    *   [B] 
    *   [C] 
    *   [D] 

*   **✅ Respuesta Correcta:** `[Pendiente]`

*   **🧠 Intención de la Pregunta:** 
    *   [Pendiente]

*   **📖 Justificación Detallada:**
    *   [Pendiente]

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Documentación de Adobe](https://experienceleague.adobe.com/)

---

### ❓ Pregunta 87
![Pregunta 87](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.06.16%20PM.jpeg)

*   **Opciones:**
    *   [A] 
    *   [B] 
    *   [C] 
    *   [D] 

*   **✅ Respuesta Correcta:** `[Pendiente]`

*   **🧠 Intención de la Pregunta:** 
    *   [Pendiente]

*   **📖 Justificación Detallada:**
    *   [Pendiente]

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Documentación de Adobe](https://experienceleague.adobe.com/)

---

### ❓ Pregunta 88
![Pregunta 88](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.06.34%20PM.jpeg)

*   **Opciones:**
    *   [A] 
    *   [B] 
    *   [C] 
    *   [D] 

*   **✅ Respuesta Correcta:** `[Pendiente]`

*   **🧠 Intención de la Pregunta:** 
    *   [Pendiente]

*   **📖 Justificación Detallada:**
    *   [Pendiente]

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Documentación de Adobe](https://experienceleague.adobe.com/)

---

### ❓ Pregunta 89
![Pregunta 89](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.06.43%20PM.jpeg)

*   **Opciones:**
    *   [A] 
    *   [B] 
    *   [C] 
    *   [D] 

*   **✅ Respuesta Correcta:** `[Pendiente]`

*   **🧠 Intención de la Pregunta:** 
    *   [Pendiente]

*   **📖 Justificación Detallada:**
    *   [Pendiente]

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Documentación de Adobe](https://experienceleague.adobe.com/)

---

### ❓ Pregunta 90
![Pregunta 90](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.06.59%20PM.jpeg)

*   **Opciones:**
    *   [A] 
    *   [B] 
    *   [C] 
    *   [D] 

*   **✅ Respuesta Correcta:** `[Pendiente]`

*   **🧠 Intención de la Pregunta:** 
    *   [Pendiente]

*   **📖 Justificación Detallada:**
    *   [Pendiente]

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Documentación de Adobe](https://experienceleague.adobe.com/)

---

### ❓ Pregunta 91
![Pregunta 91](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.07.16%20PM.jpeg)

*   **Opciones:**
    *   [A] 
    *   [B] 
    *   [C] 
    *   [D] 

*   **✅ Respuesta Correcta:** `[Pendiente]`

*   **🧠 Intención de la Pregunta:** 
    *   [Pendiente]

*   **📖 Justificación Detallada:**
    *   [Pendiente]

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Documentación de Adobe](https://experienceleague.adobe.com/)

---

### ❓ Pregunta 92
![Pregunta 92](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.08.13%20PM.jpeg)

*   **Opciones:**
    *   [A] 
    *   [B] 
    *   [C] 
    *   [D] 

*   **✅ Respuesta Correcta:** `[Pendiente]`

*   **🧠 Intención de la Pregunta:** 
    *   [Pendiente]

*   **📖 Justificación Detallada:**
    *   [Pendiente]

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Documentación de Adobe](https://experienceleague.adobe.com/)

---

### ❓ Pregunta 93
![Pregunta 93](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.08.32%20PM.jpeg)

*   **Opciones:**
    *   [A] 
    *   [B] 
    *   [C] 
    *   [D] 

*   **✅ Respuesta Correcta:** `[Pendiente]`

*   **🧠 Intención de la Pregunta:** 
    *   [Pendiente]

*   **📖 Justificación Detallada:**
    *   [Pendiente]

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Documentación de Adobe](https://experienceleague.adobe.com/)

---

### ❓ Pregunta 94
![Pregunta 94](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.08.46%20PM.jpeg)

*   **Opciones:**
    *   [A] 
    *   [B] 
    *   [C] 
    *   [D] 

*   **✅ Respuesta Correcta:** `[Pendiente]`

*   **🧠 Intención de la Pregunta:** 
    *   [Pendiente]

*   **📖 Justificación Detallada:**
    *   [Pendiente]

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Documentación de Adobe](https://experienceleague.adobe.com/)

---

### ❓ Pregunta 95
![Pregunta 95](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.08.54%20PM.jpeg)

*   **Opciones:**
    *   [A] 
    *   [B] 
    *   [C] 
    *   [D] 

*   **✅ Respuesta Correcta:** `[Pendiente]`

*   **🧠 Intención de la Pregunta:** 
    *   [Pendiente]

*   **📖 Justificación Detallada:**
    *   [Pendiente]

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Documentación de Adobe](https://experienceleague.adobe.com/)

---

### ❓ Pregunta 96
![Pregunta 96](./partes%20de%20adobe/WhatsApp%20Image%202026-04-22%20at%208.09.03%20PM.jpeg)

*   **Opciones:**
    *   [A] 
    *   [B] 
    *   [C] 
    *   [D] 

*   **✅ Respuesta Correcta:** `[Pendiente]`

*   **🧠 Intención de la Pregunta:** 
    *   [Pendiente]

*   **📖 Justificación Detallada:**
    *   [Pendiente]

*   **🔗 Documentación Oficial de Respaldo:**
    *   [Documentación de Adobe](https://experienceleague.adobe.com/)

---

