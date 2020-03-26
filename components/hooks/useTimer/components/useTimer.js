/**
 * useTimer
 */

import { useEffect, useState } from 'react'
import moment from 'moment'

import { useInterval } from '../../../'

export function useTimer ({ autoStart = true, interval = 1000, startTime, endTime } = {}) {
  const getTime = () => {
    let diff = 0
    if (typeof startTime === 'string') {
      diff = new Date().getTime(endTime) - new Date(startTime).getTime()
    }
    return diff > -1 ? diff : 0
  }

  const [time, setTime] = useState(getTime())
  const [timer, setTimer] = useState(null)

  useInterval(() => {
    setTime(prev => prev + interval)
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
