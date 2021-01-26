/**
 * Components - Details - Stories
 */

// UI
import { DetailsText, Link } from 'components'
import Readme from '../README.md'

export default {
  args: {
    content: 'Content',
    text: 'Text'
  },
  component: DetailsText,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/DetailsText'
}

export const main = args => {
  return (
    <>
      <DetailsText {...args} />

      <DetailsText
        {...args}
        text={
          <Link to={`/dashboard/issues/view?id=${1001}`} passHref>
            {1001}
          </Link>
        }
      />
    </>
  )
}
