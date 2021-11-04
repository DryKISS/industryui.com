/**
 * Components - Molecules - Tabs - Story
 */

// React
import React from 'react'

// UI
import Space from '../../../atoms/space/space'
import { Tabs, TabItem } from '../tabs'
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

const BaseComponent = ({ children, ...props }) => <Tabs {...props}>{children}</Tabs>

export const main = (args) => {
  return (
    <BaseComponent {...args}>
      <TabItem data={{ 'data-cy': 'tab1' }} label="Tab 1">
        Tab 1 Content
      </TabItem>
      <TabItem disabled label="Disabled">
        Tab 2 Disabled
      </TabItem>
      <TabItem active label="Tab 3">
        Tab 3
      </TabItem>
      <TabItem context="danger" label="Tab 4">
        Tab 4
      </TabItem>
    </BaseComponent>
  )
}

export const single = (args) => (
  <BaseComponent {...args}>
    <TabItem data={{ 'data-cy': 'tab1' }} label="Tab 1">
      Content first
    </TabItem>
  </BaseComponent>
)

export const change = (args) => {
  const renderTabContent = (tab) => {
    return (
      <TabItem>
        HERE
        <Space />
        THERE
        {tab}
      </TabItem>
    )
  }

  return (
    <BaseComponent {...args} handleChange={false}>
      <TabItem active label="Tab 1">
        Tab 1 Content
      </TabItem>
      <TabItem label="Disabled">Tab 2 Disabled</TabItem>
      <TabItem label="Tab 3">{renderTabContent('customerVat')}</TabItem>
      <TabItem label="Tab 4">Tab 4</TabItem>
    </BaseComponent>
  )
}

export const initialScrollToActiveTab = (args) => (
  <BaseComponent {...args}>
    {Array(25)
      .fill('')
      .map((_, idx) => renderTab(idx, 23))}
  </BaseComponent>
)
