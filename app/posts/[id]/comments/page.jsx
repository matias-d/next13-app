import Image from 'next/image'

const fetchComments = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(res => res.json())
}

export default async function Comments ({ params }) {
  const { id } = params

  const comments = await fetchComments(id)

  return (
    <div className='flex flex-col gap-2 '>
      <h2 className='text-lg font-semibold text-center'>Comments of <span className='text-blue-500'>Post</span></h2>
      {
        comments.map((comment) => (
          <div key={comment.id} className='bg-zinc-700 p-2 rounded-xl flex flex-col gap-3'>
            <div className='flex justify-between'>
              <div className='flex gap-2 items-center'>
                <Image alt={comment.email} src={`https://avatars.dicebear.com/api/big-smile/${comment.email}.svg`} width='30' height='30' />
                <h2 className='text-lg font-bold capitalize w-[30vw]'>{comment.name}</h2>
              </div>
              <p className='text-gray-300 lowercase '>{comment.email}</p>
            </div>
            <p className='lg:w-[40vw] text-gray-200'>{comment.body}</p>
          </div>
        ))
      }
    </div>
  )
}
