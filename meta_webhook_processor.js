const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Configuraciones del CDP de Adobe Experience Platform (AEP)
const AEP_STREAMING_ENDPOINT = "https://dcs.adobedc.net/collection/SU_ID_DE_RECOLECCION?allow_mod=true";

app.post('/webhook', async (req, res) => {
    try {
        const body = req.body;

        // Comprobamos si es un evento válido de WhatsApp
        if (body.object === 'whatsapp_business_account') {
            
            // Meta envía la carga útil dentro de un arreglo 'entry'
            for (const entry of body.entry) {
                const changes = entry.changes[0].value;
                
                // Extraer información de contacto
                const contact = changes.contacts ? changes.contacts[0] : null;
                const messages = changes.messages ? changes.messages[0] : null;
                
                if (contact && messages) {
                    const wa_id = contact.wa_id;  // ID de WhatsApp (Número de teléfono del cliente)
                    const messageType = messages.type;

                    let cdpPayload = {
                        "header": {
                            "schemaRef": {
                                "id": "https://ns.adobe.com/tu-id/schemas/whatsapp_event_schema",
                                "contentType": "application/vnd.adobe.xed-full+json;version=1.0"
                            }
                        },
                        "body": {
                            "xdmMeta": {
                                "schemaRef": {
                                    "id": "https://ns.adobe.com/tu-id/schemas/whatsapp_event_schema",
                                    "contentType": "application/vnd.adobe.xed-full+json;version=1.0"
                                }
                            },
                            "xdmEntity": {
                                // Aquí declaras los atributos mapeados para Adobe Journey Optimizer
                                "_id": messages.id,
                                "timestamp": new Date(messages.timestamp * 1000).toISOString(),
                                "wa_id": wa_id,
                                "messageType": messageType,
                            }
                        }
                    };

                    // 1. Manejo de Quick Replies (Botones normales en plantillas)
                    if (messageType === 'button') {
                        const payloadBoton = messages.button.payload; // Ej: "quiero_mi_prestamo"
                        
                        cdpPayload.body.xdmEntity.eventType = "whatsapp.button_click";
                        cdpPayload.body.xdmEntity.buttonPayload = payloadBoton;
                        
                        console.log(`[BOTÓN] Respuesta rápida recibida: ${payloadBoton}`);
                    } 
                    
                    // 2. Manejo de completado de WhatsApp Flows
                    else if (messageType === 'interactive' && messages.interactive.type === 'nfm_reply') {
                        const flowResponseJson = JSON.parse(messages.interactive.nfm_reply.response_json);
                        const flowName = messages.interactive.nfm_reply.name;
                        
                        cdpPayload.body.xdmEntity.eventType = "whatsapp.flow_completed";
                        cdpPayload.body.xdmEntity.flowName = flowName;
                        cdpPayload.body.xdmEntity.flowResponse = flowResponseJson; 
                        
                        // flowResponseJson contendrá los datos del submit de tu Flow:
                        // { "amount": "amount1", "tenure": "months48", "payment_mode": "UPI", ... }
                        
                        console.log(`[FLOWS] Flow '${flowName}' completado por ${wa_id}:`, flowResponseJson);
                    }

                    // Enviar datos al CDP de Adobe Experience Platform
                    // Para que AJO pueda disparar un evento asociado (Unitary Event)
                    if(cdpPayload.body.xdmEntity.eventType) {
                        await enviarAdobeCDP(cdpPayload);
                    }
                }
            }
        }
        res.status(200).send('EVENT_RECEIVED');
    } catch (error) {
        console.error("Error procesando Webhook:", error);
        res.sendStatus(500);
    }
});

async function enviarAdobeCDP(payload) {
    try {
        const response = await axios.post(AEP_STREAMING_ENDPOINT, payload, {
            headers: { 'Content-Type': 'application/json' }
        });
        console.log("-> Evento enviado a Adobe CDP exitosamente");
    } catch(err) {
        console.log("-> Error enviando a Adobe CDP:", err.response ? err.response.data : err.message);
    }
}

// Validación inicial del Webhook conectando con Meta
app.get('/webhook', (req, res) => {
    const VERIFY_TOKEN = "mi_token_secreto_ajo"; // Reemplaza con tu token configurado en Meta
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];
    
    if (mode && token) {
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);
        } else {
            res.sendStatus(403);
        }
    }
});

app.listen(3000, () => console.log('Escuchando webhooks de Meta en el puerto 3000'));
