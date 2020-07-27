/**
 * Editor
 */

// React
import React, { useState, useEffect } from 'react'

// React Hook Form
// import { Controller } from 'react-hook-form'

// Draft JS
import { Editor, EditorState, RichUtils } from 'draft-js'
import { BlockType } from './constants'

// TODO: Check how we name our services/DataType

export const DraftJs = ({ control, defaultValue, name, ...props }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  console.log('the control ', control)

  // defaultValue ? EditorState.createWithContent(defaultValue) : EditorState.createEmpty()
  useEffect(() => {
    // value = 'mono'
    // console.log('editor state ', register, editorState.getCurrentContent().getPlainText('\u0001'))
  }, [editorState])
  const toggleInlineStyle = event => {
    event.preventDefault()
    const style = event.currentTarget.getAttribute('data-style')
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
  const handleOnChange = state => {
    console.log('state', state.getCurrentContent().getPlainText('\u0001'))
    setEditorState(state)
    return state.getCurrentContent().getPlainText('\u0001')
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
        blockStyleFn={myBlockStyleFn}
        handleKeyCommand={handleKeyCommand}
        onChange={value => handleOnChange(value)}
      />
    </>
  )
}

function myBlockStyleFn (contentBlock) {
  const type = contentBlock.getType()
  if (type === BlockType.BLOCKQUOTE) {
    // TODO: return the right css according to be applied into the whole block
    return undefined
  }
}
