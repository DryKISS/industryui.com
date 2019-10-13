/**
 * Tab
 */

// React
import { func, string, bool } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

export const Tab = ({
  activeTab,
  childClick,
  disabled,
  label,
  onClick
}) => {
  const handleClick = () => {
    onClick(label)
    childClick && childClick()
  }

  return (
    <StyledTab
      active={activeTab === label}
      disabled={disabled}
      onClick={handleClick}
    >
      {label}
    </StyledTab>
  )
}

const StyledTab = styled.li`
  ${({ theme }) => css`
    background-color: ${theme.TABS.colour};
    border: 1px solid ${theme.TABS.borderColour};
    border-top-left-radius: ${theme.TABS.borderRadius};
    border-top-right-radius: ${theme.TABS.borderRadius};
    color: ${theme.COLOUR.dark};
  `}

  ${({ active, theme }) => active && css`
    background-color: ${theme.TABS.activeColour};
    border: 1px solid ${theme.TABS.activeColour};
    border-bottom: 1px solid ${theme.COLOUR.primary};
    color: ${theme.COLOUR.white};
  `}

  ${({ active, theme }) => !active && css`
    cursor: pointer;
    &:hover {
      background-color: ${theme.TABS.hoverColour};
    }
  `}

  ${({ disabled, theme }) => disabled && css`
    background-color: ${theme.TABS.disabledColour};
    cursor: initial;
    &:hover {
      background-color: ${theme.TABS.disabledColour};
    }
  `}

  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: .5rem .75rem;
`

Tab.propTypes = {
  activeTab: string.isRequired,
  childClick: func,
  disabled: bool,
  label: string.isRequired,
  onClick: func.isRequired
}
