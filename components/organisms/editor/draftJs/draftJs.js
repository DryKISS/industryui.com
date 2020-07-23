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
    const style = event.currentTarget.getAttribute('value')
    console.log('The style ', style)
    setEditorState(RichUtils.toggleInlineStyle(editorState, style))
  }

  const handleKeyCommand = (command, editorState) => {
    const newEditorState = RichUtils.handleKeyCommand(editorState, command)
    if (newEditorState) {
      setEditorState(newEditorState)
      return 'handled'
    }
    return 'not-handled'
  }
  // TODO: Do the inputList dynamic creating a map with the Key-Value to generate the needed
  return (
    <>
      <input type='button' value='B' data-style='BOLD' onMouseDown={toggleInlineStyle} />
      <input type='button' value='I' data-style='ITALIC' onMouseDown={toggleInlineStyle} />
      <input type='button' value='S' data-style='STRIKETHROUGH' onMouseDown={toggleInlineStyle} />
      <input type='button' value='U' data-style='UNDERLINE' onMouseDown={toggleInlineStyle} />

      <Editor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={setEditorState}
      />
    </>
  )
}
