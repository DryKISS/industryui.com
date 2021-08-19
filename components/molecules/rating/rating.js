/**
 * Rating
 */

// React
import React from 'react'
import { number, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import themeBackground from '../../utils/background/background'

const Rating = ({ className, context, value, size }) => {
  const rating = []
  for (let i = 0; i < size; i++) {
    rating.push(
      <StyledRating active={i + 1 <= value} className={className} context={context} key={i} />
    )
  }

  return rating
}

const StyledRating = styled.div`
  ${(props) => themeBackground(props)}
  border-radius: 0.25rem;
  display: inline-block;
  height: 15px;
  margin-right: 0.25rem;
  width: 15px;
  ${({ active }) => !active && 'opacity: 0.5;'}
`

Rating.propTypes = {
  className: string,
  context: string,
  value: number.isRequired,
  size: number
}
export default Rating

Rating.defaultProps = {
  context: 'primary',
  size: 5
}
