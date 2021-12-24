// React
import { useEffect } from 'react'

// UI
import fullScreen from '../../../utils/fullScreen/fullScreen'

// Helper
import useReducer from './useReducer'
import actionType from './actions'

const useControlPlayer = (videoRef) => {
  const { currentState, setState } = useReducer()
  const { progress, isMuted, isPlaying } = currentState

  const handleSkip = (status) => {
    const manualChange = Number(progress)
    let defaultSkip = 10

    if (status === 'forward') {
      defaultSkip = 10
    } else {
      defaultSkip = -10
    }
    const calculate = (videoRef.current.duration / 100) * manualChange
    videoRef.current.currentTime = calculate + defaultSkip
    setState(actionType.progress, manualChange)
  }

  const handleSetVolume = (e) => {
    const volume = Number(e?.target?.value)
    videoRef.current.volume = volume / 100
    setState(actionType.volume, volume)
  }

  const handleOnTimeUpdate = () => {
    const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
    setState(actionType.progress, progress)
  }

  const handlePlayPause = () => {
    setState(actionType.isPlaying)
  }

  const handleFullScreen = () => {
    videoRef.current.play()
    setState(actionType.isPlaying, true)
    fullScreen.requestFullscreen(videoRef.current)
  }

  const handleResize = ({ width }) => {
    if (videoRef.current) {
      const width = videoRef.current.clientWidth
      setState(actionType.width, width)
    }
  }

  const handleSubtitle = ({ target = {} }) => {
    setState(actionType.subtitle, target?.value)
  }

  const handleShowSubtitle = () => {
    setState(actionType.isSubtitle)
  }

  const handleVideoProgress = ({ target = {} }) => {
    const manualChange = Number(target?.value)

    videoRef.current.currentTime = (videoRef.current.duration / 100) * manualChange
    setState(actionType.progress, manualChange)
  }

  const handleVideoSpeed = (currentSpeed) => {
    const speed = Number(currentSpeed)

    videoRef.current.playbackRate = speed
    setState(actionType.speed, speed)
  }

  useEffect(() => {
    isMuted ? (videoRef.current.muted = true) : (videoRef.current.muted = false)
  }, [isMuted])

  useEffect(() => {
    isPlaying ? videoRef.current.play() : videoRef.current.pause()
  }, [isPlaying])

  return {
    handlePlayPause,
    handleFullScreen,
    handleResize,
    handleSubtitle,
    handleShowSubtitle,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    handleSetVolume,
    handleSkip,
    ...currentState
  }
}

export default useControlPlayer
