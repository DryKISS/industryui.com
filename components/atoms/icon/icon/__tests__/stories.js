/**
 * Icon
 */

// React
import React from 'react'

// Storybook
import { withKnobs } from '@storybook/addon-knobs'
import { Context, Wrapper } from 'decorators'

// UI
import { Icon } from 'root'
import Readme from '../README.md'

export default {
  title: 'Atoms/Icon',
  component: Icon,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Icon context={Context()} icon='times-circle' />
