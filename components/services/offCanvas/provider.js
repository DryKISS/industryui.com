/**
 * OffCanvas - Provider
 */

// React
import React, { useState } from 'react'

// UI
import { OffCanvas } from '../../'

// Context
import { OffCanvasContext } from '../'

export const OffCanvasProvider = () => {
  const [show, toggleShow] = useState(false)
  return (
    <OffCanvasContext.Provider
      value={{
        show,
        toggleShow: () => toggleShow(prev => !prev)
      }}
    >
      <OffCanvas show={show} toggleShow={() => toggleShow(prev => !prev)}>
        content
      </OffCanvas>
    </OffCanvasContext.Provider>
  )
}
