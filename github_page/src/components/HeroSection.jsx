import heroImg from '../assets/hero.png'

export function HeroSection({ onPostsClick }) {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Main</p>
        <h2>배운 것과 만든 것을 차분히 기록하는 공간</h2>
        <p className="intro">
          개발하면서 만난 문제, 실험한 코드, 오래 남기고 싶은 생각을 정리합니다.
        </p>
        <div className="hero-actions">
          <button className="primary-link" onClick={onPostsClick} type="button">
            글 보러가기
          </button>
          <a className="secondary-link" href="https://github.com/WoongYeeYa">
            GitHub
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <img src={heroImg} alt="" />
      </div>
    </section>
  )
}
