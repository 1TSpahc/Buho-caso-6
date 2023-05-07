import React, { useState } from 'react'

export const PhoneContext = React.createContext()

export function PhoneContextProvider ({ children }) {
  const [phones, setPhones] = useState([])
  const [message, setMessage] = useState('')

  const globalState = {
    phones,
    setPhones,
    message,
    setMessage
  }

  return (
    <PhoneContext.Provider value={{ globalState }}>
      {children}
    </PhoneContext.Provider>
  )
}
