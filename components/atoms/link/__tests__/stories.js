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

export const defaultStory = () => (
  <Link to='/'>
    <a>Home</a>
  </Link>
)

defaultStory.story = {
  name: 'Default'
}

export const buttonStory = () => (
  <Link to='/'>
    <button>Home</button>
  </Link>
)

buttonStory.story = {
  name: 'Button'
}

export const buttonComponent = () => (
  <Link to='/'>
    <Button>Home</Button>
  </Link>
)

buttonComponent.story = {
  name: 'Button component'
}
