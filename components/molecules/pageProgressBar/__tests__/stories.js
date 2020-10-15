/**
 * Molecules - Page Progress Bar
 */

// Storybook
import { ContextControl } from 'decorators'

// UI
import { PageProgressBar } from 'components'

export default {
  args: { context: 'primary' },
  argTypes: {
    size: ContextControl()
  },
  title: 'Molecules/PageProgressBar',
  component: PageProgressBar
}

const BaseComponent = args => {
  return <PageProgressBar {...args} isAnimating instanceKey={new Date().getTime()} />
}

export const main = args => <BaseComponent {...args} />
