/**
 * useTimer
 */

// React
import { useEffect, useState } from 'react'

// Moment
import moment from 'moment'

// UI
import { useInterval } from '../../../'

export function useTimer ({ autoStart = true, interval = 1000, startTime, endTime } = {}) {
  const getTime = () => {
    let diff = 0
    const now = endTime ? moment(endTime) : moment()
    if (typeof startTime === 'string') {
      diff = now.diff() - moment(startTime).diff()
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
      hours: parseInt(temp.asHours(), 10),
      exactHours: temp.asHours().toFixed(2)
    }
  }

  return { time: getFormattedTime(), start, stop }
}
