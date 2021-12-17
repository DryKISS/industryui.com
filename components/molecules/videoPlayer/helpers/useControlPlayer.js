import { useState, useEffect } from 'react'
import fullScreen from '../../../utils/fullScreen/fullScreen'

const useControlPlayer = (videoRef, played) => {
  const [currentVideo, setCurrentVideo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [width, setWidth] = useState(0)
  const [subtitle, setSubtitle] = useState('en')
  const [speed, setSpeed] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(100)

  const handleSkip = (status) => {
    const manualChange = Number(progress)
    let v = 10

    if (status === 'forward') {
      v = 10
    } else {
      v = -10
    }
    const calculate = (videoRef.current.duration / 100) * manualChange
    videoRef.current.currentTime = calculate + v
    setProgress(manualChange)
  }

  const handleSetVolume = (e) => {
    const volume = Number(e?.target?.value)
    videoRef.current.volume = volume / 100
    setVolume(volume)
  }

  const handleOnTimeUpdate = () => {
    const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
    setProgress(progress)
  }

  const handlePlayPause = () => setIsPlaying((state) => !state)

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

  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value)
    videoRef.current.currentTime = (videoRef.current.duration / 100) * manualChange
    setProgress(manualChange)
  }

  const handleVideoSpeed = (event) => {
    const speed = Number(event.target.value)
    videoRef.current.playbackRate = speed
    setSpeed(speed)
  }

  useEffect(() => {
    isMuted ? (videoRef.current.muted = true) : (videoRef.current.muted = false)
  }, [isMuted, videoRef])

  useEffect(() => {
    isPlaying ? videoRef.current.play() : videoRef.current.pause()
  }, [isPlaying, videoRef])

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return {
    handlePlayPause,
    handlePaused,
    handlePlayed,
    handleFullScreen,
    handleResize,
    handleSubtitle,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    handleSetVolume,
    toggleMute,
    handleSkip,
    volume,
    isPlaying,
    width,
    subtitle,
    progress,
    setProgress,
    speed,
    isMuted,
    currentVideo
  }
}

export default useControlPlayer
