/**
 * Tile Stories
 */

// React
import React from 'react'

// Storybook
import { ContextControl } from '../../../../.storybook/decorators/context'
import { SizeControl } from '../../../../.storybook/decorators/size'

// UI
import Tile from '../tile'
import Column from '../../../atoms/grid/Column'
import Readme from '../README.md'

export default {
  args: {
    body: '25',
    title: 'Reactive Job',
    rounded: true,
    colourConfig: { 10: 'success', 20: 'warning', 25: 'danger' }
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
