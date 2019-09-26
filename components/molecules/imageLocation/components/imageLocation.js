/**
 * ImageLocation
 */

// React
import React, { useState, useEffect } from 'react'
import { array, object, string } from 'prop-types'

import styled from 'styled-components'

// UI
import { Select } from '../../../'

export const ImageLocation = ({ properties, className, style }) => {

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
    <LocationWrapper className={className} style={style}>
      <Select label="Property" options={options} change={handlePropertyChange} />
    </LocationWrapper>
  );
};

const LocationWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  padding: 20px;
`

ImageLocation.propTypes = {
  properties: array.isRequired,
  className: string,
  style: object
}
