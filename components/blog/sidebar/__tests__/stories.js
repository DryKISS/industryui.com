/**
 * Blog - Sidebar
 */

// UI
import { BlogSidebar } from 'components'
import Readme from '../README.md'

// Data
import { Articles, Blog, Facebook } from '../../__mocks__/articles'

export default {
  title: 'Blog/Sidebar',
  component: BlogSidebar,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <BlogSidebar articles={Articles} config={Blog} facebook={Facebook} findFood />
)
