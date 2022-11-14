import { RiSearch2Line } from 'react-icons/ri'

export default function SearchPost () {
  return (
    <form>
      <div className='flex items-center'>
        <input type='text' placeholder='Search yours posts' className='py-2 px-2 outline-none rounded-tl-xl rounded-bl-xl bg-zinc-800' />
        <div className='bg-zinc-800 py-3 px-2 rounded-tr-xl rounded-br-xl text-md'>
          <RiSearch2Line className=' text-gray-200' />
        </div>
      </div>
    </form>
  )
}
