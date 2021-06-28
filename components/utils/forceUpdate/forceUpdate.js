/**
 * Components - Suppliers - SSIP - Force Update
 */

// React
import { useState } from 'react'

export const useForceUpdate = () => {
  const [value, setValue] = useState(1) // integer state
  const forceUpdate = () => setValue((value) => ++value) // update the state to force render
  return [forceUpdate, value]
}
export default useForceUpdate
