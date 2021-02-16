/**
 * Blog - Details
 */

// UI
import { BlogDetails } from '../details'
import Readme from '../README.md'

// Data
import { Articles, Blog, Facebook } from '../../__mocks__/articles'

export default {
  component: BlogDetails,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Blog/Details'
}

export const main = args => (
  <BlogDetails article={Articles[0]} config={Blog} facebook={Facebook} {...args} />
)
