/**
 * Accordion Item
 */

// React
import React from 'react'
import { bool, oneOf, string, func, number } from 'prop-types'

// UI
import { CONTEXT } from '../../../'
import { Icon } from '../../../atoms/icon'

// Styled
import styled from 'styled-components'

export const AccordionItem = ({ children, className, context, handleOpen, index, open, title }) => {
  return (
    <StyledAccordionItem className={className}>
      <Header
        className={open ? 'opened' : 'closed'}
        onClick={() => handleOpen(index)}
        context={context || 'dark'}
      >
        {title}{' '}
        <HeaderIcon
          aria-hidden='true'
          context='white'
          icon={open ? 'chevron-up' : 'chevron-down'}
        />
      </Header>
      <Content className={open ? 'opened' : 'closed'}>{children}</Content>
    </StyledAccordionItem>
  )
}

const StyledAccordionItem = styled.div`
  &:last-child header.closed {
    border: 0;
  }
`

const Header = styled.header`
  background-color: ${({ context, theme }) => theme.COLOUR[context]};
  color: ${({ context, theme }) =>
    context === 'white' ? theme.COLOUR.primary : theme.COLOUR.white};
  border-bottom: 1px solid ${props => props.theme.COLOUR[props.context]};
  cursor: pointer;
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
`

const HeaderIcon = styled(Icon)`
  float: right;
`

const Content = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: all 500ms ease;
  box-sizing: border-box;
  &.opened {
    max-height: fit-content;
    padding: 1.25rem;
  }
`

AccordionItem.propTypes = {
  children: string.isRequired,
  className: string,
  context: oneOf(Object.values(CONTEXT)),
  handleOpen: func,
  index: number,
  open: bool,
  title: string.isRequired
}

AccordionItem.default = {
  context: 'dark',
  open: false
}
