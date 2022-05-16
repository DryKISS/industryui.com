/**
 * Link
 */

// React
import React from 'react'

// Storybook
import ContextControl from '../../../../.storybook/decorators/controls/context'

// UI
import Button from '../../button/button/button'
import Divider from '../../divider/divider'
import Link from '../link'
import Readme from '../README.md'

export default {
  args: {
    border: true,
    children: 'link',
    context: 'black',
    passHref: true,
    target: '_blank',
    to: '/'
  },
  argTypes: {
    context: ContextControl()
  },
  component: Link,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Link'
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    onClick: () => console.log('clicked'),
    ...props
  }

  return <Link {...defaultProps}>{defaultProps.children}</Link>
}

export const main = (args) => {
  return (
    <>
      <BaseComponent {...args} />
      <Divider size="sm" />

      <BaseComponent className="link--hover" {...args}>
        Hover
      </BaseComponent>
      <Divider size="sm" />

      <BaseComponent className="link--active" {...args}>
        Active
      </BaseComponent>
      <Divider size="sm" />

      <BaseComponent className="link--visited" {...args}>
        Visited
      </BaseComponent>
    </>
  )
}

export const button = (args) => (
  <BaseComponent {...args}>
    <Button>Home</Button>
  </BaseComponent>
)
