/**
 * Molecules - Page Progress Bar
 */

// React
import React from 'react'

// Storybook
import { Context, Wrapper } from 'decorators'

// UI
import { PageProgressBar } from 'components'

export default {
  title: 'Molecules/PageProgressBar',
  component: PageProgressBar,
  decorators: [Wrapper]
}

const BaseComponent = () => {
  const contextKnob = Context()

  return <PageProgressBar context={contextKnob} isAnimating instanceKey={new Date().getTime()} />
}

export const main = () => <BaseComponent />
