function textToHtml(text) {
  return text
    .split('\n')
    .filter(Boolean)
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join('')
}

export function PostDetail({ onBack, onDelete, onEdit, post }) {
  const bodyHtml = post.contentHtml || textToHtml(post.content || '')

  return (
    <article className="post-detail">
      <div className="post-detail-toolbar">
        <button className="secondary-button" onClick={onBack} type="button">
          목록으로
        </button>
        <div className="toolbar-actions">
          <button className="secondary-button" onClick={onEdit} type="button">
            수정
          </button>
          <button className="danger-button" onClick={onDelete} type="button">
            삭제
          </button>
        </div>
      </div>

      <div className="post-meta">
        <span>{post.category}</span>
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
      <h2>{post.title}</h2>
      <p className="post-detail-excerpt">{post.excerpt}</p>
      <div className="post-body" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </article>
  )
}
