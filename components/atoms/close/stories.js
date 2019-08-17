/**
 * CLose
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Close } from './'
import Readme from './README.md'

const CenterDecorator = storyFn =>
  <div style={{
    float: 'left',
    margin: '1rem 1rem 1rem .5rem'
  }}>
    {storyFn()}
  </div>

storiesOf('Atoms/Close', module)

  .addDecorator(CenterDecorator)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Close click={() => {}} />
  )
