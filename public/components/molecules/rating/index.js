/**
 * Rating
 */

// React
import React, { Component } from 'react'
import { number } from 'prop-types'

// Style
import styled, { withTheme } from 'styled-components'

export const Rating = withTheme(
  class Rating extends Component {
    static propTypes = {
      item: number.isRequired,
      size: number
    }

    static defaultProps = {
      size: 5
    }

    render = () => {
      const { className, item, size } = this.props
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
  }
)

// Style
const StyledRating = styled.div`
  background-color: ${props => props.active ? props.theme.COLOUR.secondary : props.theme.COLOUR.light};
  border-radius: .5rem;
  display: inline-block;
  height: 15px;
  margin-right: .25rem;
  width: 15px;
`
