/**
 * Rating
 */

// React
import { number, string } from 'prop-types'

// Style
import styled from 'styled-components'

import { BACKGROUND } from '../../'

export const Rating = ({ className, context, item, size }) => {
  const rating = []
  for (let i = 0; i < size; i++) {
    rating.push(
      <StyledRating
        active={i + 1 <= item}
        className={className}
        context={context}
        item={item}
        key={i}
      />
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
`

Rating.propTypes = {
  className: string,
  context: string,
  item: number.isRequired,
  size: number
}

Rating.defaultProps = {
  context: 'primary',
  size: 5
}
