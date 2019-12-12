/**
 * Email Change
 */

// React
import React from 'react'

// Storybook
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { EmailChange } from '../'
import Readme from '../README.md'

export default {
  title: 'Organisms/Email Change',
  component: EmailChange,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    showPlaceholder: boolean('Placeholder', true),
    ...props
  }

  return <EmailChange {...defaultProps} />
}

export const main = () => <BaseComponent />
