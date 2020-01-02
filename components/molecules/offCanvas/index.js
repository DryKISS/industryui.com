// React
import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { any, bool, func, oneOf, string } from 'prop-types'
import { Close, CONTEXT } from '../../'

// Components
import { OffCanvasDiv, OffCanvasHeader, OffCanvasContent } from './components'

const OffCanvasComponent = ({
  context,
  children,
  headerText,
  placement,
  show,
  toggleShow,
  width
}) => {
  return (
    <OffCanvasDiv show={show} width={width} placement={placement}>
      <OffCanvasHeader context={context}>
        {headerText}
        <Close context='white' click={e => toggleShow(false)} />
      </OffCanvasHeader>
      <OffCanvasContent>{children}</OffCanvasContent>
    </OffCanvasDiv>
  )
}

export const OffCanvas = props => {
  const [mounted, setMounted] = useState(false)
  let container = document.body

  useEffect(() => {
    container = props.container || container
    setMounted(true)
  }, [])

  return mounted ? createPortal(<OffCanvasComponent {...props} />, container) : null
}

OffCanvas.propTypes = {
  context: oneOf(Object.values(CONTEXT)),
  container: any,
  headerText: string.isRequired,
  placement: oneOf('top', 'right', 'bottom', 'left'),
  show: bool.isRequired,
  toggleShow: func.isRequired,
  width: string
}

OffCanvas.defaultProps = {
  context: 'primary',
  placement: 'right',
  width: '30vw'
}
