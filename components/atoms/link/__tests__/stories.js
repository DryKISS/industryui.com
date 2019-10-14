/**
 * Link
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Link } from '../'
import { Button } from '../../'
import Readme from '../README.md'

storiesOf('Atoms/Link', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Link to='/'><a>Home</a></Link>
  )

  .add('Button', () =>
    <Link to='/'><button>Home</button></Link>
  )

  .add('Button component', () =>
    <Link to='/'><Button>Home</Button></Link>
  )
