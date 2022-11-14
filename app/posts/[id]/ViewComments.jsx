'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ViewComments ({ id }) {
  const [view, setView] = useState('comments')

  return (
    <Link href={`/posts/${id}/${view}`} className='text-gray-300 text-sm hover:text-gray-100 transition-colors' onClick={() => setView(view === 'comments' ? '' : 'comments')}>View comments</Link>
  )
}
