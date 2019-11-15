// UI
import { Calendar } from '../'
import Readme from '../README.md'

// Data
import { Events } from '../__mocks__/events'

const handleEventClick = ({ event }) => {
  event.setProp('title', event.title + ' - ' + 'updated')
}

export default {
  title: 'Organisms/Full Calendar - OLD',
  components: Calendar,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Calendar />

export const events = () => <Calendar events={Events} />

export const eventClick = () => <Calendar eventClick={handleEventClick} events={Events} />
