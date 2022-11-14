import Link from 'next/link'
const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'About',
  route: '/about'
}, {
  label: 'Posts',
  route: '/posts'
}]

export function Navigation () {
  return (
    <header className=' border-zinc-500 p-4 rounded-xl shadow-xl  flex justify-center'>
      <nav>
        <ul className='flex gap-4'>
          {
            links.map(({ label, route }) => (
              <li key={route}>
                <Link href={route} className='text-gray-200 hover:text-gray-300 transition-color text-sm font-semibold hover:border-b hover:border-gray-400 transition-all'>{label}</Link>
              </li>
            ))
        }
        </ul>
      </nav>
    </header>
  )
}
