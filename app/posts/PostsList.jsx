import Link from 'next/link'
import LikePosts from './LikePosts'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}

export default async function PostsLists () {
  const posts = await fetchPosts()
  return posts.slice(0, 8).map(post => (
    <article key={post.id} className='bg-zinc-800 p-4 rounded-xl flex flex-col gap-2 w-full'>
      <div className='flex justify-between items-center'>
        <Link href='/posts/[id]' as={`/posts/${post.id}`}>
          <h2 className='text-lg font-bold capitalize lg:w-[30vw] hover:underline'>{post.title}</h2>
        </Link>
        <LikePosts />
      </div>
      <p className='text-gray-200 lg:w-[45vw]'>{post.body}</p>
    </article>
  ))
}
