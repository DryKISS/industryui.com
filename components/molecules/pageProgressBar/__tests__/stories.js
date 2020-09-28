/**
 * Molecules - Page Progress Bar
 */

// Storybook
import { Context } from 'decorators'

// UI
import { PageProgressBar } from 'components'

export default {
  title: 'Molecules/PageProgressBar',
  component: PageProgressBar
}

const BaseComponent = () => {
  const contextKnob = Context()

  return <PageProgressBar context={contextKnob} isAnimating instanceKey={new Date().getTime()} />
}

export const main = () => <BaseComponent />
