/**
 * Accordion
 */

import React from 'react'

import { array, node, object, string } from 'prop-types'

import styled from 'styled-components'

import { AccordionItem } from '../../'

const renderItem = ({ body, context, open, title }, index) => {
  return (
    <AccordionItem key={index} context={context} open={open} title={title}>
      {body}
    </AccordionItem>
  )
}

export const Accordion = ({ children, className, data, style }) => {
  return (
    <StyledAccordion className={className} style={style}>
      {children || data.map((item, index) => renderItem(item, index))}
    </StyledAccordion>
  )
}

const StyledAccordion = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`

Accordion.propTypes = {
  children: node,
  className: string,
  data: array,
  style: object
}
