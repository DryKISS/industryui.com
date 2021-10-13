/**
 * Services - OffCanvas - useOffCanvas
 */

// React
import { useContext } from 'react'

// UI
import OffCanvasContext from './context'

export const useOffCanvas = () => {
  const offCanvas = useContext(OffCanvasContext)

  if (!offCanvas) {
    throw new Error('useOffCanvas must be used within the OffCanvasProvider')
  }

  return offCanvas
}
