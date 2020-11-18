/**
 * Blog - Listing
 */

// UI
import { BlogListing } from 'components'
import Readme from '../README.md'

// Data
import { Articles, Blog } from '../../__mocks__/articles'

export default {
  title: 'Blog/Listing',
  component: BlogListing,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const main = () => <BlogListing articles={Articles} config={Blog} />

export const category = () => (
  <BlogListing articles={Articles} category='development' config={Blog} />
)

export const tag = () => <BlogListing articles={Articles} config={Blog} tag='jam' />
