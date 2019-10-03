/**
 * Accordion Item
 */

import React, { useState } from 'react'

import { bool, string } from 'prop-types'

import { Icon } from '../../../'

import styled from 'styled-components'

export const AccordionItem = ({ open: initial, title, children, className }) => {
  const [open, setOpen] = useState(initial)

  return (
    <StyledAccordionItem className={className}>
      <Header className={open ? 'opened' : 'closed'} onClick={() => setOpen(!open)}>
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
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  color: #333;
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
  open: bool,
  title: string.isRequired
}

AccordionItem.default = {
  open: 'false'
}
