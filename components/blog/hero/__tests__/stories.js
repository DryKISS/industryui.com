/**
 * Blog - Hero
 */

// UI
import { BlogHero } from 'components'
import Readme from '../README.md'

// Data
import { Articles, Blog } from '../../__mocks__/articles'

export default {
  component: BlogHero,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Blog/Hero'
}

export const main = args => <BlogHero articles={Articles} config={Blog} {...args} />
