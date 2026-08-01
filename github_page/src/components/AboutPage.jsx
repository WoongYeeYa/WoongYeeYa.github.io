import { topics } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'
import { TopicList } from './TopicList'

export function AboutPage({ onTopicClick }) {
  return (
    <section className="tab-panel profile-panel">
      <SectionHeading eyebrow="About" title="안녕하세요. 조영웅입니다." />
      <p>
        이 블로그는 프로젝트를 만들며 배운 점과 시행착오를 남기는 개인 작업실입니다.
        작은 개선도 꾸준히 기록하고, 나중에 다시 꺼내 볼 수 있는 형태로 정리해 갑니다.
      </p>

      <div className="topic-panel inline-topics">
        <p className="eyebrow">Topics</p>
        <TopicList onTopicClick={onTopicClick} topics={topics} />
      </div>
    </section>
  )
}
