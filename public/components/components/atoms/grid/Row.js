/**
 * Row
 */

// React
import React, { Component, Fragment } from 'react'
import { node, number, objectOf, oneOfType, string } from 'prop-types'
import cx from 'classnames'

// Style
import styles from './Row.styles'

// Style
import { withTheme } from 'styled-components'

export const Row = withTheme(
  class Row extends Component {
    static propTypes = {
      children: node.isRequired,
      className: string,
      style: objectOf(oneOfType([
        number,
        string
      ]))
    }

    render () {
      const { children, className, style } = this.props

      const classes = cx(
        'Row',
        className
      )

      return (
        <Fragment>

          <div
            className={classes}
            children={children}
            style={style}
          />

          <style jsx>{styles}</style>

        </Fragment>
      )
    }
  }
)
