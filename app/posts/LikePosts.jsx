'use client'

import { useState } from 'react'
import { RiHeart2Line, RiHeart2Fill } from 'react-icons/ri'

export default function LikePosts () {
  const [like, setLike] = useState(true)

  return (<button className='bg-blue-500 p-2 rounded-xl text-lg hover:bg-blue-600 transition-colors' onClick={() => setLike(!like)}>{like ? <RiHeart2Line /> : <RiHeart2Fill />}</button>)
}
