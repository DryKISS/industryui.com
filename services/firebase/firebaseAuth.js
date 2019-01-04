/**
 * Firebase Auth
 */
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export class FirebaseAuth {
  constructor () {
    // Firebase APIs
    this.store = app.firestore
    this.auth = app.auth

    // Social oAuth Providers
    this.googleProvider = new app.auth.GoogleAuthProvider()
    this.facebookProvider = new app.auth.FacebookAuthProvider()
    this.twitterProvider = new app.auth.TwitterAuthProvider()
  }

  // @see https://firebase.google.com/docs/reference/js/firebase.User#sendEmailVerification
  handleEmailVerification = () => {
    return this.auth().currentUser.sendEmailVerification()
  }

  handlePasswordReset = (email) => {
    return this.auth().sendPasswordResetEmail(email)
  }

  handlePasswordUpdate = (password) => {
    return this.auth().currentUser.updatePassword(password)
  }

  // @see https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createUserWithEmailAndPassword
  handleRegister = (email, password) => {
    return this.auth().createUserWithEmailAndPassword(email, password)
  }

  handleSignIn = (provider, email, password) => {
    switch (provider) {
      // Email
      case 'email':
        return this.auth().signInWithEmailAndPassword(email, password)

      // Google oAuth
      case 'google':
        return this.auth().signInWithPopup(this.googleProvider)

      // Facebook oAuth
      case 'facebook':
        return this.auth().signInWithPopup(this.facebookProvider)

      // Twitter oAuth
      case 'twitter':
        return this.auth().signInWithPopup(this.twitterProvider)

      // Guest
      case 'anonymous':
        return this.auth().signInAnonymously()

      // Return error on no provider
      default:
        const reason = 'Invalid provider passed to signIn method'
        console.error(reason)
        return Promise.reject(reason)
    }
  }

  handleSignOut = () => {
    return this.auth().signOut()
  }

  handleAuthListener = (next, fallback) =>
    this.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        authUser = {
          uid: authUser.uid
        }

        console.log('handleAuthListener:', authUser)

        return authUser

        // this.user(authUser.uid)
        //   .once('value')
        //   .then(snapshot => {
        //     const dbUser = snapshot.val()

        //     // default empty roles
        //     if (!dbUser.roles) {
        //       dbUser.roles = []
        //     }

        //     // merge auth and db user
        //     authUser = {
        //       uid: authUser.uid,
        //       email: authUser.email,
        //       emailVerified: authUser.emailVerified,
        //       providerData: authUser.providerData,
        //       ...dbUser
        //     }

        //     next(authUser)
        //   })
      } else {
        console.log('Not Authed', authUser)
        fallback()
      }
    })

  // User API
  // user = uid => this.store().ref(`users/${uid}`)
  user = uid => {}
}
