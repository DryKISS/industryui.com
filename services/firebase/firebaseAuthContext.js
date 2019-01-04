/**
 * Firebase Auth Context
 *
 * @see https://hackernoon.com/integrating-firebase-authentication-with-react-router-in-react-16-3-92f53b67c0b0
 */
import React from 'react'

const AuthUserContext = React.createContext(null)

export { AuthUserContext }

// class ProtectedScreen extends React.PureComponent<{}> {
//   render (): React.Node {
//     const { children } = this.props
//     return (
//       <FirebaseAuthContext.Consumer>
//           {
//           ({ isUserSignedIn }) => {
//             if (isUserSignedIn) {
//               return children
//             }
//             return <Redirect to='/login' />
//           }
//         }
//         </FirebaseAuthContext.Consumer>
//     )
//   }
// };
