/**
 * Accordion
 */

import React, { useState, Children, cloneElement } from 'react'

import { array, node, object, string } from 'prop-types'

import styled from 'styled-components'

import { AccordionItem } from '../../'

const renderItem = ({ body, context, title }, index, current, handleCurrent) => {
  return (
    <AccordionItem
      key={index}
      context={context}
      open={index === current}
      title={title}
      handleOpen={() => handleCurrent(index)}
    >
      {body}
    </AccordionItem>
  )
}

export const Accordion = ({ children, className, data, style }) => {
  const initialOpen = children ? children.findIndex(_ => _.props.open) : data.findIndex(_ => _.open)
  const [current, setCurrent] = useState(initialOpen > -1 ? initialOpen : -1)
  const handleCurrent = index => {
    setCurrent(prev => (prev === index ? -1 : index))
  }
  return (
    <StyledAccordion className={className} style={style}>
      {children
        ? Children.map(children, (child, index) => {
            return cloneElement(child, {
              index,
              open: index === current,
              handleOpen: index => handleCurrent(index)
            })
          })
        : data.map((item, index) => renderItem(item, index, current, handleCurrent))}
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
