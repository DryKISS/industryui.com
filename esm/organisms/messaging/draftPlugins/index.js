/**
 * Components - Messaging
 */
// React
import React from 'react'; // Draft JS

import Editor from '@draft-js-plugins/editor';
import createEmojiPlugin from '@draft-js-plugins/emoji';
import createMentionPlugin from '@draft-js-plugins/mention';
import createLinkifyPlugin from '@draft-js-plugins/linkify'; // UI

import { createHashtagPlugin } from './hashtag';
import { LinkPluginComponent } from '../../../';
export var linkifyPlugin = createLinkifyPlugin({
  target: '_blank',
  component: function component(props) {
    return /*#__PURE__*/React.createElement(LinkPluginComponent, props);
  }
}); // Plugins configuration

export var mentionPlugin = createMentionPlugin();
export var hashtagPlugin = createHashtagPlugin();
export var emojiPlugin = createEmojiPlugin();
export var MentionSuggestions = mentionPlugin.MentionSuggestions;
export var EmojiSuggestions = emojiPlugin.EmojiSuggestions;
export var EmojiSelect = emojiPlugin.EmojiSelect;
export var MessagingEditor = Editor;
export var messagingPlugins = [emojiPlugin, hashtagPlugin, mentionPlugin, linkifyPlugin];
//# sourceMappingURL=index.js.map