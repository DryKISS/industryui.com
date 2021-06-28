/**
 * Use Previous
 * Allows us os save the previous state variable, good for counters or loops
 */

// React
import { useEffect, useRef } from 'react'

const usePrevious = (value) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export default usePrevious
