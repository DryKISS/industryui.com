/**
 * Figure
 */

// React
import React from 'react'

// Storybook
import ContextControl from '../../../../.storybook/decorators/controls/context'

// UI
import Figure from '../figure'
import Readme from '../README.md'
import THEME_CONTEXT from '../../../constants/context'

export default {
  args: {
    context: THEME_CONTEXT.WHITE,
    bgContext: THEME_CONTEXT.DARK
  },
  argTypes: {
    context: ContextControl(),
    bgContext: ContextControl()
  },
  component: Figure,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Figure'
}

export const main = (args) => (
  <Figure>
    <Figure.Image src="/placeholder.svg" itemprop="contentUrl" />
    <Figure.Caption {...args}>
      DryKISS - Don't repeat yourself, Keep It Simple Stupid
    </Figure.Caption>
  </Figure>
)
