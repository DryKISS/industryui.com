/**
 * Link
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Button, Link } from 'components'
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

export const main = () => (
  <Link to='/' passHref>
    Home
  </Link>
)

export const button = () => (
  <Link to='/' passHref>
    <Button>Home</Button>
  </Link>
)
