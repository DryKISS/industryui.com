/**
 * OffCanvas - Provider
 */

// React
import React, { useState } from 'react'

// Styled Components
import styled from 'styled-components'

// UI
import { OffCanvas } from '../../'

// Context
import { OffCanvasContext } from '../'
import { getLast, getFirst } from '../../utils'

const DURATION = 300

export const OffCanvasProvider = ({ children }) => {
  const [dataManager, setDataManager] = useState([])
  const [visibilityManager, setVisibilityManager] = useState([])
  const handleClose = () => {
    setVisibilityManager(prev => {
      prev.pop()
      return [...prev]
    })

    // Prevent data to disappear suddenly on close
    setTimeout(
      () => {
        setDataManager(prev => {
          prev.pop()
          return [...prev]
        })
      },
      dataManager.length === 1 ? DURATION : 0
    )
  }

  const handleShow = data => {
    if (data && data.content) {
      setVisibilityManager(prev => [...prev, true])
      setDataManager(prev => [...prev, data])
    } else handleClose()
  }

  // Get width and placement from first item
  const options = getFirst(dataManager)

  // Get title and content from last item
  const data = getLast(dataManager)

  return (
    <OffCanvasContext.Provider
      value={{
        show: handleShow,
        close: handleClose
      }}
    >
      {children}

      <OffCanvas
        context={data && data.context}
        headerText={(data && data.title) || ''}
        lockScrollOnOpen
        overlay
        placement={options && options.placement}
        show={!!visibilityManager.length}
        toggleShow={handleClose}
        transitionDuration={DURATION}
        width={options && options.width}
      >
        {dataManager.map((d, i) => (
          <StyledWrapper key={i} show={i + 1 === dataManager.length}>
            {d.content}
          </StyledWrapper>
        ))}
      </OffCanvas>
    </OffCanvasContext.Provider>
  )
}

const StyledWrapper = styled.div`
  ${({ show }) => !show && 'display:none'}
`
