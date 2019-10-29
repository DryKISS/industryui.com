/**
 * Firebase context
 */
import React from 'react'

const FirebaseContext = React.createContext(null)

const withFirebase = Page => {
  return class extends React.Component {
    static getInitialProps (ctx) {
      if (Page.getInitialProps) {
        return Page.getInitialProps(ctx)
      }
    }

    render () {
      return (
        <FirebaseContext.Consumer>
          {firebase => <Page {...this.props} firebase={firebase} />}
        </FirebaseContext.Consumer>
      )
    }
  }
}

export { FirebaseContext, withFirebase }
