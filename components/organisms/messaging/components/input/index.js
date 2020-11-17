import { useState, useRef } from 'react'

// UI
import styled from 'styled-components'

import {
  EmojiSuggestions,
  EmojiSelect,
  MentionSuggestions,
  MessageNames,
  MessagingEditor,
  messagingPlugins,
  MessagingSubscriber,
  useComponentCommunication
} from 'components'

import { EditorState } from 'draft-js'
import { defaultSuggestionsFilter } from 'draft-js-mention-plugin'

export const MessagingInput = ({ mentions, onChange }) => {
  const [suggestions, setSuggestions] = useState(mentions ?? [])

  // Draft-JS editor configuration
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const editor = useRef(null)

  // Check editor text for mentions
  const onSearchChange = ({ value }) => {
    console.log(value, mentions)
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

  useComponentCommunication({
    messageName: MessageNames.Messaging.CLEAR_INPUT,
    onRecieve: () => {
      setEditorState(EditorState.createEmpty())
    },
    subscriber: MessagingSubscriber
  })

  return (
    <Wrapper onClick={() => focusEditor()} topMultiplier={suggestions?.length ?? 0}>
      {mentions && (
        <MentionSuggestions
          onAddMention={onAddMention}
          onSearchChange={onSearchChange}
          suggestions={suggestions}
        />
      )}
      <EmojiSuggestions />
      <EmojiSelect />
      <MessagingEditor
        editorState={editorState}
        onChange={handleChange}
        plugins={messagingPlugins}
        placeholder='Type here...'
        ref={editor}
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
