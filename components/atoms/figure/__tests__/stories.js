/**
 * Figure
 */

// Storybook
import { ContextControl } from 'decorators'

// UI
import { CONTEXT, Figure } from 'components'
import Readme from '../README.md'

export default {
  args: {
    context: CONTEXT.WHITE,
    bgContext: CONTEXT.DARK
  },
  argTypes: {
    context: ContextControl(),
    bgContext: ContextControl()
  },
  title: 'Atoms/Figure',
  component: Figure,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const main = args => (
  <Figure>
    <Figure.Image src='/placeholder.svg' itemprop='contentUrl' />
    <Figure.Caption {...args}>
      DryKISS - Don't repeat yourself, Keep It Simple Stupid
    </Figure.Caption>
  </Figure>
)
