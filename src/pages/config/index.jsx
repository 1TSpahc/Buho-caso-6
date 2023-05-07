import { useEffect, useState } from 'react'
import { Subtitle } from '../../components/subtitle'
import { usePhonesNumberContext } from '../../hooks/usePhonesNumberContext'
import { Notification } from '../../components/notification'

export function Config () {
  const { phones } = usePhonesNumberContext()
  const [alert, setAlert] = useState(false)
  console.log(phones.length)

  useEffect(() => {
    if (phones.length === 0) {
      setAlert(true)
    }
  }, [])

  return (
    <>
      <Subtitle>Personaliza tu mensaje</Subtitle>
      {
            alert && <Notification status='error'>Primero tienes que agregar los numeros</Notification>
        }
    </>
  )
}
