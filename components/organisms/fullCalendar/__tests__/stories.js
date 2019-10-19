// UI
import { Calendar } from '../'
import Readme from '../README.md'

// Data
import { Events } from '../__mocks__/events'

const handleEventClick = ({ event }) => {
  event.setProp('title', event.title + ' - ' + 'updated')
};

export default {
  title: 'Organisms/Full Calendar',
  components: Calendar,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <Calendar />

defaultStory.story = {
  name: 'Default'
}

export const withEvents = () => <Calendar events={Events} />

export const eventClickStory = () => <Calendar eventClick={handleEventClick} events={Events} />

eventClickStory.story = {
  name: 'Event Click'
}
