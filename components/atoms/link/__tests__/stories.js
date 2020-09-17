/**
 * Link
 */

// React
import React from 'react'

// Storybook
import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { Context, Wrapper } from 'decorators'

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
    border: boolean('Border', true),
    children: text('Children', 'Link'),
    className: '',
    context: Context(),
    onClick: action('clicked'),
    passHref: boolean('PassHref', true),
    target: text('Target', '_blank'),
    to: text('To', '/here'),
    ...props
  }

  return <Link {...defaultProps}>{defaultProps.children}</Link>
}

export const main = () => {
  return (
    <>
      <BaseComponent />
      <Divider size='sm' />

      <BaseComponent className='link--hover'>Hover</BaseComponent>
      <Divider size='sm' />

      <BaseComponent className='link--active'>Active</BaseComponent>
      <Divider size='sm' />

      <BaseComponent className='link--visited'>Visited</BaseComponent>
    </>
  )
}

export const button = () => (
  <BaseComponent>
    <Button>Home</Button>
  </BaseComponent>
)
