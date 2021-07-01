/**
 * Components - Atoms - Address - Story
 */

// React
import React from 'react'

// UI
import App from '../app'
import Readme from '../README.md'
import Text from '../../atoms/text/text'

export default {
  component: App,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'App'
}

// export const main = (args) => <App Component={() => <Text>Here</Text>} Layout={<Text>Here</Text>} />
