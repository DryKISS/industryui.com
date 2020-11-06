import { useState, useRef } from 'react'

// UI
import styled from 'styled-components'

import { EditorState } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin'

// Draft-JS-Mentions plugin configuration
const mentionPlugin = createMentionPlugin()
const { MentionSuggestions } = mentionPlugin
const plugins = [mentionPlugin]

export const MessagingInput = ({ mentions, onChange }) => {
  const [suggestions, setSuggestions] = useState(mentions)

  // Draft-JS editor configuration
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const editor = useRef(null)

  // Check editor text for mentions
  const onSearchChange = ({ value }) => {
    setSuggestions(defaultSuggestionsFilter(value, mentions))
  }

  const onAddMention = e => {
    console.log(e)
  }

  // Focus on editor window
  const focusEditor = () => {
    editor.current.focus()
  }

  const handleChange = e => {
    onChange(e)
    setEditorState(e)
  }

  return (
    <Wrapper topMultiplier={suggestions.length} onClick={() => focusEditor()}>
      <MentionSuggestions
        onSearchChange={onSearchChange}
        suggestions={suggestions}
        onAddMention={onAddMention}
      />
      <Editor
        ref={editor}
        editorState={editorState}
        plugins={plugins}
        onChange={handleChange}
        placeholder='Type here...'
      />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100%;
  .draftJsMentionPlugin__mentionSuggestions__2DWjA {
    top: ${({ topMultiplier }) => '-' + topMultiplier * 35 + 'px'} !important;
  }
`
