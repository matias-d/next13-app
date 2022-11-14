
import ViewComments from './ViewComments'

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
}

export default async function Post ({ children, params }) {
  const { id } = params
  const post = await fetchSinglePost(id)
  return (
    <div className='bg-zinc-800 p-4 my-4 rounded-xl'>
      <h3 className='text-lg font-bold capitalize lg:w-[30vw] mb-2'>{post.title}</h3>
      <p className='text-gray-200 lg:w-[45vw] mb-2'>{post.body}</p>
      <ViewComments id={id} />
      {children}
    </div>

  )
}
