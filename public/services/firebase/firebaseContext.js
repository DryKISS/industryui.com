/**
 * Firebase context
 */
import React from 'react'

const FirebaseContext = React.createContext(null)

const withFirebase = (Component) => (props) => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
)

export { FirebaseContext, withFirebase }
