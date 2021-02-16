/**
 * videoPlayer
 */

// UI
import styled from 'styled-components'
import { VideoPlayer } from '../../../'
import Readme from '../README.md'
import video from '../__mocks__/video.mp4'
import poster from '../__mocks__/poster.png'

// Data

export default {
  title: 'Molecules/VideoPlayer',
  component: VideoPlayer,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const player = () => {
  return (
    <Wrapper>
      <VideoPlayer src={video} poster={poster} />
    </Wrapper>
  )
}

const Wrapper = styled.div``
