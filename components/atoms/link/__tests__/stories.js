/**
 * Link
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Link } from '../'
import { Button } from '../../'
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
  <Link to='/'>
    <a>Home</a>
  </Link>
)

export const button = () => (
  <Link to='/'>
    <Button>Home</Button>
  </Link>
)
