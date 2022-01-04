/**
 * Components - Messaging
 */

// React
import React from 'react'

// Draft JS
import Editor from '@draft-js-plugins/editor'
import createEmojiPlugin from '@draft-js-plugins/emoji'
import createMentionPlugin from 'draft-js-mention-plugin'
import createLinkifyPlugin from '@draft-js-plugins/linkify'
import createLinkPlugin from '@draft-js-plugins/anchor'
import createToolbarPlugin from '@draft-js-plugins/static-toolbar'
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton
} from '@draft-js-plugins/buttons'

import styled from 'styled-components'
// UI
import createHashtagPlugin from './hashtag/hashtagPlugin'
import LinkPluginComponent from './components/linkPluginComponent'
const staticToolbarPlugin = createToolbarPlugin()
const { Toolbar } = staticToolbarPlugin
export const linkifyPlugin = createLinkifyPlugin({
  target: '_blank',
  component: (props) => <LinkPluginComponent {...props} />
})
const linkPlugin = createLinkPlugin()
const { LinkButton } = linkPlugin
// Plugins configuration
export const mentionPlugin = createMentionPlugin()
export const hashtagPlugin = createHashtagPlugin()
export const emojiPlugin = createEmojiPlugin()
export const MentionSuggestions = mentionPlugin.MentionSuggestions
export const EmojiSuggestions = emojiPlugin.EmojiSuggestions
export const EmojiSelect = emojiPlugin.EmojiSelect
export const MessagingEditor = Editor
export const EditorToolbar = () => (
  <Toolbar>
    {(externalProps) => (
      <ToolbarWrapper>
        <BoldButton {...externalProps} />
        <ItalicButton {...externalProps} />
        <UnderlineButton {...externalProps} />
        <CodeButton {...externalProps} />
        <UnorderedListButton {...externalProps} />
        <OrderedListButton {...externalProps} />
        <BlockquoteButton {...externalProps} />
        <CodeBlockButton {...externalProps} />
        <LinkButton {...externalProps} />
      </ToolbarWrapper>
    )}
  </Toolbar>
)
const ToolbarWrapper = styled.div`
  display: flex;
`
export const messagingPlugins = [
  emojiPlugin,
  hashtagPlugin,
  mentionPlugin,
  linkifyPlugin,
  staticToolbarPlugin,
  linkPlugin
]
