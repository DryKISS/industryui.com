/**
 * Components - Molecules - Modal
 */

// React
import React from 'react'
import ReactDOM from 'react-dom'
import { node, func, bool } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import CloseIcon from '../../icons/components/cross'

const Modal = ({
  open,
  showCloseIcon,
  closeOnBackgroundClick,
  removeChildrenWhenUnmounted,
  onClose,
  children
}) => {
  const closeIcon = showCloseIcon ? (
    <IconContainer onClick={onClose}>
      <CloseIcon colour="white" />
    </IconContainer>
  ) : (
    <></>
  )

  const handleBgClick = (event) => {
    event.preventDefault()

    if (event.target === event.currentTarget) {
      closeOnBackgroundClick && onClose()
    }
  }

  const childs = () => {
    if (removeChildrenWhenUnmounted) {
      if (open) {
        return children
      }
      return <></>
    }

    return children
  }

  const modalMarkup = (
    <ModalBackground open={open} onClick={handleBgClick}>
      <ModalWrapper>
        {closeIcon}
        {childs()}
      </ModalWrapper>
    </ModalBackground>
  )

  return ReactDOM.createPortal(modalMarkup, document.body)
}

const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease-in-out;
  ${({ open }) => `
	opacity: ${open ? '1' : '0'};
	pointer-events:${open ? 'initial' : 'none'}
	`}
`

const ModalWrapper = styled.div`
  max-height: 95vh;
  z-index: 999999;
  overflow: auto;
`

const IconContainer = styled.div`
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5rem;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1;
`

Modal.propTypes = {
  children: node.isRequired,
  closeOnBackgroundClick: bool,
  onClose: func,
  open: bool,
  showCloseIcon: bool,
  removeChildrenWhenUnmounted: bool
}

Modal.defaultProps = {
  onClose: null,
  showCloseIcon: true,
  closeOnBackgroundClick: true,
  removeChildrenWhenUnmounted: true
}

export default Modal
