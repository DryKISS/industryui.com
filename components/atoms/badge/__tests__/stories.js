/**
 * Badge
 */

// React
import React from 'react'

// Storybook
import { withKnobs } from '@storybook/addon-knobs'
import { Context, Wrapper } from 'decorators'

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

export const main = () => <Badge content='Ian Warner' context={Context()} />
export const link = () => <Badge content='Link' context={Context()} to='/example' />
export const icon = () => <Badge content='User' context={Context()} icon='user' />
