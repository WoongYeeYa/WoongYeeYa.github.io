import { useEffect, useMemo, useState } from 'react'
import { featuredPosts } from '../data/siteContent'

const STORAGE_KEY = 'woongyeeya.posts'

function createSlug(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/(^-|-$)/g, '')
}

function createPostId(title) {
  const slug = createSlug(title) || 'post'
  return `${slug}-${Date.now()}`
}

function readStoredPosts() {
  try {
    const rawPosts = window.localStorage.getItem(STORAGE_KEY)
    return rawPosts ? JSON.parse(rawPosts) : featuredPosts
  } catch {
    return featuredPosts
  }
}

export function useStoredPosts() {
  const [posts, setPosts] = useState(readStoredPosts)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
  }, [posts])

  const sortedPosts = useMemo(
    () => [...posts].sort((a, b) => b.date.localeCompare(a.date)),
    [posts],
  )

  function savePost(post) {
    const nextPost = {
      ...post,
      contentHtml: post.contentHtml || '',
      id: post.id || createPostId(post.title),
      readTime: post.readTime || '1 min read',
    }

    setPosts((currentPosts) => {
      const exists = currentPosts.some((currentPost) => currentPost.id === nextPost.id)

      if (!exists) {
        return [nextPost, ...currentPosts]
      }

      return currentPosts.map((currentPost) =>
        currentPost.id === nextPost.id ? nextPost : currentPost,
      )
    })

    return nextPost
  }

  function deletePost(postId) {
    setPosts((currentPosts) => currentPosts.filter((post) => post.id !== postId))
  }

  return {
    deletePost,
    posts: sortedPosts,
    savePost,
  }
}
