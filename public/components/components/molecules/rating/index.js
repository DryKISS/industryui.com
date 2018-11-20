/**
 * Rating
 */

// React
import React, { Component, Fragment } from 'react'
import { number } from 'prop-types'
import cx from 'classnames'

// Style
import styles from './styles'

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
      const { item, size } = this.props

      let rating = []

      // Outer loop to create parent
      for (let i = 0; i < size; i++) {
        const classes = cx(
          { 'Rating-active': i + 1 <= item },
          'Rating-item'
        )

        // Create the parent and add the children
        rating.push(
          <Fragment key={i}>
            <div className={classes} />
            <style jsx>{styles}</style>
          </Fragment>
        )
      }

      return rating
    }
  }
)
