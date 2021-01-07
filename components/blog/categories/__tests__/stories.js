/**
 * Blog - Categories
 */

// UI
import { BlogCategories } from 'components'
import Readme from '../README.md'

// Data
import { Articles, Blog } from '../../__mocks__/articles'

export default {
  component: BlogCategories,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Blog/Categories'
}

export const main = args => <BlogCategories articles={Articles} config={Blog} {...args} />
