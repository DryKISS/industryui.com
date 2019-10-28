/**
 * Export
 */
const admin = require('firebase-admin')
const fs = require('fs')

const serviceAccount = require('./serviceAccountKey-production.json')
// const serviceAccount = require('./serviceAccountKey-staging.json')

const collectionName = process.argv[2]
const subCollection = process.argv[3]

// You should replace databaseURL with your own
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://tailwise.firebaseio.com'
  // databaseURL: 'https://staging-tailwise-com.firebaseio.com'
})

const db = admin.firestore()

const data = {}
data[collectionName] = {}

const results = db
  .collection(collectionName)
  .get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      data[collectionName][doc.id] = doc.data()
    })
    return data
  })
  .catch(error => {
    console.log(error)
  })

results.then(dt => {
  getSubCollection(dt).then(() => {
    // Write collection to JSON file
    fs.writeFile('../seed/data.json', JSON.stringify(data), function (err) {
      if (err) {
        return console.log(err)
      }
      console.log('The file was saved!')
    })
  })
})

async function getSubCollection (dt) {
  for (const [key] of Object.entries([dt[collectionName]][0])) {
    if (subCollection !== undefined) {
      data[collectionName][key].subCollection = {}
      await addSubCollection(key, data[collectionName][key].subCollection)
    }
  }
}

function addSubCollection (key, subData) {
  return new Promise(resolve => {
    db.collection(collectionName)
      .doc(key)
      .collection(subCollection)
      .get()
      .then(snapshot => {
        snapshot.forEach(subDoc => {
          subData[subDoc.id] = subDoc.data()
          resolve('Added data')
        })
      })
  })
}
