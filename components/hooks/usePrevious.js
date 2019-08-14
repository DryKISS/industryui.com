/**
 * Use Keypress
 * Allows us os save the previous state variable, good for counters or loops
 */
export const usePrevious = (value) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

//
