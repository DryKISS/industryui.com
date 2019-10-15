/**
 * Calendar
 */

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Calendar } from './'
import Readme from './README.md'

// Data
import { Events } from './__mocks__/events'

const handleEventClick = ({ event }) => {
  event.setProp('title', event.title + ' - ' + 'updated')
}

storiesOf('Organisms/Full Calendar', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Calendar />
  )

  .add('With Events', () =>
    <Calendar events={Events} />
  )

  .add('Event Click', () =>
    <Calendar eventClick={handleEventClick} events={Events} />
  )
