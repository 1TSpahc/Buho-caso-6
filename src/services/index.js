/*

curl -i -X POST `
  apiurl/113613268393330/messages`
  -H 'Authorization: Bearer token' `
  -H 'Content-Type: application/json' `
  -d    '{  \"messaging_product\": \"whatsapp\",
            \"to\": \"51960872493 ( numero a enviar )\",
            \"type\": \"template\",
            \"template\": {
                \"name\": \"hello_world\",
                \"language\": {
                    \"code\": \"en_US\"
                    }
                }
        }'

  */
