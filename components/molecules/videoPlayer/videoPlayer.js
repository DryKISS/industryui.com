/**
 * Components - Molecules - Video Player
 */

// React
import React, { useRef, useState } from 'react'
import { any, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
// import PlayCircleIcon from '../../icons/components/playCircle'
import FullScreenIcon from '../../icons/components/fullScreen'
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
    handleVideoProgress,
    handleVideoSpeed,
    handleSetVolume,
    handleSkip,
    volume,
    isPlaying,
    width,
    subtitle,
    progress,
    speed,
    handleOnTimeUpdate,
    isMuted,
    toggleMute,
    reducerTest
  } = useControlPlayer(videoRef, played)

  const { subtitles = [], poster = '', src = '', videoType } = videoState
  const iconSize = width ? width / 6 : 40

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

  return (
    <>
      <VideoPlayerWrapper className={className}>
        <ResizeDetector onResize={handleResize} />

        <Overlay show={!isPlaying} poster={played.current ? null : poster} gap={iconSize / 3}>
          {/* <PlayCircleIcon size={iconSize} hoverColour onClick={handlePlayPause} /> */}
          <FullScreenIcon size={iconSize} hoverColour onClick={handleFullScreen} />
        </Overlay>
        <Video ref={videoRef} seekable onTimeUpdate={handleOnTimeUpdate}>
          <source src={src} type={videoType || 'video/mp4'} />
          {videoSubtitle()}
          Your browser does not support the video tag.
        </Video>
      </VideoPlayerWrapper>
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={(e) => handleVideoProgress(e)}
      />
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
      <div>
        <button onClick={handlePlayPause}>{!isPlaying ? 'Play' : 'Pause'}</button>
      </div>
      <div>
        <input type="range" min="0" max="100" value={volume} onChange={handleSetVolume} />
        <span>{volume}</span>
      </div>
      <div>
        <button onClick={() => handleSkip(STATUS.backward)}>10 back</button>
        <button onClick={() => handleSkip(STATUS.forward)}>10 forward</button>
      </div>
      <div>
        <button onClick={() => handleNext(videos.length)}>Next Video</button>
        <button onClick={() => handlePrev(videos.length)}>Previous Video</button>
      </div>
      <div>
        <button onClick={() => setFavorite(!favorite)}>
          {favorite ? 'Favorite' : 'Not Favorite'}
        </button>
      </div>
      <div>
        <button onClick={reducerTest}>Crazy rerender</button>
      </div>
    </>
  )
}

const Overlay = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  background-image: ${({ poster }) =>
    poster && ` linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${poster})`};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.5rem;
  bottom: 7px;
  display: flex;
  gap: ${({ gap }) => gap + 'px'};
  justify-content: center;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
  ${({ show }) =>
    show
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
          pointer-events: none;
        `}
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
`

VideoPlayer.prototypes = {
  className: string,
  poster: string,
  src: string.isRequired,
  videoProps: any,
  videoType: string
}

export default VideoPlayer
