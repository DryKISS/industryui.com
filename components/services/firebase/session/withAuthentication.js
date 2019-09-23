/**
 * Firebase Auth Context
 */
import React from 'react'

import { AuthUserContext, withFirebase } from '../'

const FirebaseWithAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    static getInitialProps (ctx) {
      if (Component.getInitialProps) { return Component.getInitialProps(ctx) }
    }

    constructor (props) {
      super(props)

      this.state = {
        authUser: null
      }
    }

    componentDidMount () {
      console.log('With Authentication')
      const { firebase } = this.props

      this.listener = firebase.Auth.handleAuthListener(
        authUser => {
          this.setState({ authUser })
        },
        () => {
          this.setState({ authUser: null })
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

export { FirebaseWithAuthentication }
