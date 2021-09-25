/**
 * Components - Molecules - Modal - Use Toggle
 */

// React
import { useState, useCallback } from 'react'

const useToggle = (initial) => {
  const [open, setOpen] = useState(initial)

  return [open, useCallback(() => setOpen((status) => !status))]
}

export default useToggle
