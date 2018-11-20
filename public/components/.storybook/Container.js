import React, { Component, createContext } from 'react'

export default class Container extends Component {
  render() {
    const { story } = this.props

    return (
      <div>
        {story()}
      </div>
    )
  }
}
