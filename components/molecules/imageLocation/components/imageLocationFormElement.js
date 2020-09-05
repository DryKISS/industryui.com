/**
 * Image Location
 */

// React
import React from 'react'
import { func, object } from 'prop-types'

// Style
// import styled from 'styled-components'
import { Controller } from 'react-hook-form'
// UI
import { ImageLocation } from './imageLocation'
import { ImageLocationProps } from './props'

export const ImageLocationFormElement = ({ setValue, control, ...props }) => {
  return (
    <Controller
      {...props}
      as={ImageLocation}
      control={control}
      coordinatesChange={imageLocationData => {
        setValue('imageLocationData', imageLocationData)
      }}
      name='imageLocationData'
      rules={{ required: true }}
    />
  )
}
ImageLocationFormElement.propTypes = {
  ...ImageLocationProps,
  setValue: func.isRequired,
  control: object.isRequired
}
