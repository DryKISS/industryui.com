/**
 * Button
 */

// React
import React from 'react'

// Storybook
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { Context, Size, Wrapper } from 'decorators'

// UI
import { Button } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Button',
  decorators: [Wrapper, withKnobs],
  component: Button,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    block: boolean('Block', false),
    centre: boolean('Centre', true),
    content: text('Button text', 'Button'),
    context: Context(),
    dashed: boolean('Dashed', false),
    disabled: boolean('Disabled', false),
    endIcon: text('End icon', 'arrow-left'),
    outline: boolean('Outline', false),
    shadow: boolean('Shadow', false),
    size: Size('', 'md'),
    startIcon: text('Start icon', 'arrow-right'),
    ...props
  }

  return <Button {...defaultProps} />
}

export const main = () => <BaseComponent />
