/**
 * Firebase Service
 */
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyDXh2GOUN88kqvaH4_47BnuVzSco4yC6TA',
  authDomain: 'tailwise.firebaseapp.com',
  databaseURL: 'https://tailwise.firebaseio.com',
  projectId: 'tailwise',
  storageBucket: 'tailwise.appspot.com',
  messagingSenderId: '616599962835'
}

export class FirebaseService {
  constructor () {
    // firebase.initializeApp(config)
    this.store = app.firestore
    this.auth = app.auth
  }

  // Auth API
  // @see https://firebase.google.com/docs/reference/js/firebase.auth.Auth#createUserWithEmailAndPassword
  doCreateUserWithEmailAndPassword = (email, password) => (
    // console.log(email, password)
    this.auth().createUserWithEmailAndPassword(email, password)
  )

  // Email
  // # https://firebase.google.com/docs/reference/js/firebase.User#sendEmailVerification
  doSendEmailVerification = () => (
    // console.log(email, password)
    this.auth().currentUser.sendEmailVerification()
  )

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth().signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth().signOut()

  doPasswordReset = email => this.auth().sendPasswordResetEmail(email)

  doPasswordUpdate = password =>
    this.auth().currentUser.updatePassword(password)
}

// Stops the App reloading twice
export default !app.apps.length
  ? app.initializeApp(config).firestore()
  : app.app().firestore()
