import React from 'react'
import { bool, any, func, string } from 'prop-types'
import styled from 'styled-components'

import { Button, FONTSIZE } from '../../..'

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

PaginationItem.propTypes = {
  context: string,
  disabled: bool,
  label: any,
  onClick: func,
  size: string
}

PaginationItem.defaultProps = {
  context: 'primary',
  size: 'md'
}

const StyledLi = styled.li`
  display: inline;
`

const StyledButton = styled(Button)`
  position: relative;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: ${({ theme, active, context }) => (active ? theme.COLOUR.white : theme.COLOUR[context])};
  background-color: ${({ theme, active, context }) =>
    active ? theme.COLOUR[context] : theme.COLOUR.white};
  border: 1px solid ${({ theme }) => theme.COLOUR.light};
  ${props => FONTSIZE(props)};
  border-radius: 0;
  :hover {
    background-color: ${({ theme }) => theme.COLOUR.light};
    color: ${({ theme, context }) => theme.COLOUR[context]};
    border: 1px solid ${({ theme }) => theme.COLOUR.light};
  }
  :first-child {
    margin-left: 0;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  :last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
`
