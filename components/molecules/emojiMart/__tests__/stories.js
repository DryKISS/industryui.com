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
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <EmojiMart open />
