/**
 * Firebase Provider
 */
import React, { Component } from 'react'
import { FirebaseContext, FirebaseService } from './'

class FirebaseProvider extends Component {
  render () {
    return (
      <FirebaseContext.Provider value={new FirebaseService()}>
        {this.props.children}
      </FirebaseContext.Provider>
    )
  }
}

export { FirebaseProvider }
