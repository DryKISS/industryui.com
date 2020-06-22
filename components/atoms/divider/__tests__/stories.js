/**
 * Divider
 */

// React
import React from 'react'

// Storybook
import { withKnobs } from '@storybook/addon-knobs'
import { Context, Size, Wrapper } from 'decorators'

// UI
import { Divider } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Divider',
  component: Divider,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    context: Context(),
    size: Size(),
    ...props
  }

  return <Divider {...defaultProps} />
}

export const main = () => <BaseComponent />
export const content = () => <BaseComponent content='Text' />
export const medium = () => <BaseComponent size='md' />
export const large = () => <BaseComponent size='lg' />
