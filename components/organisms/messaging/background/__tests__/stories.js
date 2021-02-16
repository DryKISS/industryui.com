/**
 * Messaging/Background
 */

// Storybook
import { ControlTypes } from '../../../../../.storybook/decorators'

// UI
import { arrayOfValues, MessageBackground } from '../../../../'
import Readme from '../README.md'

const options = {
  DryKISS: '/messaging/background.png',
  WhatsApp: '/messaging/whatsapp.png'
}

const Height = story => {
  return <div style={{ height: '500px' }}>{story()}</div>
}

export default {
  argTypes: {
    path: {
      name: 'Path',
      control: {
        options: arrayOfValues(options),
        type: ControlTypes.Select
      }
    }
  },
  component: MessageBackground,
  decorators: [Height],
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Messaging/Background'
}

export const Main = args => <MessageBackground {...args} />
