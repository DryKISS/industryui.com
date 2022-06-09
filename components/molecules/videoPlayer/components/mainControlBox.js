/**
 * Components - Molecules - Video Player - Component -  Main Control Box
 */

// React
import { useState } from 'react'
// Style
import styled from 'styled-components'

// UI
import ButtonHOC from './ButtonHOC'
import BackwardPlayIcon from '../../../icons/components/backwardPlay'
import ForwardPlayIcon from '../../../icons/components/forwardPlay'
import PlayCircleIcon from '../../../icons/components/playCircle'
import PauseCircleIcon from '../../../icons/components/pauseCircle'
import StepForwardIcon from '../../../icons/components/stepForward'
import StepBackwardIcon from '../../../icons/components/stepBackward'
import toHHMMSS from '../../../utils/date/hhmmss'

const STATUS = {
  backward: 'backward',
  forward: 'forward'
}

const MainControlBox = ({
  handlePlayPause,
  handleVideoProgress,
  handleSkip,
  isPlaying,
  progress,
  setVideoState,
  videoRef,
  videos
}) => {
  const [current, setCurrent] = useState(0)

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
        <span>
          {toHHMMSS({
            hasSecond: true,
            hasHour: true,
            hasMinute: true,
            sec: videoRef?.current?.currentTime
          })}
        </span>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => handleVideoProgress(e)}
        />
        <span>
          {toHHMMSS({
            sec: Math.floor(videoRef?.current?.duration - videoRef?.current?.currentTime),
            hasSecond: true,
            hasHour: true,
            hasMinute: true
          })}
        </span>
      </TimelineWrapper>
    </MainControlWrapper>
  )
}

const MainControlWrapper = styled.div`
  display: flex;
  flex: 5;
`

const TimelineWrapper = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 700px) {
    display: none;
  }
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

export default MainControlBox