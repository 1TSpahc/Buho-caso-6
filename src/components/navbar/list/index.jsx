import { Link } from 'wouter'

export function List () {
  const allLinks = [
    {
      path: '/',
      text: 'Agregar numeros'
    },
    {
      path: '/configurar',
      text: 'Configurar mensaje'
    },
    {
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
              <Link to={link.path} className='text-white py-4 block w-full  hover:bg-[#918cf2] duration-300  px-2 rounded-md'>{link.text}</Link>
            </li>
          )
        })
      }
    </ul>
  )
}
