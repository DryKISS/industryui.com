/**
 * Button
 */

// React
import React from 'react'

// Storybook
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { Context, Size, Wrapper } from 'decorators'

// UI
import { Button } from 'root'
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
    centre: boolean('Centre', true),
    content: text('Button text', 'Button text'),
    context: Context(),
    size: Size(),
    ...props
  }

  return <Button {...defaultProps} />
}

export const main = () => (
  <BaseComponent outline={boolean('Outline', false)} shadow={boolean('Shadow', true)} />
)

export const secondary = () => <BaseComponent outline={boolean('Outline', false)} />

export const outline = () => <BaseComponent outline={boolean('Outline', true)} />

export const large = () => <BaseComponent outline={boolean('Outline', false)} />
