import createEmojiPlugin from 'draft-js-emoji-plugin'
import createHashtagPlugin from 'draft-js-hashtag-plugin'
import createMentionPlugin from 'draft-js-mention-plugin'
import Editor from 'draft-js-plugins-editor'

//  plugins configuration
const mentionPlugin = createMentionPlugin()
const hashtagPlugin = createHashtagPlugin()
const emojiPlugin = createEmojiPlugin()

export const MentionSuggestions = mentionPlugin.MentionSuggestions

export const EmojiSuggestions = emojiPlugin.EmojiSuggestions

export const EmojiSelect = emojiPlugin.EmojiSelect

export const MessagingEditor = Editor

export const messagingPlugins = [emojiPlugin, hashtagPlugin, mentionPlugin]
