export function TopicList({ onTopicClick, topics }) {
  return (
    <div className="topic-list">
      {topics.map((topic) => (
        <button key={topic} onClick={onTopicClick} type="button">
          {topic}
        </button>
      ))}
    </div>
  )
}
