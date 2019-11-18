/**
 * Import
 */
const fs = require('fs')
const YAML = require('js-yaml')
const admin = require('firebase-admin')

// Production
const serviceAccount = require('./serviceAccountKey-production.json')
const databaseURL = 'https://tailwise.firebaseio.com'

// Staging
// const serviceAccount = require('./serviceAccountKey-staging.json')
// const databaseURL = 'https://staging-tailwise-com.firebaseio.com'

const fileName = process.argv[2]

const reDate = new RegExp(/^date/)
const reGeo = new RegExp(/^geo/)

let dateArray = process.argv.filter(item => item.match(reDate))[0]
let geoArray = process.argv.filter(item => item.match(reGeo))[0]

if (dateArray) {
  dateArray = dateArray.split('=')[1].split(',')
}

if (geoArray) {
  geoArray = geoArray.split('=')[1].split(',')
}

// You should replace databaseURL with your own
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: databaseURL
})

const db = admin.firestore()

fs.readFile(fileName, 'utf8', function (err, data) {
  if (err) {
    return console.error(err)
  }

  let dataArray = ''

  // Turn string from file to an Array
  if (fileName.endsWith('yaml') || fileName.endsWith('yml')) {
    dataArray = YAML.safeLoad(data)
  } else {
    dataArray = JSON.parse(data)
  }

  udpateCollection(dataArray)
})

async function udpateCollection (dataArray) {
  for (const index in dataArray) {
    const collectionName = index
    for (const doc in dataArray[index]) {
      if (dataArray[index].Object.prototype.hasOwnProperty.call(doc)) {
        await startUpdating(collectionName, doc, dataArray[index][doc])
      }
    }
  }
}

function startUpdating (collectionName, doc, data) {
  // convert date from unixtimestamp
  let parameterValid = true

  // Enter date value
  if (typeof dateArray !== 'undefined') {
    dateArray.map(date => {
      if (data.Object.prototype.hasOwnProperty.call(date)) {
        data[date] = new Date(data[date]._seconds * 1000)
      } else {
        parameterValid = false
      }
    })
  }

  // Enter geo value
  if (typeof geoArray !== 'undefined') {
    geoArray.map(geo => {
      if (data.Object.prototype.hasOwnProperty.call(geo)) {
        data[geo] = new admin.firestore.GeoPoint(data[geo]._latitude, data[geo]._longitude)
      } else {
        parameterValid = false
      }
    })
  }

  if (parameterValid) {
    return new Promise(resolve => {
      db.collection(collectionName)
        .doc(doc)
        .set(data)
        .then(() => {
          resolve('Data wrote!')
        })
        .catch(error => {
          console.error(error)
        })
    })
  } else {
    console.error(`${doc} is not imported to firestore. Please check your parameters!`)
  }
}
