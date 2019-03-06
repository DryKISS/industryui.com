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
      const { firebase } = this.props

      // Get user from localstorage if exists
      // const user = JSON.parse(window.localStorage.getItem('authUser'))
      // this.setState({ user })

      this.listener = firebase.Auth.handleAuthListener(
        authUser => {
          // window.localStorage.setItem('authUser', JSON.stringify(authUser))
          this.setState({ authUser })
        },
        () => {
          // window.localStorage.removeItem('authUser')
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
