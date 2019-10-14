/**
 * Firebase Authentication Service
 */

// React
import { Component } from 'react'
import { func, object } from 'prop-types'

const INITIAL_STATE = {
  uid: '',
  isAnonymous: null
  // // some other properties from the user object that may be useful
  // email: '',
  // displayName: '',
  // photoURL: '',
}

export class FirebaseAuthOld extends Component {
  static propTypes = {
    children: func.isRequired
  };

  static contextTypes = {
    firebase: object
  };

  state = INITIAL_STATE;

  componentDidMount () {
    const { auth } = this.context.firebase
    // onAuthStateChanged returns an unsubscribe method
    this.stopAuthListener = auth().onAuthStateChanged(user => {
      if (user) {
        // if user exists sign-in!
        this.signIn(user)
      } else {
        // otherwise sign-out!
        this.signOut()
      }
    })
  }

  componentWillUnmount () {
    this.stopAuthListener()
  }

  signIn (user) {
    const { uid, isAnonymous } = user

    this.setState({
      uid,
      isAnonymous
    })
  }

  signOut () {
    this.setState(INITIAL_STATE)
  }

  render () {
    // If uid doesn't exist in state, the user is not signed in.
    // A uid will exist if the user is signed in anonymously.
    // We'll consider anonymous users as unauthed for this variable.
    const isAuthed = !!(this.state.uid && !this.state.isAnonymous)

    return this.props.children({
      ...this.state,
      signIn: this.handleSignIn,
      signOut: this.handleSignOut,
      isAuthed
    })
  }
}
