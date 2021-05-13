/**
 * Molecules - OffCanvas
 */

// React
import React, { useState, useEffect } from 'react'
import { bool, func, node, number, oneOf, string } from 'prop-types'

// UI
import OffCanvasDiv from './container'
import OffCanvasHeader from './header'
import OffCanvasContent from './content'
import OffCanvasOverlay from './overlay'
import THEME_CONTEXT from '../../../constants/context'

const OffCanvasComponent = ({
  children,
  closeOnOverlayClick,
  context,
  hasAvatar,
  headerText,
  headerContent,
  height,
  overlay,
  overlayOpacity,
  placement,
  show,
  submit,
  toggleShow,
  transitionDuration,
  variant,
  width
}) => {
  const [initialState, setInitialState] = useState(false)

  useEffect(() => {
    if (show) {
      setTimeout(() => setInitialState(true), 1)
    } else {
      setInitialState(false)
    }
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
        data-cy="offCanvas"
        duration={transitionDuration}
        height={height}
        placement={placement}
        show={initialState}
        width={width}
      >
        <OffCanvasHeader
          context={context}
          hasAvatar={hasAvatar}
          headerContent={headerContent}
          onClose={(e) => toggleShow(false)}
          submit={submit}
          title={headerText}
          variant={variant}
        />

        <OffCanvasContent>{children}</OffCanvasContent>
      </OffCanvasDiv>
    </>
  )
}

OffCanvasComponent.propTypes = {
  children: node,
  closeOnOverlayClick: bool,
  context: oneOf(Object.values(THEME_CONTEXT)),
  hasAvatar: bool,
  headerText: string.isRequired,
  headerContent: string,
  height: string,
  overlay: bool,
  overlayOpacity: number,
  placement: oneOf(['top', 'right', 'bottom', 'left']),
  show: bool.isRequired,
  submit: bool,
  toggleShow: func.isRequired,
  transitionDuration: number,
  variant: string,
  width: string
}

OffCanvasComponent.defaultProps = {
  closeOnOverlayClick: true,
  context: 'secondary',
  hasAvatar: false,
  overlay: true,
  overlayOpacity: 0.3,
  placement: 'right',
  submit: true,
  transitionDuration: 300,
  width: '30vw'
}

export default OffCanvasComponent
