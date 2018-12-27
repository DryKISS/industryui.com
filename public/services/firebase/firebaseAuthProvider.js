/**
 * Firebase Auth Context
 */
import React from 'react'

import { AuthUserContext, withFirebase } from './'

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    constructor (props) {
      super(props)

      this.state = {
        authUser: null
      }
    }

    componentDidMount () {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null })
        }
      )
    }

    componentWillUnmount () {
      this.listener()
    }

    render () {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      )
    }
  }

  return withFirebase(WithAuthentication)
}

export { withAuthentication }
