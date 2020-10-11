/**
 * Blog - Hero
 */

// UI
import { BlogHero } from 'components'
import Readme from '../README.md'

// Data
import { Articles, Blog } from '../../__mocks__/articles'

export default {
  title: 'Blog/Hero',
  component: BlogHero,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const main = () => <BlogHero articles={Articles} config={Blog} />
