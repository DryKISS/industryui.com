/**
 * Molecules - OffCanvas
 */

// React
import React, { useState, useEffect } from 'react'
import { any, bool, func, number, oneOf, string } from 'prop-types'

// UI
import { CONTEXT } from '../../../'
import { OffCanvasDiv, OffCanvasHeader, OffCanvasContent, OffCanvasOverlay } from '../'

export const OffCanvasComponent = ({
  closeOnOverlayClick,
  context,
  variant,
  children,
  hasAvatar,
  headerText,
  headerContent,
  height,
  overlay,
  overlayOpacity,
  placement,
  show,
  toggleShow,
  transitionDuration,
  width
}) => {
  const [initialState, setInitialState] = useState(false)

  useEffect(() => {
    if (show) setTimeout(() => setInitialState(true), 1)
    else setInitialState(false)
  }, [show])

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      toggleShow(false)
    }
  }

  return (
    <>
      {overlay && (
        <OffCanvasOverlay
          duration={transitionDuration}
          onClick={handleOverlayClick}
          opacity={overlayOpacity}
          show={initialState}
        />
      )}

      <OffCanvasDiv
        data-cy='offCanvas'
        duration={transitionDuration}
        height={height}
        placement={placement}
        show={initialState}
        width={width}
      >
        <OffCanvasHeader
          hasAvatar={hasAvatar}
          context={context}
          variant={variant}
          data-cy='offCanvasHeader'
          onClose={e => toggleShow(false)}
          title={headerText}
          headerContent={headerContent}
        />

        <OffCanvasContent>{children}</OffCanvasContent>
      </OffCanvasDiv>
    </>
  )
}

OffCanvasComponent.propTypes = {
  context: oneOf(Object.values(CONTEXT)),
  container: any,
  closeOnOverlayClick: bool,
  headerText: string.isRequired,
  lockScrollOnOpen: bool,
  overlay: bool,
  overlayOpacity: number,
  placement: oneOf(['top', 'right', 'bottom', 'left']),
  show: bool.isRequired,
  toggleShow: func.isRequired,
  transitionDuration: number,
  width: string
}

OffCanvasComponent.defaultProps = {
  closeOnOverlayClick: true,
  context: 'secondary',
  overlayOpacity: 0.3,
  placement: 'right',
  transitionDuration: 300,
  width: '30vw',
  hasAvatar: false
}
