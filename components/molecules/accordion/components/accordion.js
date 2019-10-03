/**
 * Accordion
 */

import React from 'react'

import { node, object, string } from 'prop-types'

import styled from 'styled-components'

export const Accordion = ({ children, className, style }) => {
  return (
    <StyledAccordion className={className} style={style}>
      {children}
    </StyledAccordion>
  )
}

const StyledAccordion = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`

Accordion.propTypes = {
  children: node.isRequired,
  className: string,
  style: object
}
