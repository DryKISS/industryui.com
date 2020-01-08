// React
import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { any, bool, func, number, oneOf, string } from 'prop-types'

// UI
import { CONTEXT, OffCanvasComponent } from '../../../'

export const OffCanvas = props => {
  const [mounted, setMounted] = useState(false)
  let container = document.body

  useEffect(() => {
    container = props.container || container

    if (!props.show) {
      setTimeout(() => {
        setMounted(false)
        if (props.lockScrollOnOpen) document.documentElement.removeAttribute('style')
      }, props.transitionDuration)
    } else {
      setMounted(true)

      // Lock body scroll when offCanvas is open
      if (props.lockScrollOnOpen) {
        document.documentElement.setAttribute(
          'style',
          'width: 100%; position: fixed; top: 0px; right: 0; left: 0; overflow: hidden;'
        )
      }
    }
  }, [props.show])

  return mounted ? createPortal(<OffCanvasComponent {...props} />, container) : null
}

OffCanvas.propTypes = {
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

OffCanvas.defaultProps = {
  closeOnOverlayClick: true,
  context: 'primary',
  overlayOpacity: 0.3,
  placement: 'right',
  transitionDuration: 300,
  width: '30vw'
}
