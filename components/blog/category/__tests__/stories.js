/**
 * Blog - Category
 */

// UI
import { BlogCategory } from 'components'
import Readme from '../README.md'

// Data
import { Blog } from '../../__mocks__/articles'

export default {
  component: BlogCategory,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Blog/Category'
}

export const main = args => (
  <BlogCategory config={Blog} link={{ prefetch: false, to: 'development' }} {...args} />
)
export const author = args => (
  <BlogCategory author config={Blog} link={{ prefetch: false, to: 'development' }} {...args} />
)
