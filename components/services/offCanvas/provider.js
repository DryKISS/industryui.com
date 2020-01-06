/**
 * OffCanvas - Provider
 */

// React
import React, { useState } from 'react'

// UI
import { OffCanvas } from '../../'

// Context
import { OffCanvasContext } from '../'

const DATA = {
  title: '',
  content: '',
  width: undefined,
  placement: undefined
}

export const OffCanvasProvider = ({ children }) => {
  const [show, toggleShow] = useState(false)
  const [data, setData] = useState(DATA)
  const handleClose = () => {
    toggleShow(false)
    setData(DATA)
  }
  const handleShow = data => {
    if (data.content) {
      setData(prev => ({ ...prev, ...data }))
      toggleShow(true)
    } else handleClose()
  }
  return (
    <OffCanvasContext.Provider
      value={{
        show: handleShow
      }}
    >
      {children}
      <OffCanvas
        show={show}
        toggleShow={handleClose}
        headerText={data.title}
        overlay
        lockScrollOnOpen
        width={data.width}
        placement={data.placement}
      >
        {data.content}
      </OffCanvas>
    </OffCanvasContext.Provider>
  )
}
