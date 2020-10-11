/**
 * Blog - Category
 */

// UI
import { BlogCategory } from 'components'
import Readme from '../README.md'

// Data
import { Blog } from '../../__mocks__/articles'

export default {
  title: 'Blog/Category',
  component: BlogCategory,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const main = () => <BlogCategory config={Blog} to='development' />
export const author = () => <BlogCategory author config={Blog} to='development' />
