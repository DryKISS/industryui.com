/**
 * Rating
 */

// React
import { number } from 'prop-types'

// Style
import styled from 'styled-components'

export const Rating = ({ className, item, size }) => {
  let rating = []

  for (let i = 0; i < size; i++) {
    rating.push(
      <StyledRating
        active={i + 1 <= item}
        className={className}
        item={item}
        key={i}
      />
    )
  }

  return rating
}

const StyledRating = styled.div`
  background-color: ${props => props.active ? props.theme.COLOUR.secondary : props.theme.COLOUR.light};
  border-radius: .5rem;
  display: inline-block;
  height: 15px;
  margin-right: .25rem;
  width: 15px;
`

Rating.propTypes = {
  item: number.isRequired,
  size: number
}

Rating.defaultProps = {
  size: 5
}
