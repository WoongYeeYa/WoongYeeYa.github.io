import { useEffect, useState } from 'react'
import { HeroSection } from './components/HeroSection'
import { PageHeader } from './components/PageHeader'
import { PostsPage } from './components/PostsPage'
import { tabs } from './data/siteContent'
import './styles/app.css'

function App() {
  const readLocation = () => {
    const params = new URLSearchParams(window.location.search)
    return {
      page: params.get('page') === 'posts' || params.has('post') ? 'posts' : 'home',
      category: params.get('category') || '전체',
      post: params.get('post') || '',
    }
  }
  const [locationState, setLocationState] = useState(readLocation)

  useEffect(() => {
    const handlePopState = () => setLocationState(readLocation())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  function navigate(next) {
    const state = { ...locationState, ...next }
    const params = new URLSearchParams()
    if (state.page !== 'home') params.set('page', state.page)
    if (state.page === 'posts' && state.category !== '전체') params.set('category', state.category)
    if (state.page === 'posts' && state.post) params.set('post', state.post)
    const query = params.toString()
    window.history.pushState({}, '', `${window.location.pathname}${query ? `?${query}` : ''}`)
    setLocationState(state)
  }

  function selectPage(page) {
    navigate(page === 'posts'
      ? { page, post: '' }
      : { page, category: '전체', post: '' })
  }

  return (
    <main className="blog-shell">
      <PageHeader activeTab={locationState.page} onTabChange={selectPage} tabs={tabs} />

      {locationState.page === 'home' && <HeroSection onPostsClick={() => selectPage('posts')} />}
      {locationState.page === 'posts' && (
        <PostsPage
          activeCategory={locationState.category}
          selectedPostId={locationState.post}
          onCategoryChange={(category) => navigate({ category, post: '' })}
          onPostChange={(post) => navigate({ post })}
        />
      )}
    </main>
  )
}

export default App
