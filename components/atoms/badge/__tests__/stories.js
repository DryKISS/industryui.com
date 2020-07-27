/**
 * Badge
 */

// React
import React from 'react'

// Storybook
import { text, withKnobs } from '@storybook/addon-knobs'
import { Context, Size, Wrapper } from 'decorators'

// UI
import { Badge } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Badge',
  component: Badge,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    content: text('Content', 'Badge'),
    context: Context(),
    size: Size(),
    ...props
  }

  return <Badge {...defaultProps} />
}

export const main = () => <BaseComponent />

export const link = () => <BaseComponent content='Link' to='/example' />

export const icon = () => <BaseComponent content='User' icon='user' />
