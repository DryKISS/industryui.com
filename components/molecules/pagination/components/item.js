/**
 * Pagination - Item
 */

// React
import React, { memo } from 'react'
import { bool, any, func, string } from 'prop-types'

// UI
import { Button } from '../../../atoms/button/button/button'
import { themeFontSize } from '../../../theme/utils/fontSize'

// Style
import styled from 'styled-components'

export const PaginationItem = memo(({ active, context, disabled, label, onClick, size }) => {
  return (
    <StyledLi>
      <StyledButton
        active={active}
        context={context}
        onClick={onClick}
        disabled={disabled}
        size={size}
      >
        {label}
      </StyledButton>
    </StyledLi>
  )
})

const StyledLi = styled.li`
  display: inline;
  &:first-child button {
    margin-left: 0;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  &:last-child button {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
`

const StyledButton = styled(Button)`
  cursor: ${({ active }) => (active ? 'unset' : 'pointer')};
  ${({ active }) => active && 'pointer-events: none;'}
  background-color: ${({ theme, active, context }) =>
    active ? theme.COLOUR[context] : theme.COLOUR.white};
  border: 1px solid ${({ theme }) => theme.COLOUR.light};
  border-radius: 0;
  color: ${({ active, context, theme }) => (active ? theme.COLOUR.white : theme.COLOUR[context])};
  line-height: 1.25;
  margin-left: -1px;
  padding: 0.5rem 0.75rem;
  position: relative;
  ${props => themeFontSize(props)}
  &:hover {
    background-color: ${({ active, context, theme }) =>
      active ? theme.COLOUR[context] : theme.COLOUR.light};
    border: 1px solid ${({ theme }) => theme.COLOUR.light};
    color: ${({ active, theme, context }) => (active ? theme.COLOUR.white : theme.COLOUR[context])};
  }
`

PaginationItem.propTypes = {
  context: string,
  disabled: bool,
  label: any,
  onClick: func,
  size: string
}

PaginationItem.defaultProps = {
  context: 'secondary',
  size: 'md'
}
