/**
 * Table
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// Component
import Table from '../../'
import Readme from './README.md'

// Story
const stories = storiesOf('Molecules/Table', module)

// Decorators
stories.addDecorator(withKnobs)
stories.addDecorator(withReadme(Readme))

const columns = [
  {
    text: 'Column1'
  },
  {
    text: 'Column2'
  }
]

// Default
stories.add('Default',
  withInfo(``)(() =>
    <Table columns={columns} />
  )
)
