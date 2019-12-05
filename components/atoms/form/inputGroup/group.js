/**
 * Input Group
 * Wraps the Input so we can append or prepend another element
 */

// React
import React from 'react'
import { string } from 'prop-types'

// Style
import styled from 'styled-components'

const findIndex = (startIndex, addonType, acc) => {
  const addonTypes = {
    prepend:
      acc[startIndex] && acc[startIndex].props.addonType === addonType
        ? findIndex(startIndex + 1)
        : startIndex,
    undefined:
      acc[startIndex - 1] && acc[startIndex - 1].props.addonType === 'append'
        ? findIndex(startIndex - 1)
        : startIndex
  }
  return addonTypes[addonType]
}

export const InputGroup = ({ children, size }) => {
  const reduceCallback = (acc, child) => {
    if (React.isValidElement(child)) {
      const {
        props: { addonType }
      } = child
      if (addonType === 'append') {
        acc.push(child)
      } else {
        const startIndex = addonType === 'prepend' ? 0 : acc.length
        const indexToInsert = findIndex(startIndex, addonType, acc)
        // insert at specific index
        acc.splice(indexToInsert, 0, child)
      }
    }
    return acc
  }

  const arrangedChildren = children.reduce(reduceCallback, [])

  return <StyledInputGroup className='Form-inputGroup' children={arrangedChildren} size={size} />
}

const StyledInputGroup = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
`

InputGroup.propTypes = {
  size: string
}

InputGroup.defaultProps = {
  size: 'md'
}
