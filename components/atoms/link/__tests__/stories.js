/**
 * Link
 */

// React
import React from 'react'

// UI
import { Link } from '../'
import { Button } from '../../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Link',
  component: Link,
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
    <button>Home</button>
  </Link>
)

export const component = () => (
  <Link to='/'>
    <Button>Home</Button>
  </Link>
)
