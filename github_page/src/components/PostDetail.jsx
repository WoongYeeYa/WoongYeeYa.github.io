const sections = [
  { id: 'pipeline', title: '파이프라인', label: 'Pipeline', description: '공부를 진행한 순서와 전체 흐름' },
  { id: 'problems', title: '진행하면서의 문제점', label: 'Problems', description: '진행을 막았던 문제와 제약' },
  { id: 'reframing', title: '리프레이밍', label: 'Reframing', description: '문제를 새로운 관점에서 다시 정의하기' },
  { id: 'solution', title: '솔루션', label: 'Solution', description: '선택한 해결 방법과 적용 과정' },
  { id: 'impact', title: '임팩트', label: 'Impact', description: '해결 이후 달라진 점과 결과' },
  { id: 'reflection', title: '리플렉션', label: 'Reflection', description: '배운 점과 다음에 시도할 것' },
]

export function PostDetail({ onBack, post }) {
  return (
    <article className="post-detail">
      <div className="post-detail-toolbar"><button className="secondary-button" onClick={onBack} type="button">← 목록으로</button></div>
      <div className="post-meta"><span>{post.category}</span><span>{post.date}</span><span>{post.readTime}</span></div>
      <h2 className="post-detail-title" tabIndex={-1}>{post.title}</h2>
      <p className="post-detail-excerpt">{post.excerpt}</p>
      <img className="post-detail-cover" src={post.thumbnail} alt="" width="800" height="450" />
      <nav className="post-toc" aria-label="글 목차">
        {sections.map((section, index) => <a key={section.id} href={`#${post.id}-${section.id}`}><span>0{index + 1}</span>{section.title}</a>)}
      </nav>
      <div className="study-sections">
        {sections.map((section, index) => (
          <section className="study-section" id={`${post.id}-${section.id}`} key={section.id} aria-labelledby={`${post.id}-${section.id}-title`}>
            <div className="study-section-heading">
              <span className="study-section-number">0{index + 1}</span>
              <div><p className="eyebrow">{section.label}</p><h3 id={`${post.id}-${section.id}-title`}>{section.title}</h3></div>
            </div>
            <p className="study-section-description">{section.description}</p>
            {section.id === 'pipeline' && post.workflowImage && (
              <figure className="workflow-figure">
                <a href={post.workflowImage} target="_blank" rel="noopener noreferrer" aria-label="워크플로 원본 이미지 보기 (새 탭)">
                  <img src={post.workflowImage} alt={post.workflowImageAlt || '워크플로 구성도'} loading="lazy" />
                </a>
                <figcaption>{post.workflowImageCaption}</figcaption>
              </figure>
            )}
            {section.id === 'pipeline' && post.sections?.pipeline?.length ? (
              <ol className="pipeline-steps">{post.sections.pipeline.map((step, i) => <li key={i}><span>STEP {String(i + 1).padStart(2, '0')}</span>{step}</li>)}</ol>
            ) : (
              <div className="study-section-body">{(post.sections?.[section.id]?.length ? post.sections[section.id] : ['아직 작성된 내용이 없습니다.']).map((paragraph, i) => <p key={i}>{paragraph}</p>)}</div>
            )}
            {section.id === 'pipeline' && post.studyNotes?.length > 0 && (
              <div className="study-notes">
                <p className="eyebrow">Study Notes / 공부 메모</p>
                {post.studyNotes.map((note) => (
                  <section className="study-note" key={note.title}>
                    <h4>{note.title}</h4>
                    {note.paragraphs?.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                    {note.items?.length > 0 && <ul>{note.items.map((item) => <li key={item}>{item}</li>)}</ul>}
                  </section>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
      {post.sources?.length > 0 && (
        <aside className="study-note" aria-label="참고 자료">
          <h4>참고 자료</h4>
          <ul>{post.sources.map((source) => <li key={source.url}><a className="resume-project-link" href={source.url}>{source.title}</a></li>)}</ul>
        </aside>
      )}
      <button className="secondary-button" onClick={onBack} type="button">← 다른 기록 보기</button>
    </article>
  )
}
