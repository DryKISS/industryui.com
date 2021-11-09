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
      <TabItem data={{ 'data-cy': 'tab1' }} label="Tab 1" icon="user">
        Tab 1 Content
      </TabItem>
      <TabItem disabled label="Disabled" icon={'coffee'}>
        Tab 2 Disabled
      </TabItem>
      <TabItem active label="Tab 3" icon="check">
        Tab 3
      </TabItem>
      <TabItem context="danger" label="Tab 4" icon="trash">
        Tab 4
      </TabItem>
    </BaseComponent>
  )
}

export const dynamicTab = (args) => {
  return (
    <BaseComponent
      {...args}
      rightTabIcon="times"
      defaultContentComponent={() => <div>Hello this is Default</div>}
    >
      <TabItem data={{ 'data-cy': 'tab1' }} label="Tab 1" icon="user" active>
        Tab 1 Content
      </TabItem>
      <TabItem data={{ 'data-cy': 'tab33' }} label="Tab 122" icon="user">
        Tab 333 Content
      </TabItem>
    </BaseComponent>
  )
}

export const verticalTab = (args) => {
  return (
    <BaseComponent {...args} isVertical={true} rightTabIcon="times">
      <TabItem data={{ 'data-cy': 'tab1' }} label="Tab 1" leftTabIcon="user" active>
        Tab 1 Content
      </TabItem>
      <TabItem data={{ 'data-cy': 'tab33' }} label="Tab 2" leftTabIcon="user">
        Tab 333 Content
      </TabItem>
      <TabItem data={{ 'data-cy': 'tab33' }} label="Tab 3" leftTabIcon="user">
        Tab 333 Content
      </TabItem>
      <TabItem data={{ 'data-cy': 'tab33' }} label="Tab 4" leftTabIcon="user">
        Tab 333 Content
      </TabItem>
      <TabItem data={{ 'data-cy': 'tab33' }} label="Tab 5" leftTabIcon="user">
        Tab 333 Content
      </TabItem>
    </BaseComponent>
  )
}

export const tabComponent = (args) => {
  return (
    <BaseComponent
      rightTabIcon="times"
      {...args}
      defaultContentComponent={() => <div>defaultContentComponent</div>}
    >
      <TabItem
        data={{ 'data-cy': 'tab1' }}
        label="Tab 1"
        renderTab={() => <div>My Tab 1</div>}
        leftTabIcon="user"
        active
      >
        Tab 1 Content
      </TabItem>
      <TabItem data={{ 'data-cy': 'tab33' }} label="Tab 2" leftTabIcon="user">
        Tab 333 Content
      </TabItem>
      <TabItem data={{ 'data-cy': 'tab33' }} label="Tab 3" leftTabIcon="user">
        Tab 333 Content
      </TabItem>
      <TabItem data={{ 'data-cy': 'tab33' }} label="Tab 4" leftTabIcon="user">
        Tab 333 Content
      </TabItem>
      <TabItem data={{ 'data-cy': 'tab33' }} label="Tab 5" leftTabIcon="user">
        Tab 333 Content
      </TabItem>
    </BaseComponent>
  )
}

export const myDesign = (args) => {
  return (
    <BaseComponent
      {...args}
      gap={2}
      context="borderColour"
      activeContext={'borderColour'}
      rightTabIcon="times"
      borders={{ top: 1, left: 1, right: 1, bottom: 1 }}
      activeBorders={{ top: 1, left: 1, right: 1, bottom: 2 }}
      defaultContentComponent={() => <div>sss</div>}
      handleChange={false}
    >
      <TabItem data={{ 'data-cy': 'tab1' }} label="Tab 1" leftTabIcon="user" active>
        Tab 1 Contentsssss
      </TabItem>
      <TabItem data={{ 'data-cy': 'tab33' }} label="Tab 122" leftTabIcon="user">
        Tab 333 Content
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
