/**
 * Firebase Auth
 */
import app from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'
import '@firebase/storage'

export class FirebaseAuth {
  constructor () {
    // Firebase APIs
    this.auth = app.auth
    this.store = app.firestore
    this.storage = app.storage

    // Helpers
    // this.fieldValue = this.store().FieldValue
    // this.emailAuthProvider = this.auth().EmailAuthProvider

    // Social oAuth Providers
    this.googleProvider = new app.auth.GoogleAuthProvider()
    this.facebookProvider = new app.auth.FacebookAuthProvider()
    this.twitterProvider = new app.auth.TwitterAuthProvider()
  }

  // @see https://firebase.google.com/docs/reference/js/firebase.User#sendEmailVerification
  handleEmailVerification = () => {
    return this.auth().currentUser.sendEmailVerification()
  }

  // @see https://firebase.google.com/docs/reference/js/firebase.auth.Auth#applyActionCode
  handleApplyActionCode = (code) => {
    return this.auth().applyActionCode(code)
  }

  handlePasswordReset = (email) => {
    return this.auth().sendPasswordResetEmail(email)
  }

  handleVerifyPasswordResetCode = (code) => {
    return this.auth().verifyPasswordResetCode(code)
  }

  handleConfirmPasswordReset = (code, password) => {
    return this.auth().confirmPasswordReset(code, password)
  }

  handlePasswordUpdate = (password) => {
    return this.auth().currentUser.updatePassword(password)
  }

  handleEmailUpdate = (email) => {
    return this.auth().currentUser.updateEmail(email)
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
        return 'Invalid provider passed to signIn method'
    }
  }

  handleSignOut = () => {
    return this.auth().signOut()
  }

  handleAuthListener = (next, fallback) =>
    this.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .get()
          .then((snapshot) => {
            const dbUser = snapshot.data()

            // Default empty roles
            if (!dbUser.roles) {
              dbUser.roles = []
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              ...dbUser
            }

            next(authUser)
          })
      } else {
        fallback()
      }
    })

  // User API
  user = (uid) => {
    return this.store().doc(`users/${uid}`)
  }
}
