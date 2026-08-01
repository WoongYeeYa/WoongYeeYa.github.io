import { useState } from 'react'
import { RichTextEditor } from './RichTextEditor'

function createEmptyPost() {
  return {
    category: 'Notes',
    content: '',
    contentHtml: '',
    date: new Date().toISOString().slice(0, 10).replaceAll('-', '.'),
    excerpt: '',
    id: '',
    readTime: '1 min read',
    title: '',
  }
}

function textToHtml(text) {
  return text
    .split('\n')
    .filter(Boolean)
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join('')
}

function createExcerpt(form) {
  return form.excerpt || form.content.slice(0, 90)
}

function hasBodyContent(form) {
  return form.content.trim() || form.contentHtml.includes('<img')
}

export function PostEditor({ editingPost, onCancel, onSave }) {
  const [form, setForm] = useState(() => ({
    ...createEmptyPost(),
    ...editingPost,
    contentHtml: editingPost?.contentHtml || textToHtml(editingPost?.content || ''),
  }))
  const [error, setError] = useState('')

  function updateField(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  function updateContent({ html, text }) {
    setForm((currentForm) => ({
      ...currentForm,
      content: text,
      contentHtml: html,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!hasBodyContent(form)) {
      setError('본문을 입력하거나 이미지를 추가해 주세요.')
      return
    }

    const savedPost = onSave({
      ...form,
      excerpt: createExcerpt(form),
    })

    setError('')
    setForm(savedPost)
  }

  return (
    <form className="post-editor" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          제목
          <input name="title" onChange={updateField} required value={form.title} />
        </label>
        <label>
          카테고리
          <input name="category" onChange={updateField} required value={form.category} />
        </label>
        <label>
          날짜
          <input name="date" onChange={updateField} required value={form.date} />
        </label>
        <label>
          읽는 시간
          <input name="readTime" onChange={updateField} value={form.readTime} />
        </label>
      </div>

      <label>
        요약
        <textarea name="excerpt" onChange={updateField} rows="3" value={form.excerpt} />
      </label>

      <div className="editor-field">
        <span>본문</span>
        <RichTextEditor onChange={updateContent} value={form.contentHtml} />
        {error && <p className="form-error">{error}</p>}
      </div>

      <div className="form-actions">
        <button className="primary-link" type="submit">
          저장
        </button>
        <button className="secondary-button" onClick={onCancel} type="button">
          취소
        </button>
      </div>
    </form>
  )
}
