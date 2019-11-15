/**
 * Stepper
 */

// React
import { object } from 'prop-types'

// UI
import { Icon } from '../../../'

// Style
import styled from 'styled-components'

export const StepperItem = ({ item }) => {
  return <StyledStepperItem>{item.label}</StyledStepperItem>
}

const StyledStepperItem = styled.li``

StyledStepperItem.propTypes = {
  item: object
}
