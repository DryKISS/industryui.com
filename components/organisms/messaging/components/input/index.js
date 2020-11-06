import { useState, useRef } from 'react'

// UI
import styled from 'styled-components'

import {
  EmojiSuggestions,
  EmojiSelect,
  MentionSuggestions,
  MessagingEditor,
  messagingPlugins
} from 'components'

import { EditorState } from 'draft-js'
import { defaultSuggestionsFilter } from 'draft-js-mention-plugin'

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
      <EmojiSuggestions />
      <EmojiSelect />
      <MessagingEditor
        ref={editor}
        editorState={editorState}
        plugins={messagingPlugins}
        onChange={handleChange}
        placeholder='Type here...'
      />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .draftJsMentionPlugin__mentionSuggestions__2DWjA {
    top: ${({ topMultiplier }) => '-' + topMultiplier * 35 + 'px'} !important;
  }
  .draftJsEmojiPlugin__emojiSelectPopover__1J1s0 {
    top: -400px;
  }
  .draftJsEmojiPlugin__emojiSuggestions__2ffcV {
    top: -350px !important;
  }
  background-color: ${({ theme }) => theme.COLOUR.light};
  border: ${({ theme }) => theme.COLOUR.light};
  border-radius: 1rem;
  line-height: 1.5;
  margin: 0.5rem 0.5rem 0 0;
  padding: 0.5rem;
  width: 100%;
`
