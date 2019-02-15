/**
 * Firebase with Authorisation
 * Checks whether a logged in user has permission to see a page
 *
 * - Routes to the Sign in page is not authorised
 */

// React
import React from 'react'

// Next
import Router from 'next/router'

// Firebase
import { AuthUserContext, withFirebase } from '../'

const FirebaseWithAuthorization = (condition) => (Component) => {
  class WithAuthorization extends React.Component {
    static getInitialProps (ctx) {
      if (Component.getInitialProps) { return Component.getInitialProps(ctx) }
    }

    componentDidMount () {
      const { firebase } = this.props
      // console.log('FirebaseWithAuthorization:', firebase)

      this.listener = firebase.Auth.handleAuthListener(
        authUser => {
          if (!condition(authUser)) {
            // console.log('FirebaseWithAuthorization: Error')
            Router.push('/sign-in')
          }
        },
        () => {
          // console.log('FirebaseWithAuthorization: Fallback')
          Router.push('/sign-in')
        }
      )
    }

    componentWillUnmount () {
      this.listener()
    }

    render () {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            condition(authUser) ? <Component role={authUser.roles[0]} uid={authUser.uid} {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      )
    }
  }

  return withFirebase(WithAuthorization)
}

export { FirebaseWithAuthorization }
