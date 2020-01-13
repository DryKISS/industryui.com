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
  content: ''
}

export const OffCanvasProvider = ({ children }) => {
  const [show, toggleShow] = useState(false)
  const [data, setData] = useState(DATA)
  const handleClose = () => {
    toggleShow(false)
  }
  const handleShow = data => {
    if (data && data.content) {
      setData(data)
      toggleShow(true)
    } else handleClose()
  }
  return (
    <OffCanvasContext.Provider
      value={{
        show: handleShow,
        close: handleClose
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
