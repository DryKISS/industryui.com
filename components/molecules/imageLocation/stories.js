/**
 * Image Location
 */

// React
import React, { useState } from 'react'

import styled from 'styled-components'

// Storybook
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// UI
import { Select } from '../../../'
import { ImageLocation } from '../../'
import Readme from './README.md'

// Data
import { Properties } from './__mocks__/properties'

// Note: Images are imported here to make sure they are included in the bundle, but they are loaded using /static/media/ urls within property data
import groundFloor from './__resources__/images/ground-floor.png'
import firstFloor from './__resources__/images/first-floor.png'
import secondFloor from './__resources__/images/second-floor.png'
import thirdFloor from './__resources__/images/third-floor.png'
import fourthFloor from './__resources__/images/fourth-floor.png'

const PropertySelect = ({ properties, change }) => {
  const [property, setProperty] = useState(null);

  const handlePropertyChange = (event) => {
    const selected = properties.find(p => p.value == event.target.value) || null;
    setProperty(selected);
  }

  return (
    <StyledPropertySelect>
      <Select label='Property' options={[{ text: 'Select property', value: ''}, ...properties]} change={handlePropertyChange} />
      {property && <ImageLocation key={property.value} label='Floor' options={property.options} change={change} />}
    </StyledPropertySelect>
  );
};

const StyledPropertySelect = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  padding: 20px;
`

storiesOf('Molecules/ImageLocation', module)
  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () => (
    <ImageLocation options={Properties[1].options} label='Option' change={action('position-change')} />
  ))

  .add('Multiple properties', () => (
    <PropertySelect properties={Properties} change={action('position-change')} />
  ))



