/**
 * Image Location
 */

// React
import React from 'react'

// Storybook
import { action } from '@storybook/addon-actions'
import { Wrapper } from 'decorators'

// Form
import { useForm } from 'react-hook-form'

// UI
import { FormLabel, ImageLocation, SelectField } from '../../../'
import Readme from '../README.md'

// Data
import { Properties } from '../__mocks__/properties'

// Note: Images are imported here to make sure they are included in the bundle,
// but they are loaded using /static/media/ urls within property data
import '../__resources__/images/ground-floor.png'
import '../__resources__/images/first-floor.png'
import '../__resources__/images/second-floor.png'
import '../__resources__/images/third-floor.png'
import '../__resources__/images/fourth-floor.png'

const PropertySelect = ({ locationChange, properties }) => {
  const defaultValues = {
    property: 2,
    floor: 2
  }

  const { watch, register } = useForm({
    defaultValues
  })

  const floor = watch('floor')
  const property = watch('property')

  return (
    <>
      <FormLabel label='Property'>
        <SelectField
          register={register}
          name='property'
          options={[{ text: 'Select property', value: '' }, ...properties]}
        />
      </FormLabel>

      {property && (
        <ImageLocation
          locationChange={locationChange}
          key={property}
          label='Floor'
          options={properties[property - 1].options}
          initial={floor}
        />
      )}
    </>
  )
}

export default {
  title: 'Molecules/ImageLocation',
  component: ImageLocation,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <ImageLocation label='Option' locationChange={action('change')} options={Properties[1].options} />
)

export const preselected = () => (
  <ImageLocation
    initial={1}
    label='Option'
    locationChange={action('change')}
    options={Properties[1].options}
  />
)

export const multipleProperties = () => (
  <PropertySelect locationChange={action('change')} properties={Properties} />
)
