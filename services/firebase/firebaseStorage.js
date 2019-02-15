/**
 * Firebase Storage
 *
 * C - Create
 * R - Read
 * U - Update
 * D - Delete
 */
import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

export class FirebaseStorage {
  constructor () {
    this.store = app.firestore
    this.storage = app.storage
  }

  // /**
  //  * Upload a file to the firebase Storage
  //  *
  //  * @param {String} path - Path to location on Storage
  //  * @param {Array} files - Array of File objects to upload (usually from select-file or a drag/drop `onDrop`)
  //  * @param {String} dbPath - Database path to place uploaded files metadata.
  //  * @param {Object} options - Options
  //  * @param {String} options.name - Name of the file
  //  */
  // create = (path, files, dbPath, options) => {
  //   console.log(path, files, dbPath, options)

  //   if (this.store()) {
  //     throw new Error('Firebase storage is required to upload files')
  //   }

  //   // Loop through the uploaded files
  //   files.map((file) => (
  //     console.log(file)
  //   ))

  //   // files.map((file) => uploadFile(dispatch, firebase, { file, ...other }))

  //   // const { path, file, dbPath, options = { progress: false } } = config || {}
  //   // const { logErrors } = firebase._.config

  //   // const nameFromOptions = isFunction(options.name)
  //   // ? options.name(file, firebase, config)
  //   // : options.name
  //   // const filename = nameFromOptions || file.name

  //   // const storageRef = this.store().ref()
  //   // const ref = storageRef.child(path)

  //   // this.uploadTask = ref.putString(screenshot, 'data_url')
  // }
}
