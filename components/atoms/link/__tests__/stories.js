/**
 * Link
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Button, Divider, Link } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Link',
  component: Link,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    children: 'Home',
    passHref: true,
    to: '/',
    ...props
  }

  return <Link {...defaultProps}>{defaultProps.children}</Link>
}

export const main = () => {
  return (
    <>
      <BaseComponent>Standard</BaseComponent>
      <Divider />

      <BaseComponent style={{ transitionDelay: '0s', visibility: 'visible' }}>Hover</BaseComponent>
      <Divider />

      <BaseComponent>Active</BaseComponent>
      <Divider />

      <BaseComponent>Visited</BaseComponent>
    </>
  )
}

export const button = () => (
  <BaseComponent>
    <Button>Home</Button>
  </BaseComponent>
)
