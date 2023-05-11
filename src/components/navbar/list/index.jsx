import { Link } from 'wouter'
import { CreateIcon, EnviarIcon } from '../../../icons'

export function List () {
  const allLinks = [
    {
      icon: CreateIcon,
      path: '/',
      text: 'Agregar numeros'
    },
    {
      icon: EnviarIcon,
      path: '/enviar',
      text: 'Enviar'
    }

  ]

  return (
    <ul className='w-full flex flex-col gap-4'>
      {
        allLinks.map((link, index) => {
          return (
            <li key={index}>
              <Link to={link.path} className='text-black py-4  w-full  duration-300  px-2 rounded-md fill-black flex gap-2  focus:bg-[#eee6e3] '>
                <link.icon />
                {link.text}
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}
