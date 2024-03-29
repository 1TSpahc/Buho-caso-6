import { useState } from 'react'
import { usePhonesNumberContext } from '../../hooks/usePhonesNumberContext'
import { sendMessages } from '../../services'
import { Notification } from '../notification'
import { Ring } from '@uiball/loaders'
import { AnimatePresence } from 'framer-motion'

export function SendInfo () {
  const { phones } = usePhonesNumberContext()
  const [alert, setAlert] = useState(false)
  const [alertContent, setAlertContent] = useState({ status: '', content: '' })

  const handleSubmit = async (event) => {
    event.preventDefault()
    sendMassMessages()
  }

  const sendSimulator = (clientPhone) => {
    return new Promise((resolve, reject) => {
      const obj = {
        status: 'pending',
        content: 'Enviando mensajes'
      }
      setAlertContent(obj)
      setAlert(true)

      setTimeout(() => {
        resolve(sendMessages(clientPhone))
      }, 10000)
    })
  }

  const executeFetch = (clientPhone) => {
    return new Promise((resolve, reject) => {
      resolve(sendSimulator(clientPhone))
    })
  }

  const sendMassMessages = async () => {
    for (let index = 0; index < phones.length; index++) {
      const data = await executeFetch(phones[index])

      console.log(data)
      if (data) {
        const obj = {
          status: 'success',
          content: 'Los mensajes se enviaron con exito'
        }

        setAlertContent(obj)
        setAlert(true)
      }
    }
  }
  return (
    <>
      <form className='p-3' onSubmit={handleSubmit}>
        <label htmlFor='none' className='block text-[#232323]'>
          Se enviara el mensaje a los siguientes numeros:
          <textarea className='block bg-[#ffffff] text-[#0d0d0d] py-3 px-2 outline-none  border-[3px] border-[#f9f7f5] my-6 resize-none w-[600px] duration-300 rounded-md placeholder:text-[#6a6c72de] focus:border-[#fbf7f4]' name='' cols='30' rows='10' readOnly value={JSON.stringify(phones)} />
        </label>
        <button className='  bg-[#1f1f1f] px-5 text-[#e3e4e8]  py-2 rounded-md duration-300'>Enviar</button>
      </form>
      <AnimatePresence>
        {
          alert && (
            <Notification status={alertContent.status}>
              <div className='flex items-center justify-center gap-3'>
                {alertContent.content}

                {
                alertContent.status === 'pending'
                  ? (
                    <div className=''>
                      <Ring
                        size={25}
                        speed={1.4}
                        color='white'
                      />
                    </div>
                    )
                  : ''
              }
              </div>
            </Notification>
          )

        }
      </AnimatePresence>
    </>

  )
}
