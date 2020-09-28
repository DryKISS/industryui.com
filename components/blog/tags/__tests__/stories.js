/**
 * Blog - Tags
 */

// UI
import { BlogTags } from 'components'
import Readme from '../README.md'

// Data
import { Articles } from '../../__mocks__/articles'

export default {
  title: 'Blog/Tags',
  component: BlogTags,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <BlogTags tags={Articles[0].tags} />
