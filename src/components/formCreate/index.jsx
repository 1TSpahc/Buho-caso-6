import { useState } from 'react'
import { usePhonesNumberContext } from '../../hooks/usePhonesNumberContext'
import { Notification } from '../notification'
import { AnimatePresence } from 'framer-motion'

export function FormCreate () {
  const { setPhones } = usePhonesNumberContext()
  const [numbersPhone, setNumbersPhone] = useState(``) // eslint-disable-line
  const [alert, setAlert] = useState(false)

  const handleSumbit = (e) => {
    e.preventDefault()

    const arrayPhones = convertNumbersToArray()
    setPhones(arrayPhones)
    setAlert(true)

    setTimeout(() => {
      setAlert(false)
    }, 4000)
  }

  const handleChange = (event) => {
    setNumbersPhone(event.target.value)
  }

  const convertNumbersToArray = () => {
    //  1: convertimos numbersPhone que un string a una array con el metodo split
    const phonesStringToArray = (numbersPhone.split('\n'))

    // 2: Removemos los espacios vacios = "" con el filter
    const removeEmptySpaces = phonesStringToArray.filter((phones) => (phones.trim() !== ''))

    // 3: filtrar solo los numeros.
    const legalPhoneNumber = removeEmptySpaces.filter((phones) => phones.length === 9 && Number(phones))

    return legalPhoneNumber
  }

  return (
    <>
      <form className='p-3' onSubmit={handleSumbit}>
        <label htmlFor='none' className='block text-[#232323]'>
          Para separar los numeros telefonicos puedes usar la tecla enter
          <textarea className='block bg-[#ffffff] text-[#0d0d0d] py-3 px-2 outline-none  border-[3px]  border-[#f9f7f5] my-6 resize-none w-[600px] duration-300 rounded-md placeholder:text-[#6a6c72de] focus:border-[#fbf7f4]' name='' cols='30' rows='10' value={numbersPhone} placeholder='Agregar los numeros aqui, no es necesario el +51' onChange={handleChange} />
        </label>
        <button className=' bg-[#1f1f1f] px-5 text-[#e3e4e8]  py-2 rounded-md duration-300'>Guardar</button>
      </form>
      <AnimatePresence>
        {
          alert && <Notification status='success'>Guardado!</Notification>
        }
      </AnimatePresence>

    </>
  )
}
