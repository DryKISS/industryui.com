/**
 * CLose
 */

// React
import React from 'react'

// UI
import { Close } from '../'
import Readme from '../README.md'

const CenterDecorator = storyFn => (
  <div
    style={{
      float: 'left',
      margin: '1rem 1rem 1rem .5rem'
    }}
  >
    {storyFn()}
  </div>
)

export default {
  title: 'Atoms/Close',
  component: Close,
  decorators: [CenterDecorator],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <Close click={() => {}} />

defaultStory.story = {
  name: 'Default'
}
