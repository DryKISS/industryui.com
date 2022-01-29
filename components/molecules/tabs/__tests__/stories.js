/**
 * Components - Molecules - Tabs - Story
 */

// React
import React from 'react'

// UI
import Space from '../../../atoms/space/space'
import { Tabs, TabItem } from '../tabs'
import Icon from '../../../atoms/icon/icon/icon'
import Text from '../../../atoms/text/text'
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
  <TabItem
    borders={{ top: 2, left: 2, bottom: 2, right: 2 }}
    active={index === activeTab}
    key={index}
    label={`Tab ${index + 1}`}
  >
    {`Tab ${index + 1} Content`}
  </TabItem>
)

const BaseComponent = ({ children, ...props }) => <Tabs {...props}>{children}</Tabs>

export const main = (args) => {
  return (
    <BaseComponent {...args}>
      <TabItem data={{ 'data-cy': 'tab1' }} label="Tab 1" leftTabIcon="user">
        Tab 1 Content
      </TabItem>
      <TabItem disabled label="Disabled" leftTabIcon={'coffee'}>
        Tab 2 Disabled
      </TabItem>
      <TabItem active label="Tab 3" leftTabIcon="check">
        Tab 3
      </TabItem>
      <TabItem context="danger" label="Tab 4" leftTabIcon="trash">
        Tab 4
      </TabItem>
    </BaseComponent>
  )
}

export const tabSize = (args) => {
  return (
    <BaseComponent {...args} size="md">
      <TabItem data={{ 'data-cy': 'tab1' }} label="Tab 1" leftTabIcon="user">
        Tab 1 Content
      </TabItem>
      <TabItem disabled label="Disabled" leftTabIcon={'coffee'}>
        Tab 2 Disabled
      </TabItem>
      <TabItem active label="Tab 3" leftTabIcon="check">
        Tab 3
      </TabItem>
      <TabItem context="danger" label="Tab 4" leftTabIcon="trash">
        Tab 4
      </TabItem>
    </BaseComponent>
  )
}

export const dynamicTab = (args) => {
  return (
    <BaseComponent
      {...args}
      size="lg"
      rightTabIcon="times-circle"
      defaultContentComponent={() => <div>Hello this is Default</div>}
    >
      <TabItem active label="Tab 1" leftTabIcon="check" active={true}>
        <div> Some Component Content 1</div>
      </TabItem>
      <TabItem active label="Tab 2" leftTabIcon="check">
        <div> Some Component Content 2</div>
      </TabItem>
    </BaseComponent>
  )
}

export const verticalTab = (args) => {
  return (
    <BaseComponent
      {...args}
      isVertical={true}
      rightTabIcon="times"
      borders={{ left: 1, right: 1, bottom: 1, top: 1 }}
    >
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

export const renderTabComponent = (args) => {
  return (
    <BaseComponent
      rightTabIcon="times-circle"
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
        <div>Hello</div>
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

export const customBorder = (args) => {
  return (
    <BaseComponent
      {...args}
      gap={2}
      activeBorderContext="warning"
      activeBackgroundContext="info"
      backgroundContext="primary"
      borderContext="warning"
      rightTabIcon="times-circle"
      borders={{ top: 2, left: 2, right: 1, bottom: 4 }}
      activeBorders={{ top: 4, left: 1, right: 1, bottom: 2 }}
      defaultContentComponent={() => <div>sss</div>}
      handleChange={false}
    >
      <TabItem data={{ 'data-cy': 'tab1' }} label="Tab 1" leftTabIcon="user" active>
        Tab 1 Contentsssss
      </TabItem>
      <TabItem data={{ 'data-cy': 'tab33' }} label="Tab 122" leftTabIcon="user">
        Tab 333 Content
      </TabItem>
      <TabItem context="danger" label="Tab 4">
        <Icon icon="user" />
        <Text>Tab 4</Text>
      </TabItem>
    </BaseComponent>
  )
}
export const single = (args) => (
  <BaseComponent {...args}>
    <TabItem data={{ 'data-cy': 'tab1' }} label="Tab 1">
      <div>Hello</div>
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
  <BaseComponent {...args} size="sm">
    {Array(100)
      .fill('')
      .map((_, idx) => renderTab(idx, 23))}
  </BaseComponent>
)
