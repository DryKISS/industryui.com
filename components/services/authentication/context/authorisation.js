/**
 * Services - Authentication - Context - Authorisation
 */

// React
import React, { Component, useEffect } from 'react'

// Next
import Router from 'next/router'

// UI
import { AuthContext } from '../../../'

const AuthWithAuthorisation = (condition) => (MyComponent) => {
  return class Authorisation extends Component {
    static contextType = AuthContext

    // constructor(props) {
    //   super(props)
    //   console.log('Consturctor')

    //   console.log('Context', this.context)
    //   const user = this.context
    // }

    // componentDidMount () {
    //   console.log(this.context)
    //   const user = this.context.user

    //   if (user) {
    //     return
    //   } else {
    //     Router.push('/sign-in')
    //   }

    // this.listener = useAuth.handleAuthListener(
    //   // authUser => {
    //   //   if (!condition(authUser)) {
    //   //     console.log('redirect')
    //   //     Router.push('/sign-in')
    //   //   }
    //   // },
    //   // () => {
    //   //   console.log('redirect')
    //   //   Router.push('/sign-in')
    //   // }
    // )

    // Check that the User exists, has roles as follows the condition or redirect

    // const { firebase } = this.props

    // this.listener = firebase.Auth.handleAuthListener(
    //   authUser => {
    //     if (!condition(authUser)) {
    //       console.log('redirect')
    //       Router.push('/sign-in')
    //     }
    //   },
    //   () => {
    //     console.log('redirect')
    //     Router.push('/sign-in')
    //   }
    // )
  // }

    render () {
      console.log('AuthWithAuthorisation: Accesstoken:', this.context.accessToken)

      if (!this.context.accessToken) {
        console.log('NO ACCESS TOKEN')
        // return (
        //   <MyComponent notLoggedIn />
        // )
      }

      return (
        <AuthContext.Consumer>
          {context =>
            console.log('ContextX', context)
            // (!context.accessToken)
            //   ? <>NOT LOGGED IN{console.log('ContextY', context)}</>
            //   : console.log('ContextX', context)

            // condition(context.user)
            //   ? <MyComponent role={context.user.roles[0]} user={context.user} {...this.props} />
            //   : ''
          }
        </AuthContext.Consumer>
      )
    }
  }
}

export { AuthWithAuthorisation }
