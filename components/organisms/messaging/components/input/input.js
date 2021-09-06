/**
 * Components - Messaging
 */

// React
import React, { useState, useRef } from 'react'

// Draft JS
import { EditorState } from 'draft-js'
import { defaultSuggestionsFilter } from 'draft-js-mention-plugin'

// Style
import styled from 'styled-components'

// UI
import MessageNames from '../../../../services/componentCommunication/messageNames'
import MessagingActions from '../../../../services/componentCommunication/messagingActions'
import MessagingSubscriber from '../../../../services/componentCommunication/messaging/subscriber'
import useComponentCommunication from '../../../../hooks/useComponentCommunication/useSubscription'
import { MentionSuggestions, MessagingEditor, messagingPlugins } from '../../draftPlugins/index'
import formStyle from '../../../../form/variables/formStyle'

const MessagingInput = ({ mentions, onChange }) => {
  const [suggestions, setSuggestions] = useState(mentions ?? [])

  // Draft-JS editor configuration
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const editor = useRef(null)

  // Check editor text for mentions
  const onSearchChange = ({ value }) => {
    setSuggestions(defaultSuggestionsFilter(value, mentions))
  }

  const onAddMention = (e) => {
    console.info(e)
  }

  // Focus on editor window
  const focusEditor = () => {
    editor.current.focus()
  }

  const handleChange = (e) => {
    onChange(e)
    setEditorState(e)
  }

  const onActionRecieved = (payload) => {
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
        placeholder="Type your message here..."
        ref={editor}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  [class*='mentionSuggestions'] {
    top: ${({ topMultiplier }) => '-' + topMultiplier * 35 + 'px'} !important;
  }
  ${(props) => formStyle(props)}
  border-color:${({ theme: { MESSAGING } }) => MESSAGING.inputBorderColour};
  font-size: ${({ theme: { MESSAGING } }) => MESSAGING.inputFontSize};
  max-height: ${({ theme: { MESSAGING } }) => MESSAGING.maxInputHeight};
  overflow-y: auto;
`

export default MessagingInput
