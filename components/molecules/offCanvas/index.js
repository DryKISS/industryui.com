// React
import React from 'react'
import { createPortal } from 'react-dom'
import { string, number, bool, func, instanceOf } from 'prop-types'
import styled from 'styled-components'
import { CloseIcon } from './icons'

const OffCanvasDiv = styled.div`
  box-shadow: ${({show}) => show ? '-5px 5px 22px -15px rgba(0,0,0,0.75)' : 'none'};
  position: absolute;
  top: 0;
  right: 0;
  width: ${({width}) => width};
  height: 100vh;
  background-color: #fff;
  transform: ${({width, show}) => `translateX(${show ? 0 : width})`};
  transition: 375ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
  will-change: transform;
`

const OffCanvasHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 15px 15px 10px 30px;
  font-weight: 700;
  letter-spacing: 0.5px;
  background-color: ${({theme: { COLOUR }}) => COLOUR.primary};

`

const OffCanvasComponent = ({
  width,
  headerText,
  children,
  show,
  toggleShow
}) => {
  return (
    <OffCanvasDiv show={show} width={width}>
      <OffCanvasHeader>
        {headerText}
        <CloseIcon onClick={(e) => toggleShow(false)} />
      </OffCanvasHeader>
      {children}
    </OffCanvasDiv>
  )
}

export const OffCanvas = (props) => {
  return createPortal(
    <OffCanvasComponent {...props} />
  , props.container)
}

OffCanvas.propTypes = {
  headerText: string.isRequired,
  width: string,
  show: bool.isRequired,
  toggleShow: func.isRequired,
  container: instanceOf(Element)
}

OffCanvas.defaultProps = {
  width: '400px',
  container: document.body
}