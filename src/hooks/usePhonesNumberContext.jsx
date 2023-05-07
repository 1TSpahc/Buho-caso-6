import { PhoneContext } from '../context/phoneNumbers'
import { useContext } from 'react'
export function usePhonesNumberContext () {
  const { globalState } = useContext(PhoneContext)
  const { phones, setPhones, message, setMessage } = globalState

  return {
    phones,
    setPhones,
    message,
    setMessage
  }
}
