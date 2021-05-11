/**
 * Components - Contact - Form
 */

// Yup
import { object, string } from 'yup'

export const schema = object().shape({
  fullName: string().required('Full name is required'),
  email: string().email('Email is not valid').required('Email is required'),
  message: string().required('Message is required'),
  mobileNumber: string().required('Mobile number is required')
})
