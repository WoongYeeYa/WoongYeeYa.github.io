import { useMemo, useState } from 'react'
import { useStoredPosts } from '../hooks/useStoredPosts'
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
        <PageTabs activeTab={activePostTab} onTabChange={handlePostTabChange} tabs={postTabs} />
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
