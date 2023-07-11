import Link from 'next/link'
import Search from './Search'

export default function NavBar() {
  return (
    <nav className='bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl'>
      <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
        <Link href='/'>WikiSearch</Link>
      </h1>
      <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
        <Link href='/about'>About</Link>
      </h1>
      <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
        <Link href='/users'>Users</Link>
      </h1>
      <Search />
    </nav>
  )
}