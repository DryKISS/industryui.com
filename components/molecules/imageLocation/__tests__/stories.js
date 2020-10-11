/**
 * Image Location
 */

// Storybook
import { object, select } from '@storybook/addon-knobs'

// Yup
import { object as obj } from 'yup'

// UI
import {
  Alert,
  Button,
  Form,
  ImageLocation,
  ImageLocationFormElement,
  useForm,
  yupResolver
} from 'components'

import Readme from '../README.md'

// Data
import { Item } from '../__mocks__/itemFloor'

export default {
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
    locationChange: 'change'
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
    ),
    width: '20px'
  }

  return <ImageLocation markerStyles={markerStyles} {...defaultProps} />
}

export const main = () => <BaseComponent />

export const withCoordinatesStored = () => <BaseComponent initialCoordinates />

export const UsedInForm = () => {
  const schema = obj().shape({
    imageLocationData: obj().required()
  })

  const { control, errors, handleSubmit, setValue } = useForm({
    resolver: yupResolver(schema)
  })

  const onFormSubmit = data => {
    console.log(data)
  }

  return (
    <Form handleSubmit={handleSubmit(data => onFormSubmit(data))}>
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
    </Form>
  )
}
