/**
 * Image Location FormElement
 */

// React
import React from 'react'
import { func, object } from 'prop-types'
import { Controller } from 'react-hook-form'

// Style
import styled, { keyframes } from 'styled-components'

// UI
import { ImageLocation } from './imageLocation'
import { ImageLocationProps } from './props'
const elementName = 'imageLocationData'
export const ImageLocationFormElement = ({ control, errors, setValue, ...props }) => {
  console.log(errors)
  return (
    <ControllerWrapper className={`${errors && errors[elementName] && 'hasError'}`}>
      <Controller
        {...props}
        as={ImageLocation}
        control={control}
        coordinatesChange={imageLocationData => {
          setValue('imageLocationData', imageLocationData)
        }}
        name={elementName}
        rules={{ required: true }}
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
    border: 0.1rem solid red;
    animation: ${imageAllert} 0.2s linear 2;
  }
`
ImageLocationFormElement.propTypes = {
  ...ImageLocationProps,
  setValue: func.isRequired,
  control: object.isRequired
}
