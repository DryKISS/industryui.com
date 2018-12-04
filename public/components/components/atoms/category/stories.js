/**
 * Category
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import Category from '../../'
import Readme from './README.md'

storiesOf('Atoms/Category', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Category category='Cuisine' path='/' />
    )
  )
