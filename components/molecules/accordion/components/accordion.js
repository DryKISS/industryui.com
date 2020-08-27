/**
 * Accordion
 */

import React, { useState, Children, cloneElement, useRef, useCallback } from "react"

import { array, node, object, string, bool } from "prop-types"

import styled from "styled-components"

import { AccordionItem } from "../../"
import { RandomKey } from "components/utils/rand"

export const Accordion = ({ children, className, data, style, closeOthersOnOpen }) => {
  const renderItem = useCallback(
    ({ body, context, title }, index, current, handleCurrent, elementKey) => {
      return (
        <AccordionItem
          key={elementKey}
          context={context}
          open={current.includes(index)}
          title={title}
          handleOpen={() => handleCurrent(index)}
        >
          {body}
        </AccordionItem>
      )
    },
    []
  )

  const initialOpen = children
    ? children.findIndex((_) => _.props.open)
    : data.findIndex((_) => _.open)
  const [current, setCurrent] = useState(initialOpen > -1 ? [initialOpen] : [])

  const { current: randomKeys } = useRef((children || data).map((item, index) => RandomKey()))

  const handleCurrent = (index) => {
    setCurrent((prev) => {
      let temp = []
      if (closeOthersOnOpen && !prev.includes(index)) {
        temp = [index]
      } else {
        if (prev.includes(index)) temp = prev.filter((_) => _ !== index)
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
              handleOpen: (index) => handleCurrent(index),
            })
          })
        : data.map((item, index) =>
            renderItem(item, index, current, handleCurrent, randomKeys[index])
          )}
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
  style: object,
}
