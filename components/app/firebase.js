/**
 * Firebase
 */

// React
import { any, object } from 'prop-types'

// UI
import { FirebaseProvider } from '../'

export const Firebase = ({ firebase, layout }) => {
  return <FirebaseProvider config={firebase}>{layout()}</FirebaseProvider>
}

Firebase.propTypes = {
  firebase: object,
  layout: any.isRequired
}
