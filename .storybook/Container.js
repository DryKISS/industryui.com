/**
 * Container
 */
import React, { Component, createContext } from 'react'

export class Container extends Component {
  render() {
    const { story } = this.props

    return (
      <div>
        {story()}
      </div>
    )
  }
}
