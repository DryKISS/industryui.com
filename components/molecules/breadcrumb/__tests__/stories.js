/**
 * Breadcrumb
 */

// React
import React from 'react'

// Storybook
import ControlTypes from '../../../../.storybook/decorators/controls/controlTypes'

// UI
import Breadcrumb from '../breadcrumb'
import Icon from '../../../atoms/icon/icon/icon'
import THEME_SIZE from '../../../constants/size'
import Readme from '../README.md'

export default {
  args: {
    size: THEME_SIZE.LG
  },
  argTypes: {
    size: {
      control: { options: Object.values(THEME_SIZE), type: ControlTypes.Select }
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
    icon: <Icon icon="smile" />,
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
    icon: <Icon icon="images" />,
    to: '/rrrr',
    title: 'Current Page'
  }
]

const separator = '\\'

export const main = (args) => (
  <Breadcrumb breadcrumbs={breadcrumbs} separator={separator} {...args} />
)
