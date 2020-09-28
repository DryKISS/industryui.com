/**
 * Blog - Card
 */

// UI
import { BlogCard } from 'components'
import Readme from '../README.md'

// Data
import { Articles, Blog } from '../../__mocks__/articles'

export default {
  title: 'Blog/Card',
  component: BlogCard,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <BlogCard article={Articles[0]} config={Blog} />
