import { resume } from '../data/resume'
import profileImage from '../assets/screenshot/ㅇㅅㅇ.jpg'

function Timeline({ entries, emptyText }) {
  if (!entries.length) return <p className="resume-placeholder">{emptyText}</p>
  return (
    <ol className="resume-timeline">
      {entries.map((entry, index) => (
        <li key={index}>
          <p className="resume-period">{entry.period}</p>
          <div className="resume-timeline-content">
            <h4>{entry.title}</h4>
            <p>{entry.description}</p>
          </div>
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
          <div className="resume-profile-photo">
            <img src={profileImage} alt={`${resume.name} 프로필 사진`} />
          </div>
          <dl>
            <div><dt>GitHub</dt><dd><a href={resume.github}>@{resume.handle} ↗</a></dd></div>
            <div><dt>Email</dt><dd>{resume.email ? <a href={`mailto:${resume.email}`}>{resume.email}</a> : '작성 예정'}</dd></div>
          </dl>
        </aside>
      </header>

      <div className="resume-section">
        <div className="resume-section-label"><p className="eyebrow">01 / Skills</p><h3>기술 스택</h3><p>실무·프로젝트 경험과 교육 과정에서 학습한 기술</p></div>
        <div className="resume-skills">
          {resume.skills.map((group) => <div key={group.name}><h4>{group.name}</h4><ul className="resume-tags">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
        </div>
      </div>

      <div className="resume-section">
        <div className="resume-section-label"><p className="eyebrow">02 / Experience</p><h3>경력 및 활동</h3><p>첫 경력부터 현재까지</p></div>
        <Timeline entries={resume.experience} emptyText="경력 및 활동 이력 작성 예정" />
      </div>

      <div className="resume-section">
        <div className="resume-section-label"><p className="eyebrow">03 / Projects</p><h3>프로젝트</h3><p>게임 기획부터 웹 개발, 개인 프로젝트까지</p></div>
        <div className="resume-projects">
          {resume.projects.map((project) => (
            <article className="resume-project" key={project.title}>
              <p className="eyebrow">Selected Project</p>
              {project.period && <p className="resume-project-period">{project.period}</p>}
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <ul className="resume-tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              {project.url && <a className="resume-project-link" href={project.url}>{project.linkLabel || '프로젝트 보기'} ↗</a>}
            </article>
          ))}
        </div>
      </div>

      <div className="resume-section">
        <div className="resume-section-label"><p className="eyebrow">04 / Strengths</p><h3>업무 강점</h3><p>프로젝트에서 쌓은 문제 해결과 협업 경험</p></div>
        <div className="resume-strengths">
          {resume.strengths.map((strength) => (
            <article key={strength.title}>
              <h4>{strength.title}</h4>
              <p>{strength.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
