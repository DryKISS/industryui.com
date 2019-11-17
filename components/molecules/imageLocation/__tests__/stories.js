/**
 * Image Location
 */

// React
import React from 'react'

// Storybook
import { action } from '@storybook/addon-actions'

// Style
import styled from 'styled-components'

// UI
import { ImageLocation, Select, useChange } from '../../../'
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
  const INITIAL_STATE = {
    property: 2,
    floor: 2
  }

  const [change, form] = useChange(INITIAL_STATE)
  const { floor, property } = form

  return (
    <StyledPropertySelect>
      <Select
        change={change}
        id='property'
        label='Property'
        options={[{ text: 'Select property', value: '' }, ...properties]}
        value={property}
      />
      {property && (
        <ImageLocation
          change={change}
          locationChange={locationChange}
          id='floor'
          key={property}
          label='Floor'
          options={properties[property - 1].options}
          initial={floor}
        />
      )}
    </StyledPropertySelect>
  )
}

const StyledPropertySelect = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  padding: 20px;
`

export default {
  title: 'Molecules/ImageLocation',
  component: ImageLocation,
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
