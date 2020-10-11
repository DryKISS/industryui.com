/**
 * Blog - Details
 */

// UI
import { BlogDetails } from 'components'
import Readme from '../README.md'

// Data
import { Articles, Blog, Facebook } from '../../__mocks__/articles'

export default {
  title: 'Blog/Details',
  component: BlogDetails,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const main = () => <BlogDetails article={Articles[0]} config={Blog} facebook={Facebook} />
