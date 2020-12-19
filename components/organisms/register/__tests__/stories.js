/**
 * Register
 */

// React
import { useState } from 'react'

// UI
import { Alert, Register, requestSimulator } from 'components'
import Readme from '../README.md'

export default {
  component: Register,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Register'
}

export const main = args => {
  const [loggedToast, setLoggedToast] = useState(false)

  const submit = e => {
    requestSimulator().then(res => {
      setLoggedToast(true)

      setTimeout(() => {
        setLoggedToast(false)
      }, 1000)
    })
  }

  const defaultProps = {
    birthday: false,
    dayBirthday: 1,
    email: 'ian.warner@drykiss.com',
    errorSubmit: false,
    marketing: false,
    monthBirthday: 10,
    nameFirst: 'Ian',
    nameLast: 'Warner',
    password: 'test',
    pathLogin: '/',
    repeatPassword: 'test',
    showPlaceholder: true,
    submit: submit,
    terms: false,
    yearBirthday: '2020',
    ...args
  }

  return (
    <>
      {loggedToast && <Alert content='logged' context='success' />}
      <Register {...defaultProps} />
    </>
  )
}

// export const error = () => {
//   const { change, form } = useForm(initialState)
//   const [error, setError] = useState()

//   const submit = e => {
//     requestSimulator('false').catch(e => {
//       console.error('request false ', e.message)
//       setError(e)
//     })
//   }

//   return (
//     <Register
//       change={change}
//       nameFirst={form.nameFirst}
//       nameLast={form.nameLast}
//       email={form.email}
//       password={form.password}
//       repeatPassword={form.repeatPassword}
//       marketing={form.marketing}
//       terms={form.terms}
//       pathLogin='/account/login'
//       submit={submit}
//       errorSubmit={error}
//     />
//   )
// }
