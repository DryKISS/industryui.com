/**
 * Image Location FormElement
 */

// React
import React from 'react'
import { func, object } from 'prop-types'

// React Hook Form
import { Controller } from 'react-hook-form'

// Style
import styled, { keyframes } from 'styled-components'

// UI
import ImageLocation from '../imageLocation'
import propTypes from '../props'

const elementName = 'imageLocationData'

const ImageLocationFormElement = ({ control, errors, setValue, ...props }) => {
  return (
    <ControllerWrapper className={`${errors && errors[elementName] && 'hasError'}`}>
      <Controller
        as={ImageLocation}
        control={control}
        coordinatesChange={(imageLocationData) => {
          setValue(elementName, imageLocationData)
        }}
        name={elementName}
        {...props}
      />
    </ControllerWrapper>
  )
}

const imageAllert = keyframes`
  from {
    filter: invert(0);
  }
  to {
    filter: invert(1);
  }
`

const ControllerWrapper = styled.div`
  &.hasError {
    box-shadow: 0 0 4px red;
    animation: ${imageAllert} 0.2s linear 2;
  }
`

ImageLocationFormElement.propTypes = {
  ...propTypes,
  setValue: func.isRequired,
  control: object.isRequired
}

export default ImageLocationFormElement
