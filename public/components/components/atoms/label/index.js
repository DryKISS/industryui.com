/**
 * Label
 */

// React
import React, { Component } from 'react'
import { bool, string } from 'prop-types'

// Style
import { withTheme } from 'styled-components'

export const Label = withTheme(
  class Label extends Component {
    static propTypes = {
      active: bool,
      text: string.isRequired
    }

    static defaultProps = {
      active: false
    }

    render () {
      const { text } = this.props

      return (
        <label>
          {text}
        </label>
      )
    }
  }
)
