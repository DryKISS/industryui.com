/**
 * Organisms - Forgot Details Reset - Schema
 */

// Yup
import { yup } from '../../'

export const ForgotDetailsResetSchema = yup.object().shape({
  password: yup
    .string()
    .required('Please Enter a password')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    )
})
