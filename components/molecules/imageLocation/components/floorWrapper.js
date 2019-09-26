/**
 * Image Location
 */

 // React
import React, { useState } from 'react'
import { bool, string } from 'prop-types'

import styled from 'styled-components'

// UI
import { Select } from '../../../'
import { ImageWrapper } from '../../'

export const FloorWrapper = ({ property }) => {
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
      {floor && <ImageWrapper floor={floor} />}
    </StyledFloorWrapper>
  )
}

const StyledFloorWrapper = styled.div`

`

