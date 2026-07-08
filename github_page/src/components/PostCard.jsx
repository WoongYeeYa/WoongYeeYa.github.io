export function PostCard({ onSelect, post }) {
  return (
    <article className="post-card">
      <div className="post-meta">
        <span>{post.category}</span>
        <span>{post.date}</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <div className="post-card-footer">
        <span className="read-time">{post.readTime}</span>
        <button className="text-action" onClick={() => onSelect(post.id)} type="button">
          자세히 보기
        </button>
      </div>
    </article>
  )
}
