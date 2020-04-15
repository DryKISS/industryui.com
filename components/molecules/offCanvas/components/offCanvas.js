/**
 * OffCanvas
 */

// React
import React, { useState, useEffect } from 'react'
import { any, bool, func, number, oneOf, string } from 'prop-types'

// Components
import { OffCanvasDiv, OffCanvasHeader, OffCanvasContent, OffCanvasOverlay } from '../'
import { Close, CONTEXT } from '../../../'

export const OffCanvasComponent = ({
  closeOnOverlayClick,
  context,
  children,
  headerText,
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
        duration={transitionDuration}
        height={height}
        placement={placement}
        show={initialState}
        width={width}
      >
        <OffCanvasHeader context={context}>
          {headerText}
          <Close context='white' click={e => toggleShow(false)} />
        </OffCanvasHeader>

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
  context: 'primary',
  overlayOpacity: 0.3,
  placement: 'right',
  transitionDuration: 300,
  width: '30vw'
}
