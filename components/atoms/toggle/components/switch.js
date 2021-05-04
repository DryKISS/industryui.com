/**
 * Toggle - Components - Switch
 */

// React
import React from 'react'
import { bool, func, oneOf } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

export const Switch = ({ context, disabled, handleToggle, size, toggled }) => {
  return (
    <StyledSwitchContainer
      context={context}
      disabled={disabled}
      onClick={disabled !== true ? handleToggle : () => {}}
      size={size}
      toggled={toggled}
    >
      <StyledSwitch size={size} toggled={toggled} />
    </StyledSwitchContainer>
  )
}

const StyledSwitchContainer = styled.div`
  align-items: center;
  background-color: ${({ context, theme, toggled }) =>
    toggled ? theme.COLOUR[context] : '#cbd5e0'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  justify-content: space-between;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  position: relative;
  transition: background-color 0.2s;

  ${({ size }) =>
    size === 'sm' &&
    css`
      border-radius: 40px;
      height: 20px;
      width: 40px;
    `}

  ${({ size }) =>
    size === 'md' &&
    css`
      border-radius: 60px;
      height: 30px;
      width: 60px;
    `}

  ${({ size }) =>
    size === 'lg' &&
    css`
      border-radius: 100px;
      height: 50px;
      width: 100px;
    `}
`

const StyledSwitch = styled.span`
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  left: 2px;
  position: absolute;
  top: 2px;
  transition: left 0.2s, transform 0.2s;

  ${({ toggled }) =>
    toggled &&
    `
      left: calc(100% - 2px);
      transform: translateX(-100%);
    `}

  ${({ size }) =>
    size === 'sm' &&
    css`
      border-radius: 16px;
      height: 16px;
      width: 16px;
    `}

  ${({ size }) =>
    size === 'md' &&
    css`
      border-radius: 26px;
      height: 26px;
      width: 26px;
    `}

  ${({ size }) =>
    size === 'lg' &&
    css`
      border-radius: 46px;
      height: 46px;
      width: 46px;
    `}
`

Switch.propTypes = {
  handleToggle: func,
  size: oneOf(['sm', 'md', 'lg']),
  toggled: bool
}
