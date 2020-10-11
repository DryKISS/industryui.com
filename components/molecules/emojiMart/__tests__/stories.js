/**
 * EmojiMart
 */

// UI
import { EmojiMart } from 'components'
import Readme from '../README.md'

export default {
  title: 'Molecules/EmojiMart',
  component: EmojiMart,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const main = () => <EmojiMart open />
