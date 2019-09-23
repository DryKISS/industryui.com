/**
 * Authentication - Context - Context
 *
 * Need to split the Auth and User context and provide a better API to update the
 * details, its causing issues with the Context not being set on refresh
 *
 * @see https://medium.com/digio-australia/using-the-react-usecontext-hook-9f55461c4eae
 */

// React
import React, { createContext, useContext, useEffect, useState } from 'react'

// Next
import Router from 'next/router'

// Axios
import axios from 'axios'

// UI
import { useLocalStorage } from '../../../'

// const INITIAL_STATE = {
//   accessToken: 'pending',
//   user: ''
// }

// export const AuthContext = createContext(INITIAL_STATE)
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useLocalStorage('bearerToken', null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (accessToken) {
      console.info('AuthProvider: useEffect', accessToken)
      window.localStorage.setItem('bearerToken', accessToken)
      getUser()
    }
  }, [accessToken])

  // const getUser = async (accessToken) => {
  //   try {
  //     const response = await axios.get('http://localhost:3003/findUser', {
  //       params: {
  //         username
  //       },
  //       headers: { Authorization: `JWT ${accessToken}` }
  //     })

  //     this.setState({
  //       first_name: response.data.first_name,
  //       last_name: response.data.last_name,
  //       email: response.data.email,
  //       username: response.data.username,
  //       password: response.data.password,
  //       isLoading: false,
  //       error: false
  //     })

  //   } catch (error) {
  //     console.error(error.response.data);
  //     this.setState({
  //       error: true
  //     })
  //   }
  // }

  const getUser = () => {
    console.info('AuthProvider: getUser')

    if (accessToken === 'awesomeAccessToken123456789') {
      const user = {
        name: 'Ian',
        roles: [
          'ADMIN'
        ]
      }

      setUser(user)
    }
  }

  const signInWithEmailAndPassword = async (email, password) => {
    console.info('AuthProvider: signInWithEmailAndPassword:', email, password)

    window.localStorage.setItem('bearerToken', 'awesomeAccessToken123456789')
    setAccessToken('awesomeAccessToken123456789')

    await getUser('awesomeAccessToken123456789')
  }

  const handleLogin = (provider, email, password) => {
    switch (provider) {
      // Email
      case 'email':
        return signInWithEmailAndPassword(email, password)

      // Google oAuth
      case 'google':
        return signInWithPopup(this.googleProvider)

      // Facebook oAuth
      case 'facebook':
        return signInWithPopup(this.facebookProvider)

      // Twitter oAuth
      case 'twitter':
        return signInWithPopup(this.twitterProvider)

      // Guest
      case 'anonymous':
        return signInAnonymously()

      // Return error on no provider
      default:
        const reason = 'Invalid provider passed to signIn method'
        return Promise.reject(reason)
    }
  }

  const handleLogout = () => {
    console.info('AuthProvider: handleLogout')

    window.localStorage.removeItem('bearerToken')
    setAccessToken(null)
    setUser(null)
    Router.push('/sign-in')
  }

  return (
    <AuthContext.Provider value={{
      accessToken,
      handleLogin,
      handleLogout,
      setAccessToken,
      user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
