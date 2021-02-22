/**
 * Components - Organisms - Login - Schema
 */

// Yup
import { object, string } from 'yup'

export const LoginSchema = object().shape({
  email: string().email().required(),
  password: string()
    .required('Please Enter a password')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Must contain 8 characters, with at least ine uppercase, number and special character'
    )
})
