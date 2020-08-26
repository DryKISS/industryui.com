/**
 * Accordion
 */

// React
import React, { useState, Children, cloneElement } from 'react'
import { array, node, object, string, bool } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
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
      if (closeOthersOnOpen && !prev.includes(index)) {
        temp = [index]
      } else {
        if (prev.includes(index)) temp = prev.filter(_ => _ !== index)
        else temp = [...prev, index]
      }
      return temp
    })
  }

  const Body = () => {
    let map = {}

    if (children) {
      map = Children.map(children, (child, index) => {
        return cloneElement(child, {
          index,
          open: current.includes(index),
          handleOpen: index => handleCurrent(index)
        })
      })
    } else {
      map = data.map((item, index) => renderItem(item, index, current, handleCurrent))
    }

    return map
  }

  return (
    <StyledAccordion className={className} style={style}>
      <Body />
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
