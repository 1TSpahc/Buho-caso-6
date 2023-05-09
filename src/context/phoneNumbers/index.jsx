import React, { useState } from 'react'

export const PhoneContext = React.createContext()

export function PhoneContextProvider ({ children }) {
  const [phones, setPhones] = useState([])

  const globalState = {
    phones,
    setPhones
  }

  return (
    <PhoneContext.Provider value={{ globalState }}>
      {children}
    </PhoneContext.Provider>
  )
}
