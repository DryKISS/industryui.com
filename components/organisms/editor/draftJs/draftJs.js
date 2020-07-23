/**
 * Editor
 */

// React
import React, { useState } from 'react'

// Draft JS
import { Editor, EditorState, RichUtils } from 'draft-js'

export const DraftJs = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const toggleInlineStyle = event => {
    event.preventDefault()
    const style = event.currentTarget.getAttribute('data-style')
    console.log('The style ', style)
    setEditorState(RichUtils.toggleInlineStyle(editorState, style))
  }

  return (
    <>
      <input type='button' value='Bold' data-style='BOLD' onMouseDown={toggleInlineStyle} />
      <input type='button' value='Italic' data-style='ITALIC' onMouseDown={toggleInlineStyle} />
      <Editor editorState={editorState} onChange={setEditorState} />
    </>
  )
}
