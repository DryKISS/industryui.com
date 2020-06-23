/**
 * Image Location
 */

// React
import React, { useEffect, useState } from 'react'
import { array, bool, func, string, object } from 'prop-types'

import styled from 'styled-components'

// Form
import { useForm } from 'react-hook-form'

// UI
import { FormLabel, SelectField } from '../../../'
import { ImageWrapper } from '../../'

export const ImageLocation = ({ initial, label, coordinatesChange, itemChange, options, show }) => {
  const [item, setItem] = useState(null)
  const [coordinates, setCoordinates] = useState(null)

  const { register, watch } = useForm({
    defaultValues: {
      option: initial
    }
  })

  const option = watch('option')

  useEffect(() => {
    const selected = options.find(o => o.value === parseInt(option)) || null
    setItem(selected)
    itemChange && itemChange(selected)
    setCoordinates(null)
  }, [option])

  useEffect(() => {
    coordinatesChange && item && coordinatesChange({ coordinates, item })
  }, [coordinates])

  return (
    <StyledImageLocation show={show}>
      <FormLabel label={label}>
        <SelectField
          register={register}
          name='option'
          options={[{ text: `Select ${label}`, value: '' }, ...options]}
        />
      </FormLabel>

      {item && (
        <ImageWrapper coordinates={coordinates} item={item} setCoordinates={setCoordinates} />
      )}
    </StyledImageLocation>
  )
}

const StyledImageLocation = styled.div`
  overflow-x: auto;
  display: ${({ show }) => (show ? 'block' : 'none')};
`

ImageLocation.propTypes = {
  className: string,
  coordinatesChange: func,
  itemChange: func,
  options: array.isRequired,
  style: object,
  show: bool
}

ImageLocation.defaultProps = {
  show: true
}
