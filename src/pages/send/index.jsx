import { useEffect, useState } from 'react'
import { Subtitle } from '../../components/subtitle'
import { usePhonesNumberContext } from '../../hooks/usePhonesNumberContext'
import { Notification } from '../../components/notification'
import { SendInfo } from '../../components/sendInfo'

import { motion } from 'framer-motion'

export function Send () {
  const { phones } = usePhonesNumberContext()
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    if ((phones.length === 0)) {
      setAlert(true)
    }
  }, [])

  return (
    <motion.section initial={{ opacity: 0, translateY: 20 }} animate={{ opacity: 1, translateY: 0 }}>
      <Subtitle>Enviar mensajes</Subtitle>

      {
            alert
              ? (
                <Notification status='error'>
                  Primero tienes que agregar los numeros telefonicos
                </Notification>
                )
              : <SendInfo />
      }
    </motion.section>
  )
}
