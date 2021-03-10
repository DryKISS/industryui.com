/**
 * Molecules - OffCanvas - Portal
 */

// React
import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { any, bool, func, number, oneOf, string } from 'prop-types'

// UI
import { OffCanvasComponent } from '../../../'
import { THEME_CONTEXT } from '../../../theme/constants/context'

export const OffCanvas = (props) => {
  const [mounted, setMounted] = useState(false)

  let container = document.body

  useEffect(() => {
    container = props.container || container

    if (!props.show) {
      setTimeout(() => {
        setMounted(false)

        if (props.lockScrollOnOpen) {
          document.documentElement.removeAttribute('style')
        }
      }, props.transitionDuration)
    } else {
      setMounted(true)

      // Lock body scroll when offCanvas is open
      if (props.lockScrollOnOpen) {
        document.documentElement.setAttribute('style', 'overflow: hidden;')
      }
    }
  }, [props.show])

  return mounted ? createPortal(<OffCanvasComponent {...props} />, container) : null
}

OffCanvas.propTypes = {
  closeOnOverlayClick: bool,
  container: any,
  context: oneOf(Object.values(THEME_CONTEXT)),
  handleSubmit: func,
  headerText: string.isRequired,
  lockScrollOnOpen: bool,
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

OffCanvas.defaultProps = {
  closeOnOverlayClick: true,
  context: 'secondary',
  overlay: true,
  overlayOpacity: 0.3,
  placement: 'right',
  submit: true,
  transitionDuration: 300,
  variant: 'extended',
  width: '30vw'
}
