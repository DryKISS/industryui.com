/**
 * ImageLocation
 */

// React
import React, { useState } from 'react'
import { array, func, string, object  } from 'prop-types'

import styled from 'styled-components'

// UI
import { Select } from '../../../'
import { FloorWrapper } from '../../'

export const ImageLocation = ({ properties, change }, props) => {

  const [property, setProperty] = useState(null);

  const options = [{ text: 'Select property', value: ''}];

  properties.map(p => {
    options.push({
      text: p.name,
      value: p.id
    });
  });

  const handlePropertyChange = (event) => {
    const selected = properties.find(p => p.id == event.target.value) || null;
    setProperty(selected);
  }

  return (
    <LocationWrapper {...props} >
      <Select label="Property" options={options} change={handlePropertyChange} />
      {property && <FloorWrapper key={property.id} property={property} change={change} />}
    </LocationWrapper>
  );
};

const LocationWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  padding: 20px;
  overflow-x: auto;
`

ImageLocation.propTypes = {
  change: func.isRequired,
  className: string,
  properties: array.isRequired,
  style: object
}
