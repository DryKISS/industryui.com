/**
 * Organisms - Password Change - Schema
 */

// Yup
import { object, ref, string } from 'yup'

export const PasswordChangeSchema = object().shape({
  passwordOld: string()
    .required('Please Enter a password')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
  password: string()
    .required('Please Enter a password')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
  passwordConfirm: string()
    .required()
    .oneOf([ref('password'), null], 'Passwords must match')
})
