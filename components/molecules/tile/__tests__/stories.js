/**
 * Tile Stories
 */

// React
import React from 'react'

// Storybook
import { ContextControl } from '../../../../.storybook/decorators/context'
import { SizeControl } from '../../../../.storybook/decorators/size'

// UI
import Column from '../../../atoms/grid/Column'
import Readme from '../README.md'
import Tile from '../tile'

export default {
  args: {
    body: '10',
    colourConfig: { 10: 'success', 20: 'warning', 25: 'danger' },
    loading: false,
    rounded: true,
    title: 'Reactive Job'
  },
  argTypes: {
    context: ContextControl(),
    size: SizeControl()
  },
  title: 'Molecules/Tile',
  component: Tile,
  decorators: [(story) => <Column md={4}>{story()}</Column>],
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const BaseComponent = (props = {}) => {
  return <Tile {...props} />
}

export const main = (args) => <BaseComponent {...args} />
