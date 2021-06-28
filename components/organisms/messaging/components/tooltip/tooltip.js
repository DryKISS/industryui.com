import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const Tooltip = ({ delay, content, direction, children }) => {
  let timeout
  const [active, setActive] = useState(false)
  const [show, setShow] = useState(false)

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true)
      setTimeout(() => {
        setShow(true)
      }, 0)
    }, delay || 100)
  }

  const hideTip = () => {
    clearInterval(timeout)
    setShow(() => false)
    setActive(() => false)
  }
  const dir = direction || 'top'
  return (
    <StyledWrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
      {children}
      {active && (
        <ContentWrapper
          show={show}
          top={dir === 'top'}
          left={dir === 'left'}
          right={dir === 'right'}
          bottom={dir === 'bottom'}
        >
          {content}
        </ContentWrapper>
      )}
    </StyledWrapper>
  )
}

export default Tooltip

const StyledWrapper = styled.div`
  --tooltip-background-color: ${({ theme }) => theme.MESSAGING.tooltipBackground ?? '#F2F2F2'};
  --tooltip-margin: 8px;
  --tooltip-arrow-size: 6px;
  display: inline-block;
  position: relative;
`

const ContentWrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  background: var(--tooltip-background-color);
  left: 50%;
  line-height: 1;
  opacity: 0;
  position: absolute;
  padding: 6px;
  transform: translateX(-50%);
  transition: opacity 0.1s ease-in;
  white-space: nowrap;
  ${({ show }) => (show === true ? 'opacity:1;' : 'opacity:0;')}
  z-index: 100;
  /* CSS border triangles */
  /*&::before {
    border-width: var(--tooltip-arrow-size);
    border: solid transparent;
    content: ' ';
    height: 0;
    left: 50%;
    position: absolute;
    pointer-events: none;
    margin-left: calc(var(--tooltip-arrow-size) * -1);
    width: 0;
  }*/

  ${({ top }) =>
    top &&
    css`
      top: calc(var(--tooltip-margin) * -1);
      &::before {
        border-top-color: var(--tooltip-background-color);
        top: 100%;
      }
    `}
  ${({ bottom }) =>
    bottom &&
    css`
      bottom: calc(var(--tooltip-margin) * -1);
      &::before {
        bottom: 100%;
        border-bottom-color: var(--tooltip-background-color);
      }
    `}
  ${({ right }) =>
    right &&
    css`
      left: calc(100% + var(--tooltip-margin));
      top: 50%;
      transform: translateX(0) translateY(-50%);
      &::before {
        border-right-color: var(--tooltip-background-color);
        left: calc(var(--tooltip-arrow-size) * -1);
        top: 50%;
        transform: translateX(0) translateY(-50%);
      }
    `}

  ${({ left }) =>
    left &&
    css`
      left: auto;
      right: calc(100% + var(--tooltip-margin));
      top: 50%;
      transform: translateX(0) translateY(-50%);
      &::before {
        border-left-color: var(--tooltip-background-color);
        left: auto;
        right: calc(var(--tooltip-arrow-size) * -2);
        top: 50%;
        transform: translateX(0) translateY(-50%);
      }
    `}
`
