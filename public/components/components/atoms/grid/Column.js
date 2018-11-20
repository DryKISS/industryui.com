/**
 * Column
 */

// React
import React, { Component, Fragment } from 'react'
import cx from 'classnames'
import { bool, node, number, objectOf, oneOfType, string } from 'prop-types'

// Style
import styles from './Column.styles'

// Style
import { withTheme } from 'styled-components'

export const Column = withTheme(
  class Column extends Component {
    static propTypes = {
      children: node.isRequired,
      className: string,
      debug: bool,
      fluid: string,
      md: number,
      lg: number,
      style: objectOf(oneOfType([
        number,
        string
      ])),
      xl: number,
      xs: number
    }

    static defaultProps = {
      xs: null,
      md: null,
      lg: null,
      xl: null,
      style: {},
      debug: false
    }

    render () {
      const { children, className, debug, lg, md, style, xl, xs } = this.props

      // Number for each breakpoint divided by 100 will give the percentage at the correct breakpoint
      this.columns = lg ? [`Column-lg-${lg} `] : ''
      this.columns += md ? [`Column-md-${md} `] : ''
      this.columns += xl ? [`Column-xl-${xl} `] : ''
      this.columns += xs ? [`Column-xs-${xs}`] : ''

      const classes = cx(
        'Column',
        {
          'Column-debug': debug
        },
        className,
        this.columns
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
