/**
 * Tabs
 */

// Storybook
import { action } from '@storybook/addon-actions'

// UI
import { Tabs } from 'components'
import Readme from '../README.md'

export default {
  args: {
    centerTabs: false,
    gap: 0,
    grabbable: true,
    grabWalkSpeed: 25,
    indicatorSize: 1,
    scrollToActiveTab: true
  },
  title: 'Molecules/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
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
    {Array(25)
      .fill('')
      .map((_, idx) => renderTab(idx))}
  </BaseComponent>
)

export const disabled = args => (
  <BaseComponent {...args}>
    {Array(2)
      .fill('')
      .map((_, idx) => renderTab(idx))}
    <div disabled label='Tab 3 Disabled'>
      Tab 3 Disabled
    </div>
  </BaseComponent>
)

export const active = args => (
  <BaseComponent {...args}>
    {renderTab(1)}
    <div active label='Tab 2'>
      Tab 2 Content
    </div>
    {renderTab(3)}
  </BaseComponent>
)

export const initialScrollToActiveTab = args => (
  <BaseComponent {...args}>
    {Array(25)
      .fill('')
      .map((_, idx) => renderTab(idx, 23))}
  </BaseComponent>
)
