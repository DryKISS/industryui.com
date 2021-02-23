// React
import React, { useRef, useState } from 'react'

// Draft JS
import { Editor, EditorState, RichUtils } from 'draft-js'

// Config
import {
  BlockStyleControls,
  InlineStyleControls,
  getBlockStyle,
  styleMap
} from './config'

export const IUIRich = () => {
  const [editorState, seteditorState] = useState(EditorState.createEmpty())
  const ref = useRef(null)

  const focus = () => {
    ref.current.focus()
  }

  const handleChange = (EditorState) => seteditorState(EditorState)

  const onKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      handleChange(newState)
      return true
    }
    return false
  }

  const handleTab = (e) => {
    const maxDepth = 4
    handleChange(RichUtils.onTab(e, editorState, maxDepth))
  }

  const toggleBlockType = (blockType) => {
    handleChange(RichUtils.toggleBlockType(editorState, blockType))
  }

  const toggleInlineStyle = (inlineStyle) => {
    handleChange(RichUtils.toggleInlineStyle(editorState, inlineStyle))
  }

  return (
    <div onClick={focus}>
      <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType}
      />
      <InlineStyleControls
        editorState={editorState}
        onToggle={toggleInlineStyle}
      />
      <Editor
        blockStyleFn={getBlockStyle}
        customStyleMap={styleMap}
        editorState={editorState}
        handleKeyCommand={onKeyCommand}
        onChange={handleChange}
        onTab={handleTab}
        placeholder="write here..."
        ref={ref}
        spellCheck
      />
    </div>
  )
}
