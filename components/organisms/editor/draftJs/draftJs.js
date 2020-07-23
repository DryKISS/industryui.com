/**
 * Editor
 */

// React
import React, { useState } from 'react'

// Draft JS
import { Editor, EditorState } from 'draft-js'

export const DraftJs = () => {
  const [editor, setEditor] = useState(EditorState.createEmpty())

  return <Editor editorState={editor} onChange={setEditor} />
}
