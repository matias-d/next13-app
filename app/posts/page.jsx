import React, { Suspense } from 'react'
import PostsLists from './PostsList'

export default async function PostsPage () {
  return (
    <div className='flex flex-col gap-4 py-4'>
      <h1 className='text-xl font-bold uppercase  tracking-wider mb-2'> Your <span className='text-blue-500'>Posts</span></h1>
      <Suspense fallback={<p>Loading posts...</p>}>
        <PostsLists />
      </Suspense>
    </div>
  )
}
