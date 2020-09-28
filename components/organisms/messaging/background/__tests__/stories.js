/**
 * Messaging/Background
 */

// Storybook
import { select } from '@storybook/addon-knobs'

// UI
import { MessageBackground } from 'components'
import Readme from '../README.md'

const Height = story => {
  return <div style={{ height: '500px' }}>{story()}</div>
}

export default {
  title: 'Organisms/Messaging/Background',
  component: MessageBackground,
  decorators: [Height],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const options = {
  Blank: '',
  DryKISS: '/messaging/background.png',
  WhatsApp: '/messaging/whatsapp.png'
}

const defaultValue = '/messaging/background.png'

export const main = () => <MessageBackground path={select('Background', options, defaultValue)} />
