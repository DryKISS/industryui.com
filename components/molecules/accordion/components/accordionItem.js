/**
 * Accordion Item
 */

import React, { useState } from 'react'

import { bool, oneOf, string } from 'prop-types'

import { CONTEXT, Icon } from '../../../'

import styled from 'styled-components'

export const AccordionItem = ({ open: initial, title, children, className, context }) => {
  const [open, setOpen] = useState(initial)

  return (
    <StyledAccordionItem className={className}>
      <Header className={open ? 'opened' : 'closed'} onClick={() => setOpen(!open)} context={context || 'dark'}>
        {title} <HeaderIcon aria-hidden='true' context='info' icon={open ? 'chevron-up' : 'chevron-down'} />
      </Header>
      {open && <Content>{children}</Content>}
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
  color: ${({ context, theme }) => context === 'white' ? theme.COLOUR.primary : theme.COLOUR.white};
  border-bottom: 1px solid ${props => props.theme.COLOUR[props.context]};
  cursor: pointer;
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
`

const HeaderIcon = styled(Icon)`
  float: right;
`

const Content = styled.div`
  padding: 1.25rem;
`

AccordionItem.propTypes = {
  children: string.isRequired,
  className: string,
  context: oneOf(Object.values(CONTEXT)),
  open: bool,
  title: string.isRequired
}

AccordionItem.default = {
  context: 'dark',
  open: false
}
