/**
 * Theme
 */

// React
import React, { Component, createContext } from 'react'

// Style
import { ThemeProvider } from 'styled-components'

// UI
import { Theme } from '../components'

export class ThemeWrapper extends Component {
  render() {
    const { story } = this.props

    return (
      <ThemeProvider theme={Theme}>
        {story()}
      </ThemeProvider>
    )
  }
}
