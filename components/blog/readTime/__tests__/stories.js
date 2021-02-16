/**
 * Blog - Read Time
 */

// UI
import { BlogReadTime } from '../../../'
import Readme from '../README.md'

export default {
  component: BlogReadTime,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Blog/Read Time'
}

export const main = args => <BlogReadTime time={2} {...args} />
