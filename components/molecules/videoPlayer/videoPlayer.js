/**
 * Components - Molecules - Video Player
 */

// React
import React, { useRef, useState } from 'react'
import { any, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import ResizeDetector from '../../utils/resizeDetector/resizeDetector'
import useControlPlayer from './helpers/useControlPlayer'
import VideoTitle from './components/videoTitle'
import SettingControlBox from './components/settingControlBox'
import videoSubtitle from './helpers/videoSubtitle'
import VideoControl from './components/videoControl'

const VideoPlayer = ({ className, configs, onFavorite }) => {
  const { videos = [] } = configs
  const videoRef = useRef()
  const played = useRef(false)
  const [favorite, setFavorite] = useState(false)
  const [videoState, setVideoState] = useState(videos[0])

  const [isShowSetting, setShowSetting] = useState(false)

  const {
    handlePlayPause,
    handleFullScreen,
    handleResize,
    handleSubtitle,
    handleShowSubtitle,
    handleVideoProgress,
    handleVideoSpeed,
    handleSetVolume,
    handleSkip,
    volume,
    isPlaying,
    subtitle,
    isSubtitle,
    progress,
    speed,
    handleOnTimeUpdate
  } = useControlPlayer(videoRef, played)

  const { title, description, subtitles = [], src = '', videoType } = videoState

  const track = videoRef?.current?.children[1]?.track

  // setFavorite
  onFavorite && onFavorite(favorite)

  return (
    <>
      <VideoPlayerWrapper className={className}>
        <ResizeDetector onResize={handleResize} />
        <VideoTitle {...{ title, description, favorite, setFavorite }} />

        {isShowSetting && (
          <SettingControlBox
            speed={speed}
            handleSubtitle={handleSubtitle}
            handleVideoSpeed={handleVideoSpeed}
          />
        )}
        <SubtitleText>
          {!!track?.activeCues?.length && track.activeCues[0].text && (
            <div>{track.activeCues[0].text}</div>
          )}
        </SubtitleText>
        <Video ref={videoRef} seekable onTimeUpdate={handleOnTimeUpdate}>
          <source src={src} type={videoType || 'video/mp4'} />
          {isSubtitle && videoSubtitle({ subtitle, subtitles })}
          Your browser does not support the video tag.
        </Video>

        <VideoControl
          {...{
            handlePlayPause,
            handleSkip,
            setVideoState,
            handleVideoProgress,
            isPlaying,
            progress,
            videoRef,
            videos,
            handleShowSubtitle,
            isSubtitle,
            isShowSetting,
            handleSetVolume,
            volume,
            setShowSetting,
            handleFullScreen
          }}
        />
      </VideoPlayerWrapper>
    </>
  )
}

const VideoPlayerWrapper = styled.div`
  border-radius: 0.5rem;
  height: 100%;
  position: relative;
  overflow: hidden;
  width: 100%;
`

const Video = styled.video`
  border-radius: 0.5rem;
  height: 100%;
  outline: none;
  width: 100%;

  &::cue {
    color: transparent;
    background-color: transparent;
  }
`

const SubtitleText = styled.div`
  position: absolute;
  bottom: 90px;
  left: 10%;
  @media (max-width: 450px) {
    display: none;
  }
  div {
    background-color: rgba(102, 102, 102, 0.5);
    color: #ffffff;
    padding: 10px;
    font-size: 25px;
    border-radius: 8px;
  }
`
VideoPlayer.prototypes = {
  className: string,
  poster: string,
  src: string.isRequired,
  videoProps: any,
  videoType: string
}

export default VideoPlayer
