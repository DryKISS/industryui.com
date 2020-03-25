/**
 * useTimer
 */

import { useEffect, useState } from 'react'
import moment from 'moment'

export function useTimer ({ autoStart = true, initialTime } = {}) {
  const getInitialTime = () => {
    let diff = 0
    if (typeof initialTime === 'string') {
      diff = new Date().getTime() - new Date(initialTime).getTime()
    }
    return diff > -1 ? diff : 0
  }

  const [time, setTime] = useState(getInitialTime())
  const [timer, setTimer] = useState(null)

  const start = () => {
    if (!timer) {
      setTimer(
        setInterval(() => {
          setTime(prev => prev + 1000)
        }, 1000)
      )
    }
  }

  const stop = () => {
    clearInterval(timer)
    setTimer(null)
  }

  useEffect(() => {
    if (autoStart) start()
    return () => {
      stop()
    }
  }, [])

  const getFormattedTime = () => {
    const temp = moment.duration(time)
    return {
      seconds: temp
        .seconds()
        .toString()
        .padStart(2, '0'),
      minutes: temp
        .minutes()
        .toString()
        .padStart(2, '0'),
      hours: temp
        .hours()
        .toString()
        .padStart(2, '0'),
      days: parseInt(temp.asDays(), 10)
    }
  }

  return { time: getFormattedTime(), start, stop }
}