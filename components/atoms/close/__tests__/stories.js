/**
 * CLose
 */

// React
import React from 'react'

import { action } from '@storybook/addon-actions'

// UI
import { Close } from '../'
import Readme from '../README.md'

const CenterDecorator = storyFn => (
  <div
    style={{
      float: 'left',
      margin: '1rem 1rem 1rem .5rem'
    }}
  >
    {storyFn()}
  </div>
)

export default {
  title: 'Atoms/Close',
  component: Close,
  decorators: [CenterDecorator],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Close click={action('clicked')} />

export const customIcon = () => <Close click={action('clicked')} icon='trash' iconPrefix='fad' />

export const customContext = () => <Close click={action('clicked')} context='primary' />
