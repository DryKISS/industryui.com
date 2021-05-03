/**
 * Components - Organisms - Password Change - Schema
 */

// Yup
import { object, ref, string } from 'yup'

export const PasswordChangeSchema = object().shape({
  passwordOld: string()
    .required('Please Enter a password')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Must contain 8 characters, with at least one uppercase letter, number and special character'
    ),
  password: string()
    .required('Please Enter a password')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Must contain 8 characters, with at least one uppercase letter, number and special character'
    ),
  passwordConfirm: string()
    .required()
    .oneOf([ref('password'), null], 'Passwords must match')
})
