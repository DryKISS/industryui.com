/**
 * Molecules - Page Progress Bar
 */

// React
import React from 'react'

// Storybook
import { ContextControl } from '../../../../.storybook/decorators'

// UI
import { PageProgressBar } from '../../../'

export default {
  args: { context: 'primary' },
  argTypes: {
    size: ContextControl(),
  },
  title: 'Molecules/PageProgressBar',
  component: PageProgressBar,
}

const BaseComponent = (args) => {
  return <PageProgressBar {...args} isAnimating instanceKey={new Date().getTime()} />
}

export const main = (args) => <BaseComponent {...args} />
