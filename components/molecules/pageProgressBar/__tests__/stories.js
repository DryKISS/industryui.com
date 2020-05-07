/**
 * Molecules - Page Progress Bar
 */

// React
import React from 'react'

// Storybook
import { withKnobs } from '@storybook/addon-knobs'
import { Context, Wrapper } from 'decorators'

// UI
import { PageProgressBar } from 'components'

export default {
  title: 'Molecules/PageProgressBar',
  component: PageProgressBar,
  decorators: [Wrapper, withKnobs]
}

const BaseComponent = () => {
  const contextKnob = Context()

  return <PageProgressBar context={contextKnob} isAnimating instanceKey={new Date().getTime()} />
}

export const main = () => <BaseComponent />
