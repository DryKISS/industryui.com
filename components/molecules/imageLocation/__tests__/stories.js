/**
 * Components - Molecules  Image Location
 */

// React
import React from 'react'

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { object } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// UI
import {
  Alert,
  Button,
  Form,
  ImageLocation,
  ImageLocationFormElement,
  RawIcons
} from '../../../'
import Readme from '../README.md'

// Data
import { Item } from '../__mocks__/itemFloor'

export default {
  args: {
    customIcon: null,
    initialCoordinates: {
      x: 42,
      y: 41
    },
    animation: 'none',
    markerColour: '#ff0000',
    withInitialCoordinates: false
  },
  argTypes: {
    customIcon: {
      control: { type: 'select', options: Object.keys(RawIcons) }
    },
    animation: {
      control: { type: 'select', options: ['blinker', 'none'] }
    },
    markerColour: { control: { type: 'color' } }
  },
  title: 'Molecules/ImageLocation',
  component: ImageLocation,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const BaseComponent = (props = {}) => {
  const { args,markers } = props

  const defaultProps = {
    coordinatesChange: (coordinates) => {
      console.info('Coordinates', coordinates)
    },
    ...(args.withInitialCoordinates && {
      initialCoordinates: args.initialCoordinates
    }),
    item: Item,
    customIcon: args.customIcon,
    locationChange: 'change',
    ...(markers && { markers }),
  }

  const markerStyles = {
    animation: args.animation,
    borderRadius: '50%',
    color: args.markerColour,
    height: '20px',
    width: '20px'
  }

  return <ImageLocation markerStyles={markerStyles} {...defaultProps} />
}

export const main = (args) => <BaseComponent args={args} />
export const withMarkers = args => (
  <BaseComponent
    markers={[
      {
        icon: 'circle',
        x: 50,
        y: 50,
        colour: 'red'
      },
      {
        icon: 'bell',
        x: 50,
        y: 10,
        colour: 'blue'
      }
    ]}
    args={args}
  />
)
export const UsedInForm = () => {
  const schema = object().shape({
    imageLocationData: object().required()
  })

  const { control, errors, handleSubmit, setValue } = useForm({
    resolver: yupResolver(schema)
  })

  const onFormSubmit = (data) => {
    console.info(data)
  }

  return (
    <Form handleSubmit={handleSubmit((data) => onFormSubmit(data))}>
      <ImageLocationFormElement
        item={Item}
        control={control}
        errors={errors}
        setValue={setValue}
      />
      {errors.imageLocationData && (
        <Alert
          content={
            errors.imageLocationData.type &&
            errors.imageLocationData.type + ' or please select a location'
          }
        />
      )}
      <Button type="submit">submit form</Button>
    </Form>
  )
}
