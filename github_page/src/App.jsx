import { useState } from 'react'
import { AboutPage } from './components/AboutPage'
import { HeroSection } from './components/HeroSection'
import { PageHeader } from './components/PageHeader'
import { PostsPage } from './components/PostsPage'
import { tabs } from './data/siteContent'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <main className="blog-shell">
      <PageHeader activeTab={activeTab} onTabChange={setActiveTab} tabs={tabs} />

      {activeTab === 'home' && <HeroSection onPostsClick={() => setActiveTab('posts')} />}
      {activeTab === 'about' && <AboutPage onTopicClick={() => setActiveTab('posts')} />}
      {activeTab === 'posts' && <PostsPage />}
    </main>
  )
}

export default App
