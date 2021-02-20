/**
 * Components - Molecules - Video Player - Story
 */

// UI
import { VideoPlayer } from '../videoPlayer'
import Readme from '../README.md'

// Data
export default {
  component: VideoPlayer,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/VideoPlayer'
}

export const main = args => (
  <VideoPlayer {...args} src='/video/video.mp4' poster='/video/poster.png' />
)
