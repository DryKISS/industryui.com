/**
 * Organisms - Forgot Details - Schema
 */

// Yup
import { object, string } from 'yup'

const ForgotDetailsSchema = object().shape({
  email: string().required('Please Enter an email').email()
})

export default ForgotDetailsSchema
