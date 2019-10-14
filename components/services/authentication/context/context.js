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
    window.localStorage.setItem('bearerToken', 'awesomeAccessToken123456789')
    setAccessToken('awesomeAccessToken123456789')

    await getUser('awesomeAccessToken123456789')
  }

  const handleLogin = (provider, email, password) => {
    switch (provider) {
      // Email
      case 'email':
        return signInWithEmailAndPassword(email, password)

      // Return error on no provider
      default:
        return 'Invalid provider passed to signIn method'
    }
  }

  const handleLogout = () => {
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
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
