import { useEffect, useRef } from 'react'

const fontSizes = [
  { label: '작게', value: '2' },
  { label: '보통', value: '3' },
  { label: '크게', value: '5' },
  { label: '제목', value: '7' },
]

function normalizeHtml(html) {
  return html || ''
}

export function RichTextEditor({ onChange, value }) {
  const editorRef = useRef(null)
  const fileInputRef = useRef(null)

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

  function handleImageUpload(event) {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    const reader = new FileReader()

    reader.onload = () => {
      editorRef.current?.focus()
      document.execCommand(
        'insertHTML',
        false,
        `<img src="${reader.result}" alt="${file.name}" />`,
      )
      emitChange()
      event.target.value = ''
    }

    reader.readAsDataURL(file)
  }

  return (
    <div className="rich-editor">
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
          크기
          <select onChange={(event) => runCommand('fontSize', event.target.value)}>
            {fontSizes.map((size) => (
              <option key={size.value} value={size.value}>
                {size.label}
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
          onChange={handleImageUpload}
          ref={fileInputRef}
          type="file"
        />
      </div>

      <div
        className="rich-editor-surface"
        contentEditable
        onInput={emitChange}
        ref={editorRef}
        role="textbox"
        suppressContentEditableWarning
        tabIndex={0}
      />
    </div>
  )
}
