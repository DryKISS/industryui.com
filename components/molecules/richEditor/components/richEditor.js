import { Editor, EditorState } from 'draft-js'
import React, { useState } from 'react'

export const RichEditor = () => {
  const [editor, setEditor] = useState(EditorState.createEmpty())

  const onChangeEditor = evt => setEditor(evt.target.value)

  return <Editor editorState={editor} onChange={onChangeEditor} />
}
