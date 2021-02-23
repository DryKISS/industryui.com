/**
 * Card Stories
 */

// React
import React from 'react'

// Storybook
import { ContextControl } from '../../../../.storybook/decorators'

// UI
import { Card, Column } from '../../../'
import { THEME_CONTEXT } from '../../../theme/constants/context'
import Readme from '../README.md'

export default {
  args: {
    alt: 'Visla',
    body: 'Content',
    bordered: true,
    header: 'Header',
    headerContext: THEME_CONTEXT.INFO,
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
  return <Card {...props} />
}

export const main = (args) => <BaseComponent {...args} />
