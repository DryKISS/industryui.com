/**
 * Audio player
 */

// React
import React from 'react'

// UI
import AudioPlayer from '../audioPlayer'
import Wrapper from '../wrapper'
import Readme from '../README.md'

export default {
  args: {},
  component: AudioPlayer,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/AudioPlayer'
}

export const main = (args) => (
  <Wrapper>
    <AudioPlayer
      src="https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
      inMessage
      {...args}
    />
  </Wrapper>
)
