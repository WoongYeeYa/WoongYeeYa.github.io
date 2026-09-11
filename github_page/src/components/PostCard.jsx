export function PostCard({ onSelect, post }) {
  return (
    <article className="post-card">
      <button className="post-card-link" id={`post-${post.id}`} onClick={() => onSelect(post.id)} type="button" aria-label={`${post.title} 상세 보기`}>
        <img className="post-thumbnail" src={post.thumbnail} alt="" loading="lazy" width="800" height="450" />
        <div className="post-card-content">
          <div className="post-meta"><span>{post.category}</span><span>{post.date}</span></div>
          <h3>{post.title}</h3><p>{post.excerpt}</p>
          <div className="post-card-footer"><span className="read-time">{post.readTime}</span><span className="text-action">기록 읽기 ↗</span></div>
        </div>
      </button>
    </article>
  )
}
