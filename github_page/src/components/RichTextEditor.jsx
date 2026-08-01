import { useEffect, useRef, useState } from 'react'

const fontSizes = ['12px', '14px', '16px', '18px', '20px', '24px', '32px']

function normalizeHtml(html) {
  return html || ''
}

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
}

function readImage(file) {
  return new Promise((resolve) => {
    const reader = new FileReader()

    reader.onload = () => {
      resolve({
        alt: file.name,
        src: reader.result,
      })
    }

    reader.readAsDataURL(file)
  })
}

export function RichTextEditor({ onChange, value }) {
  const editorRef = useRef(null)
  const fileInputRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== normalizeHtml(value)) {
      editorRef.current.innerHTML = normalizeHtml(value)
    }
  }, [value])

  function emitChange() {
    if (!editorRef.current) {
      return
    }

    onChange({
      html: editorRef.current.innerHTML,
      text: editorRef.current.innerText.trim(),
    })
  }

  function runCommand(command, commandValue = null) {
    editorRef.current?.focus()
    document.execCommand(command, false, commandValue)
    emitChange()
  }

  function applyFontSize(size) {
    editorRef.current?.focus()
    document.execCommand('fontSize', false, '7')

    editorRef.current?.querySelectorAll('font[size="7"]').forEach((font) => {
      font.removeAttribute('size')
      font.style.fontSize = size
    })

    emitChange()
  }

  async function insertImages(fileList) {
    const imageFiles = [...fileList].filter((file) => file.type.startsWith('image/'))

    if (imageFiles.length === 0) {
      return
    }

    const images = await Promise.all(imageFiles.map(readImage))
    const imageHtml = images
      .map(
        (image) =>
          `<figure class="editor-image-block"><img src="${image.src}" alt="${escapeAttribute(
            image.alt,
          )}" /></figure>`,
      )
      .join('')

    editorRef.current?.focus()
    document.execCommand('insertHTML', false, imageHtml)
    emitChange()
  }

  function handleImageUpload(event) {
    insertImages(event.target.files || [])
    event.target.value = ''
  }

  function handleDragOver(event) {
    event.preventDefault()
    setIsDragging(true)
  }

  function handleDrop(event) {
    event.preventDefault()
    setIsDragging(false)
    insertImages(event.dataTransfer.files || [])
  }

  function handlePaste(event) {
    const imageFiles = [...event.clipboardData.files].filter((file) =>
      file.type.startsWith('image/'),
    )

    if (imageFiles.length === 0) {
      return
    }

    event.preventDefault()
    insertImages(imageFiles)
  }

  return (
    <div className={isDragging ? 'rich-editor is-dragging' : 'rich-editor'}>
      <div className="rich-toolbar" aria-label="본문 서식 도구">
        <button onClick={() => runCommand('bold')} type="button">
          굵게
        </button>
        <button onClick={() => runCommand('italic')} type="button">
          기울임
        </button>
        <button onClick={() => runCommand('underline')} type="button">
          밑줄
        </button>
        <label>
          폰트 크기
          <select defaultValue="16px" onChange={(event) => applyFontSize(event.target.value)}>
            {fontSizes.map((size) => (
              <option key={size} value={size}>
                {size.replace('px', '')}
              </option>
            ))}
          </select>
        </label>
        <label>
          색상
          <input
            aria-label="글자 색상"
            defaultValue="#111827"
            onChange={(event) => runCommand('foreColor', event.target.value)}
            type="color"
          />
        </label>
        <button onClick={() => fileInputRef.current?.click()} type="button">
          이미지 추가
        </button>
        <input
          accept="image/*"
          className="visually-hidden"
          multiple
          onChange={handleImageUpload}
          ref={fileInputRef}
          type="file"
        />
      </div>

      <div
        className="rich-editor-surface"
        contentEditable
        onDragLeave={() => setIsDragging(false)}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onInput={emitChange}
        onPaste={handlePaste}
        ref={editorRef}
        role="textbox"
        suppressContentEditableWarning
        tabIndex={0}
      />
    </div>
  )
}
