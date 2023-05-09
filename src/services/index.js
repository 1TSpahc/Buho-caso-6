import { whatsappToken, whatsappUrl, whatsappStorePhoneNumberId } from './config'
/*

curl -i -X POST `
  https://graph.facebook.com/v16.0/113613268393330/messages `
  -H 'Authorization: Bearer EAGLn78fEAu8BAIYO4xtAmI3xba4GMfgRXQMgcEdiDA41lZAfaOErYLaTOLG0lydAtmGTCox5ZBUXDazfSNZACnZCATKeAamDgLJmEHHKkQzyoEknDD1RXHUZChH9QKPEs5tDKTKnJyIN5ZCPUz4gMO6m9WYqwMgYK2kvZCOTERkwWSD747IcW3uUMnQZA6seyYIVZC514JcuZBnkhM1RacPScD' `
  -H 'Content-Type: application/json' `
  -d '{ \"messaging_product\": \"whatsapp\", \"to\": \"51960872493\", \"type\": \"template\", \"template\": { \"name\": \"hello_world\", \"language\": { \"code\": \"en_US\" } } }'
*/

export async function sendMessages (clientPhone) {
  if (!clientPhone) return

  const requestBody = {
    messaging_product: 'whatsapp',
    to: `51${clientPhone}`,
    type: 'template',
    template: {
      name: 'hello_world',
      language: {
        code: 'en_US'
      }
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
