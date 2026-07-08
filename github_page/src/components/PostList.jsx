import { PostCard } from './PostCard'

export function PostList({ onSelectPost, posts }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} onSelect={onSelectPost} post={post} />
      ))}
    </div>
  )
}
