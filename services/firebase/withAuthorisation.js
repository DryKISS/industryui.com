/**
 * Firebase with Authorisation
 * Checks whether a logged in user has permission to see a page
 */
import React from 'react'

// import { withRouter } from 'react-router-dom'
// import { compose } from 'recompose'

import { AuthUserContext, withFirebase } from './'

// import * as ROUTES from '../../constants/routes'

const FirebaseWithAuthorization = (condition) => (Component) => {
  class WithAuthorization extends React.Component {
    static getInitialProps (ctx) {
      if (Component.getInitialProps) { return Component.getInitialProps(ctx) }
    }

    async componentDidMount () {
      const { firebase } = this.props
      console.log('FirebaseWithAuthorization Mounted', firebase)
      this.listener = await firebase.Auth.handleAuthListener(
        authUser => {
          if (!condition(authUser)) {
            console.log('FirebaseWithAuthorization: Fails condition')
            // this.props.history.push(ROUTES.SIGN_IN)
          }
        },
        () => {
          console.log('FirebaseWithAuthorization: Fallback')
          // this.props.history.push(ROUTES.SIGN_IN)
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
            console.log('FirebaseWithAuthorization Condition Check', condition(authUser))
            // condition(authUser) ? <Component {...this.props} /> : <span>NOT ALLOWED</span>
          }
        </AuthUserContext.Consumer>
      )
    }
  }

  // return compose(
  //   withRouter,
  //   withFirebase
  // )(WithAuthorization)
  return withFirebase(WithAuthorization)
}

export { FirebaseWithAuthorization }
