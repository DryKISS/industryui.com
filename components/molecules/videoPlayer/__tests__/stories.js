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
  { kind: 'subtitles', label: 'Germany', srcLang: 'de', src: '/video/subtitles_de.vtt' },
  { kind: 'subtitles', label: 'English', srcLang: 'en', src: '/video/subtitles_en.vtt' },
  { kind: 'subtitles', label: 'japanese', srcLang: 'ja', src: '/video/subtitles_ja.vtt' }
]

export const main = () => (
  <VideoPlayer
    configs={{
      videos: [
        {
          description: 'Singer',
          poster: '/video/poster.png',
          subtitles,
          src: '/video/video.mp4',
          title: 'Music Festival'
        },
        {
          description: 'Kyle Simpson',
          poster: '/video/poster.png',
          subtitles,
          src: '/video/EgarVideo.mp4',
          title: 'Javascript Tutorial'
        }
      ]
    }}
    onFavorite={console.log}
  />
)
