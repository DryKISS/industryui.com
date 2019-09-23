/**
 * Calendar
 */

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Calendar } from './'
import Readme from './README.md'

storiesOf('Organisms/Full Calendar', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Calendar />
  )
