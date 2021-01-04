/**
 * Organisms - Email Change - Schema
 */

// Yup
import { object, string } from 'yup'

export const EmailChangeSchema = object().shape({
  email: string()
    .email()
    .required()
})
