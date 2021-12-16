/**
 * Components - Molecules - Video Player - Story
 */

// React
import React from 'react'

// UI
import VideoPlayer from '../videoPlayer'
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
const subtitles = [
  { label: 'Germany', kind: 'subtitles', srcLang: 'de', src: '/video/subtitles_de.vtt' },
  { label: 'English', kind: 'subtitles', srcLang: 'en', src: '/video/subtitles_en.vtt' },
  { label: 'japanese', kind: 'subtitles', srcLang: 'ja', src: '/video/subtitles_ja.vtt' }
]
export const main = (args) => (
  <VideoPlayer {...args} subtitles={subtitles} src="/video/video.mp4" poster="/video/poster.png" />
)
