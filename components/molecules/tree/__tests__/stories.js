/**
 * Components - Molecules - Tree - Story
 */

// React
import React from 'react'

// Storybook
import ContextControl from '../../../../.storybook/decorators/controls/context'

// UI
import Readme from '../README.md'
import Tree from '../tree'

// Data
import { treeData } from '../__mocks__/default'

export default {
  args: {
    data: treeData,
    onClick: (node) => console.log(JSON.stringify(node))
  },
  argTypes: {
    context: ContextControl()
  },
  component: Tree,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Tree'
}

export const Main = (args) => {
  return <Tree {...args} />
}
