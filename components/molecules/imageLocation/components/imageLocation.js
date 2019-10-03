/**
 * Image Location
 */

// React
import React, { useState } from 'react'
import { array, func, string, object } from 'prop-types'

import styled from 'styled-components'

// UI
import { Select } from '../../../'
import { ImageWrapper } from '../../'

export const ImageLocation = ({ change, label, options }, props) => {
  const [item, setItem] = useState(null)

  const handleItemChange = (event) => {
    const selected = options.find(o => o.value === event.target.value) || null
    setItem(selected)
  }

  return (
    <StyledImageLocation {...props}>
      <Select
        change={handleItemChange}
        label={label}
        options={[{ text: `Select ${label}`, value: '' }, ...options]}
      />
      {item && <ImageWrapper item={item} change={change} />}
    </StyledImageLocation>
  )
}

const StyledImageLocation = styled.div`
  overflow-x: auto;
`

ImageLocation.propTypes = {
  change: func.isRequired,
  className: string,
  options: array.isRequired,
  style: object
}
