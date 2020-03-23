/**
 * CLose
 */

// React
import React from 'react'

// Storybook
import { action } from '@storybook/addon-actions'
import { Wrapper } from 'decorators'

// UI
import { Close } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Close',
  component: Close,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Close click={action('clicked')} />

export const customIcon = () => <Close click={action('clicked')} icon='trash' iconPrefix='fad' />

export const customContext = () => <Close click={action('clicked')} context='primary' />
