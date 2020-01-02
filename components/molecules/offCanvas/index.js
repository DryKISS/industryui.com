// React
import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { any, bool, func, number, oneOf, string } from 'prop-types'
import { Close, CONTEXT } from '../../'

// Components
import { OffCanvasDiv, OffCanvasHeader, OffCanvasContent, OffCanvasOverlay } from './components'

const OffCanvasComponent = ({
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
    if (closeOnOverlayClick) toggleShow(false)
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

export const OffCanvas = props => {
  const [mounted, setMounted] = useState(false)
  let container = document.body
  useEffect(() => {
    container = props.container || container
    if (!props.show) setTimeout(() => setMounted(false), props.transitionDuration)
    else setMounted(true)
  }, [props.show])

  return mounted ? createPortal(<OffCanvasComponent {...props} />, container) : null
}

OffCanvas.propTypes = {
  context: oneOf(Object.values(CONTEXT)),
  container: any,
  closeOnOverlayClick: bool,
  headerText: string.isRequired,
  overlay: bool,
  overlayOpacity: number,
  placement: oneOf(['top', 'right', 'bottom', 'left']),
  show: bool.isRequired,
  toggleShow: func.isRequired,
  transitionDuration: number,
  width: string
}

OffCanvas.defaultProps = {
  closeOnOverlayClick: true,
  context: 'primary',
  overlayOpacity: 0.3,
  placement: 'right',
  transitionDuration: 300,
  width: '30vw'
}
