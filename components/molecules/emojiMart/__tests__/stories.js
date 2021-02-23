/**
 * Components - Molecules -  EmojiMart
 */

// React
import React from 'react'

// UI
import { EmojiMart } from '../emojiMart'
import Readme from '../README.md'

export default {
  component: EmojiMart,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/EmojiMart'
}

export const main = () => <EmojiMart open />
