# Firestore Import Export

#### Seeding

@see https://github.com/dalenguyen/firestore-import-export

- node import.js ../seed/dogBreeds.json
- node import.js ../seed/dogs.json date=createdAt,dateOfBirth
- node import.js ../seed/payouts.json date=createdAt
- node import.js ../seed/users.json date=createdAt,dateOfBirth

#### Export

- node export.js /users

A script that help to export and import in Cloud Firestore

** Update: you can try the NPM package for [backup and restore from Firestore](https://github.com/dalenguyen/firestore-backup-restore) now.

# Requirements

Get **serviceAccount** JSON file from *Project Setting > SERVICE ACCOUNTS* in Firebase Console

Change the *databaseURL* when initializeApp with your own

# Setting Up

Download or clone this repository

```
git clone https://github.com/dalenguyen/firestore-import-export.git
```

Install NPM packages

```
npm install
```

# Export database from Firestore

This will help you create a backup of your collection and subcollection from Firestore to a JSON file name **firestore-export.json**

```
node export.js <your-collection-name> <sub-collection-name-(optional)>
```

# Import database to Firestore

This will import one collection to Firestore and it will overwrite your current collection if there is a collection with that name in your Firestore. If you have date type in your JSON, please add the field to the command line. **The date and geo arguments is optional**.

```
node import.js import-to-firestore.json date=date geo=Location
```

If you have date type in your JSON, please add to your command line

Sample from __import-to-firestore.json__. "test" will be the collection name. The date type will have _seconds and _nanoseconds in it.

```
{
  "test" : {
    "first-key" : {
      "email"   : "dungnq@itbox4vn.com",
      "website" : "dalenguyen.me",
      "custom"  : {
        "firstName" : "Dale",
        "lastName"  : "Nguyen"
      },
      "date": {
        "_seconds":1534046400,
        "_nanoseconds":0
      },
      "Location": {
        "_latitude": 49.290683,
        "_longitude": -123.133956
      }
    },
    "second-key" : {
      "email"   : "test@dalenguyen.me",
      "website" : "google.com",
      "custom"  : {
        "firstName" : "Harry",
        "lastName"  : "Potter"
      },
      "date": {
        "_seconds":1534262435,
        "_nanoseconds":0
      },
      "Location": {
        "_latitude": 49.290683,
        "_longitude": -123.133956
      }
    }
  }
}
```
