/**
 * Components - Molecules - Image Location
 */

// React
import React from 'react'

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { object } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// UI
import Alert from '../../alert/alert'
import Button from '../.././../atoms/button/button/button'
import Form from '../../../form/form/form'
import ImageLocation from '../imageLocation'
import ImageLocationFormElement from '../components/imageLocationFormElement'
import randomFloat from '../../../utils/randomFloat'
import { iconNameList } from '../../../icons/rawIcons'
import Readme from '../README.md'

// Data
import { Item, SvgTest } from '../__mocks__/itemFloor'

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
      control: { type: 'select', options: iconNameList }
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
  const { args, item, initialZoomLevel, markers, maxZoomLevel, onMarkerClick } = props

  const defaultProps = {
    coordinatesChange: (coordinates) => {
      console.info('Coordinates', coordinates)
    },
    ...(args.withInitialCoordinates && {
      initialCoordinates: args.initialCoordinates
    }),
    item: item ?? Item,
    customIcon: args.customIcon,
    locationChange: 'change',
    ...(initialZoomLevel && { initialZoomLevel }),
    ...(maxZoomLevel && { maxZoomLevel }),
    ...(markers && { markers }),
    ...(onMarkerClick && { onMarkerClick })
  }

  const markerStyles = {
    animation: args.animation,
    borderRadius: '50%',
    color: args.markerColour,
    height: '20px',
    width: '20px'
  }

  return <ImageLocation autoCloseMarkerPopup markerStyles={markerStyles} {...defaultProps} />
}

export const main = (args) => <BaseComponent args={args} />
export const withMarkers = (args) => (
  <BaseComponent
    markers={[
      {
        icon: 'circle',
        x: 50,
        y: 12,
        colour: 'red'
      },
      {
        icon: 'bell',
        x: 30,
        y: 50,
        colour: 'blue'
      }
    ]}
    args={args}
  />
)
export const withSvgAsMainImage = (args) => {
  const handleMarkerClick = (markerData) => {
    console.info(markerData)
  }

  const markers = []

  for (let i = 0; i <= 1000; i++) {
    markers.push({
      icon: 'circle',
      popupComponent: <div>icon {i}</div>,
      x: randomFloat({ minimum: 0, maximum: 100 }),
      y: randomFloat({ minimum: 0, maximum: 100 }),
      colour: 'magenta'
    })
  }

  return (
    <BaseComponent
      item={SvgTest}
      initialZoomLevel={2}
      maxZoomLevel={14}
      markers={markers}
      onMarkerClick={handleMarkerClick}
      args={args}
    />
  )
}
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
      <ImageLocationFormElement item={Item} control={control} errors={errors} setValue={setValue} />
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
