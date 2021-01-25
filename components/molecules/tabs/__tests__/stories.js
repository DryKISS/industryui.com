/**
 * Components - Molecules - Tabs - Story
 */

// Storybook
import { action } from '@storybook/addon-actions'

// UI
import { Tabs } from 'components'
import Readme from '../README.md'

export default {
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Tabs'
}

const renderTab = (index, activeTab) => (
  <div active={index === activeTab} key={index} label={`Tab ${index + 1}`}>
    {`Tab ${index + 1} Content`}
  </div>
)

const BaseComponent = ({ children, ...props }) => (
  <Tabs onChange={action('change')} {...props}>
    {children}
  </Tabs>
)

export const main = args => (
  <BaseComponent {...args}>
    <div data={{ 'data-cy': 'tab1' }} label='Tab 1'>
      Tab 1 Content
    </div>
    <div disabled label='Disabled'>
      Tab 2 Disabled
    </div>
    <div active label='Tab 3'>
      Tab 3
    </div>
    <div label='Tab 4'>Tab 4</div>
  </BaseComponent>
)

export const initialScrollToActiveTab = args => (
  <BaseComponent {...args}>
    {Array(25)
      .fill('')
      .map((_, idx) => renderTab(idx, 23))}
  </BaseComponent>
)
