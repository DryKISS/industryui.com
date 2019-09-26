/**
 * Image Location
 */

 // React
import React, { useState } from 'react'
import { func, object } from 'prop-types'

import styled from 'styled-components'

// UI
import { Select } from '../../../'
import { ImageWrapper } from '../../'

export const FloorWrapper = ({ property, change }) => {
  const [floor, setFloor] = useState(null);

  const options = [{ text: 'Select floor', value: ''}];

  property.floors && property.floors.map(f => {
    options.push({
      text: f.name,
      value: f.id
    });
  });

  const handleFloorChange = (event) => {
    const selected = property.floors.find(p => p.id == event.target.value) || null;
    setFloor(selected);
  }

  return (
    <StyledFloorWrapper>
      <Select label="Floor" options={options} change={handleFloorChange} />
      {floor && <ImageWrapper property={property} floor={floor} change={change} />}
    </StyledFloorWrapper>
  )
}

const StyledFloorWrapper = styled.div`

`

FloorWrapper.propTypes = {
  change: func.isRequired,
  property: object.isRequired
}