# Firebase

## Links

- https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/
- https://github.com/the-road-to-react-with-firebase/react-firestore-authentication
- https://github.com/zeit/next.js/tree/master/examples/with-firebase-authentication
- https://medium.com/@UnicornAgency/jamstack-pwa-lets-build-a-polling-app-with-gatsby-js-firebase-and-styled-components-pt-1-78a03a633092
- https://www.gatsbyjs.org/docs/authentication-tutorial/

# Functions

- @see https://codeburst.io/organizing-your-firebase-cloud-functions-67dc17b3b0da
- @see https://github.com/firebase/functions-samples/issues/170
- @see https://github.com/TarikHuber/react-most-wanted

- functions:log [options] read logs from deployed functions
- functions:shell [options] launch full Node shell with emulated functions
- functions:config:clone [options] clone environment config from another project
- functions:config:get [path] fetch environment config stored at the given path
- functions:config:set [values...] set environment config with key=value syntax
- functions:config:unset [keys...] unset environment config at the specified path(s)
- functions:delete [options][filters...] delete one or more Cloud Functions by name or group name.

## Login

- firebase list
- firebase logout
- firebase login

## Test

- @see https://firebase.google.com/docs/functions/local-emulator

- npm install -g firebase-tools
- Google Cloud Functions only supports Node v6.11.5.

### HTTPs

To test the HTTPs APIs

- firebase serve
- http://localhost:5000

### Database

To test the Firestore triggers

- firebase functions:config:get > .runtimeconfig.json

- firebase functions:shell -p 8080
- firebase serve --only functions

- firebase database:profile
- firebase firestore:indexes --pretty

#### Seeding

@see https://github.com/dalenguyen/firestore-import-export

- node import.js ../seed/dogBreeds.json
- node import.js ../seed/dogs.json date=createdAt,dateOfBirth
- node import.js ../seed/payouts.json date=createdAt
- node import.js ../seed/users.json date=createdAt,dateOfBirth

#### Export

- node export.js /users

### Live

- https://europe-west1-chat-drykiss-com.cloudfunctions.net/httpsFonixSmsIn
- europe-west2 (London)

## Environment variables

### Set

- firebase use chat-drykiss-com
- firebase use staging-tailwise-com

Create a project

- firebase use --add

### Get

- firebase functions:config:get

### Remove

- firebase functions:config:unset gmail

### Configure Gmail

- firebase functions:config:set gmail.email="hello@tailwise.com" gmail.password="X"
- firebase functions:config:set gmail.email="ian.warner@drykiss.com" gmail.password="X"
- firebase functions:config:set fonix.apiKey="X"

## Deploy

- firebase deploy -m "Initial deploy"
- firebase deploy -m "Initial deploy" --only functions
- firebase deploy -m "Updated HTTPs" --only functions:httpsFonixSmsIn

--only <targets> only deploy to specified, comma-separated targets (e.g. "hosting,storage").
For functions, can specify filters with colons to scope function deploys to only those functions (e.g. "--only functions:func1,functions:func2"). When filtering based on export groups (the exported module object keys), use dots to specify group names (e.g. "--only functions:group1.subgroup1,functions:group2)"

## Hosting

- firebase open hosting:site

## Export Auth Accounts

- firebase auth:export --format json ./authExport.json
- firebase-functions@2.1.0 requires a peer of firebase-admin@~6.0.0 but none is installed. You must install peer dependencies yourself.
