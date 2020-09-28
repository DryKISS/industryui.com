/**
 * Image Location FormElement
 */

import { func, object } from 'prop-types'
import { Controller } from 'react-hook-form'

// Style
import styled, { keyframes } from 'styled-components'

// UI
import { ImageLocation, ImageLocationProps } from '../../../'

const elementName = 'imageLocationData'

export const ImageLocationFormElement = ({ control, errors, setValue, ...props }) => {
  return (
    <ControllerWrapper className={`${errors && errors[elementName] && 'hasError'}`}>
      <Controller
        as={ImageLocation}
        control={control}
        coordinatesChange={imageLocationData => {
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
  ...ImageLocationProps,
  setValue: func.isRequired,
  control: object.isRequired
}
