/**
 * emojiMart
 */

// React
import React from 'react'

// UI
import { EmojiMart } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/EmojiMart',
  component: EmojiMart,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <EmojiMart />
