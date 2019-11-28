/**
 * Rating
 */

// React
import { number, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const Rating = ({ className, item, size }) => {
  const rating = []

  for (let i = 0; i < size; i++) {
    rating.push(<StyledRating active={i + 1 <= item} className={className} item={item} key={i} />)
  }

  return rating
}

const StyledRating = styled.div`
  background-color: ${({ active, theme }) =>
    active ? theme.COLOUR.secondary : theme.COLOUR.light};
  border-radius: 0.25rem;
  display: inline-block;
  height: 15px;
  margin-right: 0.25rem;
  width: 15px;
`

Rating.propTypes = {
  className: string,
  item: number.isRequired,
  size: number
}

Rating.defaultProps = {
  size: 5
}
