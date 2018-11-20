/**
 * Container
 */
import React, { Component, Fragment } from 'react'
import cx from 'classnames'
import { bool, node, number, objectOf, oneOfType, string } from 'prop-types'

import styles from './Container.styles'

// Style
import { withTheme } from 'styled-components'

export const Container = withTheme(
  class Container extends Component {
    static propTypes = {
      children: node.isRequired,
      className: string,
      fluid: bool,
      style: objectOf(oneOfType([
        number,
        string
      ]))
    }

    static defaultProps = {
      fluid: false,
      style: {},
      component: 'div'
    };

    render () {
      const { children, className, fluid, style } = this.props

      const classes = cx(
        'Container',
        { 'Container-fluid': fluid },
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
