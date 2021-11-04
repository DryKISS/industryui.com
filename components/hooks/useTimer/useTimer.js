/**
 * Components - Hooks - Use Timer
 */

// React
import { useEffect, useState } from 'react'
import {
  differenceInMilliseconds,
  getMinutes,
  getHours,
  getSeconds,
  format,
  millisecondsToHours
} from 'date-fns'

// UI
import useInterval from '../useInterval'

const useTimer = ({ autoStart = true, interval = 1000, startTime, endTime } = {}) => {
  const getTime = () => {
    let diff = 0
    const now = endTime ? new Date(endTime) : new Date()
    if (typeof startTime === 'string') {
      diff = differenceInMilliseconds(now, new Date(startTime))
    }
    return diff > -1 ? diff : 0
  }

  const [time, setTime] = useState(getTime())
  const [timer, setTimer] = useState(null)

  useInterval(() => {
    setTime((prev) => prev + interval)
  }, timer)

  const start = () => {
    if (!timer) setTimer(interval)
  }

  const stop = () => {
    setTimer(null)
  }

  useEffect(() => {
    if (autoStart) start()
    return () => {
      stop()
    }
  }, [])

  const getFormattedTime = () => {
    return {
      days: format(time, 'EEEE'),
      seconds: getSeconds(time),
      minutes: getMinutes(time),
      hours: getHours(time),
      exactHours: millisecondsToHours(time).toFixed(2)
    }
  }

  return { time: getFormattedTime(), start, stop }
}

export default useTimer
