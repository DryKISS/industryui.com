/**
 * Hooks  - useInterval
 * Allows running code on specific intervals
 *
 * @see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */

// React
import { useEffect, useRef } from 'react'

export const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick () {
      savedCallback.current()
    }

    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
