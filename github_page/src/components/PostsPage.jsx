/* 글 작성 및 브라우저 저장 기능: 데이터베이스 연결 전까지 비활성화. 기존 구현 보관.
import { useMemo, useState } from 'react'
import { useStoredPosts } from '../hooks/useStoredPosts'
import { downloadPostsModule } from '../utils/exportPosts'
import { PageTabs } from './PageTabs'
import { PostDetail } from './PostDetail'
import { PostEditor } from './PostEditor'
import { PostList } from './PostList'
import { SectionHeading } from './SectionHeading'

const postTabs = [
  { id: 'list', label: '글 목록' },
  { id: 'write', label: '글 작성' },
]

export function PostsPage() {
  const { deletePost, posts, savePost } = useStoredPosts()
  const [activePostTab, setActivePostTab] = useState('list')
  const [editingPostId, setEditingPostId] = useState('')
  const [selectedPostId, setSelectedPostId] = useState('')

  const selectedPost = useMemo(
    () => posts.find((post) => post.id === selectedPostId),
    [posts, selectedPostId],
  )
  const editingPost = useMemo(
    () => posts.find((post) => post.id === editingPostId),
    [posts, editingPostId],
  )

  function openList() {
    setActivePostTab('list')
    setEditingPostId('')
  }

  function openWriter() {
    setSelectedPostId('')
    setEditingPostId('')
    setActivePostTab('write')
  }

  function handlePostTabChange(tabId) {
    if (tabId === 'write') {
      openWriter()
      return
    }

    setActivePostTab(tabId)
  }

  function handleSave(post) {
    const savedPost = savePost(post)
    setSelectedPostId(savedPost.id)
    setEditingPostId('')
    setActivePostTab('list')
    return savedPost
  }

  function handleDelete() {
    if (!selectedPost) {
      return
    }

    const shouldDelete = window.confirm(`"${selectedPost.title}" 글을 삭제할까요?`)

    if (shouldDelete) {
      deletePost(selectedPost.id)
      setSelectedPostId('')
      setActivePostTab('list')
    }
  }

  function handleEdit() {
    if (selectedPost) {
      setEditingPostId(selectedPost.id)
      setActivePostTab('write')
    }
  }

  return (
    <section className="posts-workspace">
      <div className="posts-heading-row">
        <SectionHeading eyebrow="Latest Posts" title="작성 글" />
        <div className="posts-actions-row">
          <PageTabs activeTab={activePostTab} onTabChange={handlePostTabChange} tabs={postTabs} />
          <button
            className="secondary-button posts-export-button"
            onClick={() => downloadPostsModule(posts)}
            type="button"
          >
            게시글 파일 내보내기
          </button>
        </div>
      </div>

      {activePostTab === 'list' && !selectedPost && (
        <PostList onSelectPost={setSelectedPostId} posts={posts} />
      )}

      {activePostTab === 'list' && selectedPost && (
        <PostDetail
          onBack={() => setSelectedPostId('')}
          onDelete={handleDelete}
          onEdit={handleEdit}
          post={selectedPost}
        />
      )}

      {activePostTab === 'write' && (
        <PostEditor
          editingPost={editingPost}
          key={editingPostId || 'new-post'}
          onCancel={openList}
          onSave={handleSave}
        />
      )}

      {activePostTab === 'write' && editingPostId && (
        <button className="text-action editor-reset" onClick={openWriter} type="button">
          새 글로 다시 작성
        </button>
      )}
    </section>
  )
}

*/

import { useRef, useState } from 'react'
import { postCategories, posts } from '../data/posts'
import { PostDetail } from './PostDetail'
import { PostList } from './PostList'

export function PostsPage() {
  const [selectedPostId, setSelectedPostId] = useState('')
  const [activeCategory, setActiveCategory] = useState('전체')
  const workspace = useRef(null)
  const selectedPost = posts.find((post) => post.id === selectedPostId)
  const categories = ['전체', ...new Set([...postCategories, ...posts.map((post) => post.topic || post.category)])]
  const filteredPosts = activeCategory === '전체'
    ? posts
    : posts.filter((post) => (post.topic || post.category) === activeCategory)

  function selectCategory(category) {
    setActiveCategory(category)
    setSelectedPostId('')
  }

  function selectPost(id) {
    setSelectedPostId(id)
    requestAnimationFrame(() => {
      const target = id
        ? workspace.current?.querySelector('.post-detail-title')
        : document.getElementById(`post-${selectedPostId}`)
      target?.focus({ preventScroll: true })
      target?.scrollIntoView({ block: 'start' })
    })
  }

  return (
    <section className="posts-workspace" ref={workspace}>
      <div className="posts-layout">
        <aside className="posts-sidebar">
          <h3>카테고리</h3>
          <nav aria-label="게시글 카테고리">
            {categories.map((category) => (
              <button
                className="category-button"
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => selectCategory(category)}
              >
                <span>{category}</span>
                <span className="category-count">{category === '전체' ? posts.length : posts.filter((post) => (post.topic || post.category) === category).length}</span>
              </button>
            ))}
          </nav>
        </aside>
        <div className="posts-main">
          {selectedPost ? (
            <PostDetail post={selectedPost} onBack={() => selectPost('')} />
          ) : (
            <>
              <div className="posts-filter-heading"><h3>{activeCategory}</h3><span aria-live="polite">{filteredPosts.length}개의 기록</span></div>
              {filteredPosts.length ? (
                <PostList posts={filteredPosts} onSelectPost={selectPost} />
              ) : (
                <div className="posts-empty"><h3>아직 등록된 글이 없습니다</h3><p>{activeCategory} 공부 기록이 이곳에 모일 예정입니다.</p><button className="secondary-button" type="button" onClick={() => selectCategory('전체')}>전체 글 보기</button></div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
