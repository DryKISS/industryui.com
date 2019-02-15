/**
 * Firebase Provider
 */
import React, { Component } from 'react'
import { FirebaseContext, FirebaseInit } from './'

export class FirebaseProvider extends Component {
  constructor (props) {
    super(props)

    FirebaseInit.Init(props.config)
  }

  render () {
    const { children } = this.props

    return (
      <FirebaseContext.Provider value={FirebaseInit}>
        {children}
      </FirebaseContext.Provider>
    )
  }
}
