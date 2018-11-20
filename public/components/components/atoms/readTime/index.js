/**
 * Read Time
 */

// React
import React, { Component, Fragment } from 'react'
import { number } from 'prop-types'

// Style
import { withTheme } from 'styled-components'

export const ReadTime = withTheme(
  class ReadTime extends Component {
    static propTypes = {
      time: number.isRequired
    }

    render () {
      const { time } = this.props

      return (
        <Fragment>
          Read time: {time} min(s)
        </Fragment>
      )
    }
  }
)
