import { whatsappToken, whatsappUrl, whatsappStorePhoneNumberId } from './config'

export async function sendMessages (clientPhone) {
  if (!clientPhone) return

  const requestBody = {
    messaging_product: 'whatsapp',
    to: `51${clientPhone}`,
    type: 'template',
    template: {
      name: 'bienvenida',
      language: {
        code: 'es',
        policy: 'deterministic'
      },
      components: [
        {
          type: 'body',
          parameters: [{
            type: 'text',
            text: 'hola holaaa!!'
          }]
        }]
    }
  }

  const fetchConfig = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${whatsappToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  }

  const response = await fetch(`${whatsappUrl}/${whatsappStorePhoneNumberId}/messages`, fetchConfig)
  const data = await response.json()

  return data
}
