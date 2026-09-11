import { resume } from '../data/resume'

function Timeline({ entries, emptyText }) {
  if (!entries.length) return <p className="resume-placeholder">{emptyText}</p>
  return (
    <ol className="resume-timeline">
      {entries.map((entry, index) => (
        <li key={index}>
          <p className="resume-period">{entry.period}</p>
          <h4>{entry.title}</h4>
          <p>{entry.description}</p>
        </li>
      ))}
    </ol>
  )
}

export function HeroSection({ onPostsClick }) {
  return (
    <section className="resume-page" aria-label="프로필 및 이력">
      <header className="resume-intro">
        <div>
          <p className="eyebrow">Profile / Resume</p>
          <h2>{resume.name}<span>{resume.handle}</span></h2>
          <p className="resume-headline">{resume.headline}</p>
          <p className="resume-summary">{resume.summary}</p>
          <div className="hero-actions">
            <a className="primary-link" href={resume.github}>GitHub ↗</a>
            <button className="secondary-button" onClick={onPostsClick} type="button">공부 기록 보기 →</button>
          </div>
        </div>
        <aside className="resume-contact" aria-label="연락처">
          <div className="resume-monogram" aria-hidden="true">WY<span>PERSONAL PROFILE</span></div>
          <dl>
            <div><dt>GitHub</dt><dd><a href={resume.github}>@{resume.handle} ↗</a></dd></div>
            <div><dt>Email</dt><dd>{resume.email ? <a href={`mailto:${resume.email}`}>{resume.email}</a> : '작성 예정'}</dd></div>
          </dl>
        </aside>
      </header>

      <div className="resume-section">
        <div className="resume-section-label"><p className="eyebrow">01 / Skills</p><h3>기술 스택</h3><p>현재 프로젝트에서 사용한 기술</p></div>
        <div className="resume-skills">
          {resume.skills.map((group) => <div key={group.name}><h4>{group.name}</h4><ul className="resume-tags">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
        </div>
      </div>

      <div className="resume-section">
        <div className="resume-section-label"><p className="eyebrow">02 / Experience</p><h3>경력 및 활동</h3></div>
        <Timeline entries={resume.experience} emptyText="경력 및 활동 이력 작성 예정" />
      </div>

      <div className="resume-section">
        <div className="resume-section-label"><p className="eyebrow">03 / Projects</p><h3>프로젝트</h3></div>
        <div className="resume-projects">
          {resume.projects.map((project) => (
            <article className="resume-project" key={project.title}>
              <p className="eyebrow">Selected Project</p><h4>{project.title}</h4>
              <p>{project.description}</p>
              <ul className="resume-tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              {project.url && <a className="resume-project-link" href={project.url}>소스 코드 보기 ↗</a>}
            </article>
          ))}
        </div>
      </div>

      <div className="resume-section">
        <div className="resume-section-label"><p className="eyebrow">04 / Education</p><h3>학력 및 교육</h3></div>
        <Timeline entries={resume.education} emptyText="학력 및 교육 이력 작성 예정" />
      </div>
    </section>
  )
}
