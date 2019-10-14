/**
 * Firebase Initiliase
 */
import app from '@firebase/app'

import { FirebaseAuth } from './'

const Init = (config) => (
  !app.apps.length
    ? app.initializeApp(config).firestore()
    : app.app().firestore()
)

export const FirebaseInit = {
  Init: Init,
  Auth: new FirebaseAuth()
}
