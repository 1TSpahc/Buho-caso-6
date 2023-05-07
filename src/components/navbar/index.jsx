import { List } from './list'

export function Navbar () {
  return (
    <nav className='w-[300px] bg-[#0f1116] h-screen px-3 py-7 flex flex-col items-start gap-6 border-r-2 border-[#20232c] fixed top-0 left-0'>
      <h2 className='text-white text-center w-full'>Mensajes masivos</h2>
      <List />
    </nav>
  )
}
