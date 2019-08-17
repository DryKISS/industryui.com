/**
 * Link
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Link } from './'
import Readme from './README.md'

storiesOf('Atoms/Link', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Link to='/'><a>Home</a></Link>
  )
