/**
 * Organisms - Forgot Details - Schema
 */

// Yup
import { object, string } from 'yup'

export const ForgotDetailsSchema = object().shape({
  email: string().required('Please Enter an email').email(),
})
