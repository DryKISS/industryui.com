/**
 * Card Stories
 */

// UI
import { Card, Column } from 'components'
import Readme from '../README.md'

export default {
  args: {
    alt: 'Visla',
    body: 'Content',
    bordered: true,
    footer: 'Footer',
    image: '/card/vizla.jpg',
    title: 'Title',
    titleNoWrap: false,
    showCta: false
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
