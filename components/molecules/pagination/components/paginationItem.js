/**
 * Pagination - Item
 */

import { bool, any, func, string } from 'prop-types'

// UI
import { Button, FONTSIZE } from '../../../'

// Style
import styled from 'styled-components'

export const PaginationItem = ({ active, context, disabled, label, onClick, size, ...props }) => {
  return (
    <StyledLi>
      <StyledButton
        active={active}
        context={context}
        onClick={onClick}
        disabled={disabled}
        size={size}
        {...props}
      >
        {label}
      </StyledButton>
    </StyledLi>
  )
}

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
  position: relative;
  cursor: ${({ active }) => (active ? 'unset' : 'pointer')};
  ${({ active }) => active && 'pointer-events: none;'}
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: ${({ active, context, theme }) => (active ? theme.COLOUR.white : theme.COLOUR[context])};
  background-color: ${({ theme, active, context }) =>
    active ? theme.COLOUR[context] : theme.COLOUR.white};
  border: 1px solid ${({ theme }) => theme.COLOUR.light};
  ${props => FONTSIZE(props)}
  border-radius: 0;
  &:hover {
    background-color: ${({ active, context, theme }) =>
      active ? theme.COLOUR[context] : theme.COLOUR.light};
    color: ${({ active, theme, context }) => (active ? theme.COLOUR.white : theme.COLOUR[context])};
    border: 1px solid ${({ theme }) => theme.COLOUR.light};
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
