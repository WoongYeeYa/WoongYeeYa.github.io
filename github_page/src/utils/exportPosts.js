function createPostsModule(posts) {
  return `export const posts = ${JSON.stringify(posts, null, 2)}\n`
}

export function downloadPostsModule(posts) {
  const blob = new Blob([createPostsModule(posts)], {
    type: 'text/javascript;charset=utf-8',
  })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = url
  link.download = 'posts.js'
  link.click()
  URL.revokeObjectURL(url)
}
