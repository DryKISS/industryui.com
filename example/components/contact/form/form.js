/**
 * Contact - Form
 */

// React
import { useState } from 'react'

// Axios
import axios from 'axios'

// React Hook Form
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// UI
import {
  Alert,
  Button,
  Column,
  FormError,
  FormField,
  Form,
  FormLabel,
  Row,
  Space,
  TextareaField
} from '@drykiss/industry-ui'

import { schema } from './schema'

export const ContactForm = ({ defaultTreatment }) => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({
    type: 'success',
    text: ''
  })

  const { errors, handleSubmit, register, reset } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    setLoading(true)

    axios
      .post(process.env.NEXT_PUBLIC_CONTACT_FORM_SPREE_URL, data)
      .then(() => {
        reset()
        setMessage({
          type: 'success',
          text: "Thanks for submitting your message. We'll get back to you as soon as possible."
        })
      })
      .catch(() => {
        setMessage({
          type: 'error',
          text: 'There was an error submitting the form. Please try again!'
        })
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const defaultProps = {
    errors: errors,
    register: register
  }

  const ErrMessage = (message) => <FormError message={message} />

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Column xs={12} md={8}>
          <FormLabel size="md" label="* Full name">
            <FormField {...defaultProps} name="fullName" placeholder="Enter first and surname" />

            {errors.fullName && ErrMessage(errors.fullName.message)}
          </FormLabel>
        </Column>

        <Column xs={12} md={8}>
          <FormLabel size="md" label="* Mobile Number">
            <FormField
              {...defaultProps}
              name="mobileNumber"
              placeholder="Enter your mobile phone number"
            />

            {errors.mobileNumber && ErrMessage(errors.mobileNumber.message)}
          </FormLabel>
        </Column>

        <Column xs={12} md={8}>
          <FormLabel size="md" label="* Email">
            <FormField
              {...defaultProps}
              helperMessage="We'll never share your email with anyone else."
              name="email"
              placeholder="Enter email address"
            />

            {errors.email && ErrMessage(errors.email.message)}
          </FormLabel>
        </Column>

        <Column xs={12} md={12}>
          <FormLabel label="* Message">
            <TextareaField
              {...defaultProps}
              name="message"
              placeholder="Enter your message"
              rows={2}
            />

            {errors.message && ErrMessage(errors.message.message)}
          </FormLabel>
        </Column>
      </Row>

      {message.text && (
        <>
          <Alert content={message.text} context={message.type} />
          <Space marginBottom="lg" />
        </>
      )}

      <Button content="Submit" disabled={loading} size="lg" type="submit" />
    </Form>
  )
}
