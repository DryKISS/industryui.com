/**
 * Card Stories
 */

// Storybook
import { ContextControl } from 'decorators'

// UI
import { Card, Column, CONTEXT } from 'components'
import Readme from '../README.md'

export default {
  args: {
    alt: 'Visla',
    body: 'Content',
    bordered: true,
    header: 'Header',
    headerContext: CONTEXT.INFO,
    footer: 'Footer',
    image: '/card/vizla.jpg',
    title: 'Title',
    titleNoWrap: false,
    showCta: false
  },
  argTypes: {
    headerContext: ContextControl()
  },
  title: 'Molecules/Card',
  component: Card,
  decorators: [story => <Column md={4}>{story()}</Column>],
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const BaseComponent = (props = {}) => {
  return <Card {...props} />
}

export const main = args => <BaseComponent {...args} />
