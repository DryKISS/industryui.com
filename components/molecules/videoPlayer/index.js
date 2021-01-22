import { useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { PlayCircleIcon, fullScreen, FullScreenIcon, ResizeDetector } from 'components'
import { any, string } from 'prop-types'

export const VideoPlayer = ({ src, poster, className, videoProps }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [width, setWidth] = useState(0)
  const videoRef = useRef()
  const played = useRef(false)

  const handlePlayPause = () => {
    isPlaying === false ? videoRef.current.play() : videoRef.current.pause()
    setIsPlaying(state => !state)
  }

  const handlePaused = () => {
    setIsPlaying(false)
  }
  const handlePlayed = () => (played.current = true)

  const handleFullScreen = () => {
    videoRef.current.play()
    setIsPlaying(true)
    fullScreen.requestFullscreen(videoRef.current)
  }

  const handleResize = ({ width }) => {
    if (videoRef.current) {
      const width = videoRef.current.clientWidth
      setWidth(width)
    }
  }
  const iconSize = width ? width / 6 : 40
  return (
    <VideoPlayerWrapper className={className}>
      <ResizeDetector onResize={handleResize} />
      <Overlay show={!isPlaying} poster={played.current ? null : poster} gap={iconSize / 3}>
        <PlayCircleIcon size={iconSize} hoverColour onClick={handlePlayPause} />
        <FullScreenIcon size={iconSize} hoverColour onClick={handleFullScreen} />
      </Overlay>
      <Video ref={videoRef} controls onPause={handlePaused} onPlay={handlePlayed} {...videoProps}>
        <source src={src} type='video/mp4' />
        Your browser does not support the video tag.
      </Video>
    </VideoPlayerWrapper>
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
  poster: string,
  src: string.isRequired,
  videoProps: any
}
