/**
 * Rating
 */

// React
import React, { Component } from 'react'
import { number } from 'prop-types'

// Style
import { withTheme } from 'styled-components'

export const Rating = withTheme(
  class Rating extends Component {
    static propTypes = {
      item: number.isRequired,
      size: number
    }

    static defaultProps = {
      size: 10
    }

    render = () => {
      const { className, item, size } = this.props

      let rating = []

      // Outer loop to create parent
      for (let i = 0; i < size; i++) {
        // const classes = cx(
        //   { 'Rating-active': i + 1 <= item },
        //   'Rating-item'
        // )

        // Create the parent and add the children
        rating.push(
          <div
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

// export default css`
//   .Rating-item {
//     background-color: #cdd2d6;
//     border-radius: .5rem;
//     display: inline-block;
//     height: 2rem;
//     margin-right: .5rem;
//     width: 10px;
//   }

//   .Rating-active {
//     background-color: #04D4DC;
//   }
//   `
