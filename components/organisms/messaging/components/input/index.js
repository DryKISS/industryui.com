import { useState, useRef } from 'react'

// UI
import styled from 'styled-components'

import {
  COMMON_INPUT_STYLES,
  MentionSuggestions,
  MessageNames,
  MessagingActions,
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

  const onActionRecieved = payload => {
    switch (payload.action) {
      case MessagingActions.CLEAR_INPUT:
        setEditorState(EditorState.createEmpty())
        break

      default:
        break
    }
  }

  useComponentCommunication({
    messageName: MessageNames.Messaging.MESSAGING_ACTION,
    onRecieve: onActionRecieved,
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
  [class*='mentionSuggestions'] {
    top: ${({ topMultiplier }) => '-' + topMultiplier * 35 + 'px'} !important;
  }
  ${props => COMMON_INPUT_STYLES(props)}
font-size:${({ theme: { MESSAGING } }) => MESSAGING.INPUT_FONT_SIZE};
  width: calc(100% - 8rem);
  max-height: ${({ theme: { MESSAGING } }) => MESSAGING.MAX_INPUT_HEIGHT};
  overflow-y: auto;
`
