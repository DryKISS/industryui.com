/**
 * Services - OffCanvas - Provider
 */

// React
import React, { useState } from 'react'

// Styled Components
import styled from 'styled-components'

// UI
import OffCanvas from '../../molecules/offCanvas/components/portal'
import OffCanvasContext from './context'

const DURATION = 300

const OffCanvasProvider = ({ children }) => {
  const [dataManager, setDataManager] = useState([])
  const [visibilityManager, setVisibilityManager] = useState([])

  const handleClose = () => {
    setVisibilityManager((prev) => {
      prev.pop()
      return [...prev]
    })

    // Prevent data to disappear suddenly on close
    setTimeout(
      () => {
        setDataManager((prev) => {
          prev.pop()
          return [...prev]
        })
      },
      dataManager.length === 1 ? DURATION : 0
    )
  }

  const handleShow = (data) => {
    if (data && data.content) {
      setVisibilityManager((prev) => [...prev, true])
      setDataManager((prev) => [...prev, data])
    } else {
      handleClose()
    }
  }

  // Get width and placement from first item
  const options = dataManager[0]

  // Get title and content from last item
  const data = dataManager[dataManager.length - 1]

  return (
    <OffCanvasContext.Provider
      value={{
        show: handleShow,
        close: handleClose
      }}
    >
      {children}

      <OffCanvas
        context={data?.context}
        handleSubmit={data?.handleSubmit}
        hasAvatar={data?.hasAvatar}
        headerContent={data?.headerContent}
        headerText={data?.title || ''}
        lockScrollOnOpen
        overlay
        overlayOpacity={data?.overlayOpacity}
        placement={options?.placement}
        submit={data?.submit}
        show={!!visibilityManager.length}
        toggleShow={handleClose}
        transitionDuration={DURATION}
        variant={data?.variant}
        width={options?.width}
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

export default OffCanvasProvider
