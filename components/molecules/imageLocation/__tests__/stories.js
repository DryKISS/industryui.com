/**
 * Image Location
 */

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
  args: {
    initialCoordinates: {
      x: 42,
      y: 41
    },
    animation: 'none',
    markerColour: '#ff0000',
    withInitialCoordinates: false
  },
  argTypes: {
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
  const { args } = props

  const defaultProps = {
    coordinatesChange: coordinates => {
      console.info('Coordinates', coordinates)
    },
    ...(args.withInitialCoordinates && { initialCoordinates: args.initialCoordinates }),
    item: Item,
    locationChange: 'change'
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

export const main = args => <BaseComponent args={args} />

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
