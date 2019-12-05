/**
 * Rating
 */

// React
import { number, string } from 'prop-types'

// Style
import styled from 'styled-components'

import { BACKGROUND } from '../../'

export const Rating = ({ className, context, value, size }) => {
  const rating = []
  for (let i = 0; i < size; i++) {
    rating.push(
      <StyledRating active={i + 1 <= value} className={className} context={context} key={i} />
    )
  }

  return rating
}

const StyledRating = styled.div`
  ${props => BACKGROUND(props)}
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

Rating.defaultProps = {
  context: 'primary',
  size: 5
}
