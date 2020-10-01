/**
 * Messaging/Background
 */

// UI
import { MessageBackground } from 'components'
import Readme from '../README.md'

const defaultValue = '/messaging/background.png'

const Height = story => {
  return <div style={{ height: '500px' }}>{story()}</div>
}

export default {
  args: {
    path: defaultValue
  },
  argTypes: {
    backgroundColor: { select: 'color' }
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

const options = {
  Blank: '',
  DryKISS: '/messaging/background.png',
  WhatsApp: '/messaging/whatsapp.png'
}

const Main = args => (
  <MessageBackground {...args} path={select('Background', options, defaultValue)} />
)

export const Primary = Main.bind({})
