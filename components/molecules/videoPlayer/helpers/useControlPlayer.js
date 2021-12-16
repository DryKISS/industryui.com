import { useState } from 'react'
import fullScreen from '../../../utils/fullScreen/fullScreen'

const useControlPlayer = (videoRef, played) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [width, setWidth] = useState(0)
  const [subtitle, setSubtitle] = useState('en')
  const handlePlayPause = () => {
    isPlaying === false ? videoRef.current.play() : videoRef.current.pause()
    setIsPlaying((state) => !state)
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
  const handleSubtitle = (e) => {
    setSubtitle(e?.target?.value)
  }
  return {
    handlePlayPause,
    handlePaused,
    handlePlayed,
    handleFullScreen,
    handleResize,
    handleSubtitle,
    isPlaying,
    width,
    subtitle
  }
}

export default useControlPlayer
