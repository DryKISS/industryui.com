/**
 * Components - Molecules - Video Player
 */

// React
import React, { useRef, useState } from 'react'
import { any, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI

import FullScreenIcon from '../../icons/components/fullScreen'
import SettingIcon from '../../icons/components/setting'
import ButtonHOC from './components/ButtonHOC'
import SubtitleIcon from '../../icons/components/subtitle'

import ResizeDetector from '../../utils/resizeDetector/resizeDetector'
import useControlPlayer from './helpers/useControlPlayer'
import Volume from './components/volume'
import VideoTitle from './components/videoTitle'
import SettingControlBox from './components/settingControlBox'
import MainControlBox from './components/mainControlBox'

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

  const videoSubtitle = () => {
    const track = (subtitles || []).find(({ srcLang = 'en' }) => srcLang === subtitle)
    if (track) {
      return <track {...track} default></track>
    }
    return null
  }

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
          {isSubtitle && videoSubtitle()}
          Your browser does not support the video tag.
        </Video>

        <ControlOverlayWrapper>
          <MainControlBox
            {...{
              handlePlayPause,
              handleSkip,
              setVideoState,
              handleVideoProgress,
              isPlaying,
              progress,
              videoRef,
              videos
            }}
          />
          <SettingWrapper>
            <ButtonHOC onClick={handleShowSubtitle}>
              <SubtitleIcon colour={isSubtitle ? 'white' : '#999999'} />
            </ButtonHOC>
            <Volume {...{ isShowSetting, volume, onChange: handleSetVolume }} />
            <ButtonHOC onClick={() => setShowSetting(!isShowSetting)}>
              <SettingIcon colour="white" />
            </ButtonHOC>

            <ButtonHOC onClick={handleFullScreen}>
              <FullScreenIcon colour="white" />
            </ButtonHOC>
          </SettingWrapper>
        </ControlOverlayWrapper>
      </VideoPlayerWrapper>
    </>
  )
}

const SettingWrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
`

const ControlOverlayWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 7px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  left: 0;
  background-color: rgba(102, 102, 102, 0.5);
  z-index: 1;
  padding-top: 5px;
  padding-left: 15px;
`

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
