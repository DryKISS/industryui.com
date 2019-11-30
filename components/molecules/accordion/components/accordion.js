/**
 * Accordion
 */

import React, { useState, Children, cloneElement } from 'react'

import { array, node, object, string, bool } from 'prop-types'

import styled from 'styled-components'

import { AccordionItem } from '../../'

const renderItem = ({ body, context, title }, index, current, handleCurrent) => {
  return (
    <AccordionItem
      key={index}
      context={context}
      open={current.includes(index)}
      title={title}
      handleOpen={() => handleCurrent(index)}
    >
      {body}
    </AccordionItem>
  )
}

export const Accordion = ({ children, className, data, style, closeOthersOnOpen }) => {
  const initialOpen = children ? children.findIndex(_ => _.props.open) : data.findIndex(_ => _.open)
  const [current, setCurrent] = useState(initialOpen > -1 ? [initialOpen] : [])
  const handleCurrent = index => {
    setCurrent(prev => {
      let temp = []
      if (closeOthersOnOpen) {
        if (prev.includes(index)) temp = []
        else temp = [index]
      } else {
        if (prev.includes(index)) temp = prev.filter(_ => _ !== index)
        else temp = [...prev, index]
      }
      return temp
    })
  }
  return (
    <StyledAccordion className={className} style={style}>
      {children
        ? Children.map(children, (child, index) => {
            return cloneElement(child, {
              index,
              open: current.includes(index),
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
  closeOthersOnOpen: bool,
  data: array,
  style: object
}
