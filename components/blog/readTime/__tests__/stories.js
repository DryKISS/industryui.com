/**
 * Blog - Read Time
 */

// UI
import { BlogReadTime } from 'components'
import Readme from '../README.md'

export default {
  title: 'Blog/Read Time',
  component: BlogReadTime,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <BlogReadTime time={2} />
