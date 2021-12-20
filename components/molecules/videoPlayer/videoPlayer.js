/**
 * Components - Molecules - Video Player
 */

// React
import React, { useRef, useState } from 'react'
import { any, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import ForwardPlayIcon from '../../icons/components/forwardPlay'
import BackwardPlayIcon from '../../icons/components/backwardPlay'
import PlayCircleIcon from '../../icons/components/playCircle'
import PauseCircleIcon from '../../icons/components/pauseCircle'
import FullScreenIcon from '../../icons/components/fullScreen'
import SettingIcon from '../../icons/components/setting'
import StepForwardIcon from '../../icons/components/stepForward'
import StepBackwardIcon from '../../icons/components/stepBackward'
import SubtitleIcon from '../../icons/components/subtitle'
import VolumeIcon from '../../icons/components/volume'
import ResizeDetector from '../../utils/resizeDetector/resizeDetector'
import useControlPlayer from './helpers/useControlPlayer'

const STATUS = {
  forward: 'forward',
  backward: 'backward'
}

const VideoPlayer = ({ className, configs }) => {
  const { videos = [] } = configs
  const videoRef = useRef()
  const played = useRef(false)
  const [favorite, setFavorite] = useState(false)
  const [videoState, setVideoState] = useState(videos[0])
  const [current, setCurrent] = useState(0)
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
    // width,
    subtitle,
    isSubtitle,
    progress,
    speed,
    handleOnTimeUpdate,
    isMuted,
    toggleMute
  } = useControlPlayer(videoRef, played)
  console.log('isSubtitle', isSubtitle)
  const { subtitles = [], poster = '', src = '', videoType } = videoState
  // const iconSize = width ? width / 6 : 40

  const videoSubtitle = () => {
    const track = (subtitles || []).find(({ srcLang = 'en' }) => srcLang === subtitle)
    if (track) {
      return <track {...track} default></track>
    }
    return null
  }

  const handleNext = (videoLength) => {
    const currentState = current + 1
    if (currentState < videoLength) {
      setVideoState(videos[currentState])
      setCurrent(currentState)
      videoRef.current.pause()
      videoRef.current.src = videos[currentState]?.src
      videoRef.current.play()
    }
  }

  const handlePrev = () => {
    const currentState = current - 1
    if (currentState >= 0) {
      setVideoState(videos[currentState])
      setCurrent(currentState)
      videoRef.current.pause()
      videoRef.current.src = videos[currentState]?.src
      videoRef.current.play()
    }
  }

  const Volume = ({ volume, onChange }) => {
    return (
      <VolumeWrapper>
        <input type="range" min="0" max="100" value={volume} onChange={onChange} />
        <ButtonHOC onClick={console.log}>
          <VolumeIcon colour="white" />
        </ButtonHOC>
      </VolumeWrapper>
    )
  }

  return (
    <>
      <VideoPlayerWrapper className={className}>
        <ResizeDetector onResize={handleResize} />

        <Video ref={videoRef} seekable onTimeUpdate={handleOnTimeUpdate}>
          <source src={src} type={videoType || 'video/mp4'} />
          {isSubtitle && videoSubtitle()}
          Your browser does not support the video tag.
        </Video>
        <ControlOverlayWrapper>
          <MainControlWrapper>
            <ButtonHOC onClick={handlePlayPause}>
              {!isPlaying ? <PlayCircleIcon colour="white" /> : <PauseCircleIcon colour="white" />}
            </ButtonHOC>
            <ButtonHOC onClick={() => handleSkip(STATUS.backward)}>
              <BackwardPlayIcon colour="white" />
            </ButtonHOC>
            <ButtonHOC onClick={() => handleSkip(STATUS.forward)}>
              <ForwardPlayIcon colour="white" />
            </ButtonHOC>

            <ButtonHOC onClick={() => handlePrev(videos.length)}>
              <StepBackwardIcon colour="white" />
            </ButtonHOC>
            <ButtonHOC onClick={() => handleNext(videos.length)}>
              <StepForwardIcon colour="white" />
            </ButtonHOC>
            <TimelineWrapper>
              <span>1222 : 13 : 22</span>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => handleVideoProgress(e)}
              />
              <span>1222 : 13 : 22</span>
            </TimelineWrapper>
          </MainControlWrapper>
          <SettingWrapper>
            <ButtonHOC onClick={handleShowSubtitle}>
              <SubtitleIcon colour={isSubtitle ? 'white' : '#999999'} />
            </ButtonHOC>
            <Volume volume={volume} onChange={handleSetVolume} />
            <ButtonHOC onClick={console.log}>
              <SettingIcon colour="white" />
            </ButtonHOC>

            <ButtonHOC onClick={handleFullScreen}>
              <FullScreenIcon colour="white" />
            </ButtonHOC>
          </SettingWrapper>
        </ControlOverlayWrapper>
      </VideoPlayerWrapper>

      <div>
        <label for="cars">Choose Subtitle:</label>
        <select onChange={handleSubtitle} name="subtitle" id="subtitle">
          <option value="en">English</option>
          <option value="ja">Japan</option>
          <option value="de">Germany</option>
        </select>
      </div>

      <div>
        <select className="velocity" value={speed} onChange={(e) => handleVideoSpeed(e)}>
          <option value="0.50">0.50x</option>
          <option value="1">1x</option>
          <option value="1.25">1.25x</option>
          <option value="2">2x</option>
          <option value="5">5x</option>
        </select>
      </div>
      <div>
        <button className="mute-btn" onClick={toggleMute}>
          {!isMuted ? 'Not Muted' : 'Muted'}
        </button>
      </div>
      <div></div>
      <div>
        <span>{volume}</span>
      </div>
      <div></div>
      <div></div>
      <div>
        <button onClick={() => setFavorite(!favorite)}>
          {favorite ? 'Favorite' : 'Not Favorite'}
        </button>
      </div>
    </>
  )
}
const VolumeWrapper = styled.div`
  position: relative;
  top: 10px;
  input[type='range'] {
    position: absolute;
    top: -75px;
    left: -45px;
    transform: rotate(270deg);
  }
`
const TimelineWrapper = styled.div`
  display: flex;
  width: 100%;

  span {
    color: #ffffff;
    padding: 10px;
    font-weight: bold;
    word-spacing: 0px;
    white-space: nowrap;
  }

  input {
    width: 70%;
  }
`

const ButtonHOC = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0px 10px;
`

const MainControlWrapper = styled.div`
  display: flex;
  flex: 5;
`

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
    position: relative;
    top: -100px;
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
