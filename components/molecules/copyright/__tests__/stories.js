/**
 * Copyright
 */

// React
import React from 'react'

// UI
import { Copyright } from '../'
import Readme from '../README.md'

// Data
import { Copyright as Data } from '../__mocks__/copyright'

const Decorator = storyFn => (
  <div style={{ bottom: '-4rem', position: 'relative' }}>{storyFn()}</div>
)

export default {
  title: 'Molecules/Copyright',
  component: Copyright,
  decorators: [Decorator],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <Copyright brand='Compnay Name' links={Data} />

defaultStory.story = {
  name: 'Default'
}
