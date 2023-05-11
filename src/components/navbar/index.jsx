import { List } from './list'

export function Navbar () {
  return (
    <nav className='w-[300px] bg-[#fbf7f4] h-screen px-3 py-7 flex flex-col items-start gap-6  fixed top-0 left-0'>
      <h1 className='text-black text-center w-full text-2xl'>Mensajes masivos</h1>
      <List />
    </nav>
  )
}
