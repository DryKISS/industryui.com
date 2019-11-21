// React
import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { any, bool, func, oneOf, string } from 'prop-types'
import styled from 'styled-components'
import { Close, CONTEXT } from '../../'

const OffCanvasDiv = styled.div`
  box-shadow: ${({ show }) => (show ? '-5px 5px 22px -15px rgba(0,0,0,0.75)' : 'none')};
  border-left: ${({ show }) => (show ? 'none' : '1px solid #cecece')};
  position: fixed;
  top: 0;
  right: 0;
  width: ${({ width }) => width};
  height: 100vh;
  background-color: #fff;
  transform: ${({ width, show }) => `translateX(${show ? 0 : width})`};
  transition: transform 375ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
  will-change: transform;
  z-index: 9999;
`

const OffCanvasHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 1rem 1rem 1rem 1.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  background-color: ${({ context, theme: { COLOUR } }) => COLOUR[context]};
`

const OffCanvasContent = styled.div`
  position: relative;
  padding: 0.5rem;
`

const OffCanvasComponent = ({ context, width, headerText, children, show, toggleShow }) => {
  return (
    <OffCanvasDiv show={show} width={width}>
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
  show: bool.isRequired,
  toggleShow: func.isRequired,
  width: string
}

OffCanvas.defaultProps = {
  context: 'primary',
  width: '30vw'
}
