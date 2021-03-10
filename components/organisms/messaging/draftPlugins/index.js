/**
 * Components - Messaging
 */

// React
import React from 'react'

// Draft JS
import Editor from '@draft-js-plugins/editor'
import createEmojiPlugin from '@draft-js-plugins/emoji'
import createMentionPlugin from '@draft-js-plugins/mention'
import createLinkifyPlugin from '@draft-js-plugins/linkify'

// UI
import { createHashtagPlugin } from './hashtag'
import { LinkPluginComponent } from '../../../'

export const linkifyPlugin = createLinkifyPlugin({
  target: '_blank',
  component: (props) => <LinkPluginComponent {...props} />,
})

// Plugins configuration
export const mentionPlugin = createMentionPlugin()
export const hashtagPlugin = createHashtagPlugin()
export const emojiPlugin = createEmojiPlugin()
export const MentionSuggestions = mentionPlugin.MentionSuggestions
export const EmojiSuggestions = emojiPlugin.EmojiSuggestions
export const EmojiSelect = emojiPlugin.EmojiSelect
export const MessagingEditor = Editor
export const messagingPlugins = [emojiPlugin, hashtagPlugin, mentionPlugin, linkifyPlugin]
