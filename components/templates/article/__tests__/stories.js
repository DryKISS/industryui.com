/**
 * Article
 */

// Storybook
import { array, text } from '@storybook/addon-knobs'

// UI
import { Article } from 'components'
import Readme from '../README.md'

export default {
  component: Article,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Templates/Article'
}

export const main = () => (
  <Article
    article={{
      author: text('Author', 'Jonh Smith'),
      category: text('Category', 'Dog letters'),
      data:
        'This is <b>formatted</b> article text. <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      heading: text('Heading', 'Dogs for everyone'),
      image: '',
      tags: array('Tags', ['dogs', 'faq'])
    }}
    config={{}}
    facebook={{}}
  />
)
