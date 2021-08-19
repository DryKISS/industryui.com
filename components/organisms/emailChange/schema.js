/**
 * Organisms - Email Change - Schema
 */

// Yup
import { object, string } from 'yup'

const EmailChangeSchema = object().shape({
  email: string().email().required()
})

export default EmailChangeSchema
