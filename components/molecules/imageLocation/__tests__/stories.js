/**
 * Image Location
 */

// React
import React from 'react'
import { object as obj } from 'yup'
// Storybook
import { object, select, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Wrapper } from 'decorators'
// UI

import Readme from '../README.md'

// Data
import { Item } from '../__mocks__/itemFloor'
import { useForm } from 'react-hook-form'
import { Alert, Button, ImageLocation, ImageLocationFormElement } from '../../../'

export default {
  title: 'Molecules/ImageLocation',
  component: ImageLocation,
  decorators: [withKnobs, Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    coordinatesChange: coordinates => {
      console.info('Coordinates', coordinates)
    },
    initialCoordinates:
      props.initialCoordinates &&
      object('Initial Coordinates', {
        x: 42,
        y: 41
      }),
    item: Item,
    locationChange: action('change')
  }

  const markerStyles = {
    animation: select(
      'Animation',
      {
        NoAnimation: '',
        Blinker: 'blinker'
      },
      'red'
    ),
    borderRadius: '50%',
    color: select(
      'Color',
      {
        Red: 'red',
        Blue: 'blue',
        Green: 'green',
        Orange: 'orange'
      },
      'red'
    ),
    height: '20px',
    width: '20px',
    shape: select(
      'Shape',
      {
        Yes: {
          icon: 'images',
          prefix: 'fas'
        },
        No: ''
      },
      ''
    )
  }

  return <ImageLocation markerStyles={markerStyles} {...defaultProps} />
}

export const main = () => <BaseComponent />

export const withCoordinatesStored = () => <BaseComponent initialCoordinates />

export const UsedInForm = () => {
  const schema = obj().shape({
    imageLocationData: obj().required()
  })
  const { handleSubmit, control, setValue, errors } = useForm({ validationSchema: schema })
  const onFormSubmit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(data => onFormSubmit(data))}>
      <ImageLocationFormElement item={Item} control={control} errors={errors} setValue={setValue} />
      {errors.imageLocationData && (
        <Alert
          content={
            errors.imageLocationData.type &&
            errors.imageLocationData.type + ' or please select a location'
          }
        />
      )}
      <Button type='submit'>submit form</Button>
    </form>
  )
}
