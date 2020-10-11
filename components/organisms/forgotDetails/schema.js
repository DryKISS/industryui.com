/**
 * Organisms - Forgot Details - Schema
 */

// Yup
import { object, string } from 'yup'

export const ForgotDetailsSchema = object().shape({
  email: string()
    .required('Please Enter an email')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Email must be valid'
    )
})
