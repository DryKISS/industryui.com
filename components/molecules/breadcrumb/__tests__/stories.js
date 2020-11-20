/**
 * Breadcrumb
 */

import { ControlTypes } from 'decorators'

// UI
import { Breadcrumb, Icon, SIZE } from 'components'
import Readme from '../README.md'

export default {
  args: {
    size: SIZE.LG
  },
  argTypes: {
    size: {
      control: { options: Object.values(SIZE), type: ControlTypes.Select }
    },
    separator: { control: null }
  },
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Breadcrumb'
}
const breadcrumbs = [
  {
    to: '/',
    title: 'Home'
  },
  {
    icon: <Icon icon='smile' prefix='fas' />,
    to: {
      as: '/blog/asdasdasd',
      href: {
        pathname: '/blog/category',
        query: {
          category: 'asdasdsadasd'
        }
      }
    },
    title: 'DryKISS'
  },
  {
    icon: <Icon icon='images' prefix='fas' />,
    to: '/rrrr',
    title: 'Current Page'
  }
]
const separator = '\\'
// const customSeparator = <Icon icon='images' prefix='fas' />

export const main = args => <Breadcrumb breadcrumbs={breadcrumbs} separator={separator} {...args} />
