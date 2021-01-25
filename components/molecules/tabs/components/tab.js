/**
 * Components - Molecules - Tabs - Components - Tab
 */

// React
import { useEffect, useRef } from 'react'
import { bool, func, object, oneOfType, string } from 'prop-types'

// UI
import { slugify } from '../../../'

// Style
import styled, { css } from 'styled-components'

export const Tab = ({
  activeTab,
  childClick,
  context,
  data,
  disabled,
  label,
  onClick,
  scrollToActiveTab
}) => {
  const tabRef = useRef(null)
  const isActive = activeTab === slugify(label)

  useEffect(() => {
    if (scrollToActiveTab && tabRef.current) {
      tabRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      })
    }
  }, [isActive])

  const handleClick = e => {
    if (isActive) {
      return
    }

    onClick && onClick(label)
    childClick && childClick()
  }

  return (
    <StyledTab
      active={isActive}
      context={context}
      {...data}
      disabled={disabled}
      onClick={handleClick}
      ref={isActive && scrollToActiveTab ? tabRef : null}
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
      cursor: not-allowed;
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

  min-width: fit-content;
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: .5rem .75rem;
`

Tab.propTypes = {
  activeTab: string.isRequired,
  childClick: func,
  context: oneOfType([bool, string]),
  data: object,
  disabled: bool,
  label: string.isRequired,
  onClick: oneOfType([bool, func]).isRequired,
  scrollToActiveTab: bool
}

Tab.defaultProps = {
  context: false,
  scrollToActiveTab: true
}
