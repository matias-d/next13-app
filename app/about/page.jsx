import React from 'react'

export default function AboutPage () {
  return (
    <div className='flex flex-col items-center'>
      <h3 className='text-md lg:w-[60vw] p-4 font-semibold text-gray-100  tracking-wider text-center'>I made this application with the resources offered by <span className='text-blue-500'>Next 13</span> using its folder routing system and other properties for example loading and layout system.</h3>
      <p className='text-gray-200 text-md'>Navigate to <span className='text-blue-500 font-semibold'>posts</span> to see the example</p>
    </div>
  )
}
