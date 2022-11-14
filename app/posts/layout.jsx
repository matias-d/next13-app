import SearchPost from './SearchPosts'

export default function PostsLayout ({ children }) {
  return (
    <div>
      <SearchPost />
      {children}
    </div>

  )
}
