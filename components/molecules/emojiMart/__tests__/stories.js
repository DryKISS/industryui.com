/**
 * EmojiMart
 */

// Storybook
import { Wrapper } from 'decorators'

// UI
import { EmojiMart } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/EmojiMart',
  component: EmojiMart,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <EmojiMart open />
