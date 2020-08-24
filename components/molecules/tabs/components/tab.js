/**
 * Tab
 */

// React
import React from 'react'
import { bool, func, oneOfType, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

export const Tab = ({ activeTab, childClick, context, disabled, label, onClick }) => {
  const handleClick = () => {
    onClick(label)
    childClick && childClick()
  }

  return (
    <StyledTab
      active={activeTab === label}
      context={context}
      disabled={disabled}
      onClick={handleClick}
    >
      {label}
    </StyledTab>
  )
}

const StyledTab = styled.li`
  ${({ context, theme }) => css`
    background-color: ${theme.TABS.colour};
    border-left: 1px solid ${theme.TABS.borderColour};
    border-bottom: 1px solid ${context ? theme.COLOUR[context] : theme.TABS.borderColour};
    border-top: 1px solid ${theme.TABS.borderColour};
  `}

  ${({ active, context, theme }) =>
    active &&
    css`
      background-color: ${theme.TABS.activeColour};
      border-bottom: 1px solid ${theme.COLOUR.primary};
    `}

  ${({ active, theme }) =>
    !active &&
    css`
      cursor: pointer;
    `}

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: ${theme.TABS.disabledColour};
      cursor: no-drop;
    `}

  &:hover {
    ${({ active, theme }) =>
      !active &&
      css`
        background-color: ${theme.TABS.hoverColour};
      `}

    ${({ disabled, theme }) =>
      disabled &&
      css`
        background-color: ${theme.TABS.disabledColour};
      `}
  }

  &:last-of-type {
    border-top-right-radius: ${({ theme }) => theme.TABS.borderRadius};
    border-top-left-radius: inherit;
    border-right: 1px solid ${({ theme }) => theme.TABS.borderColour};
  }

  &:first-child {
    border-top-left-radius: ${({ theme }) => theme.TABS.borderRadius};
    border-top-right-radius: inherit;
    border-right: 0px;
  }

  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: .5rem .75rem;
`

Tab.propTypes = {
  activeTab: string.isRequired,
  childClick: func,
  context: oneOfType([bool, string]),
  disabled: bool,
  label: string.isRequired,
  onClick: func.isRequired
}

Tab.defaultProps = {
  context: false
}
