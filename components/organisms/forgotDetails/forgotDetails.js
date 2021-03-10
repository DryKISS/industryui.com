/**
 * Forgot Details
 */

// React
import React from 'react'
import { bool, func, string } from 'prop-types'

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { yupResolver } from '@hookform/resolvers/yup'
import { ForgotDetailsSchema } from './schema'

// UI
import { Button, Form, FormField, FormLabel, Link, PageHeading } from '../../'

// Style
import styled from 'styled-components'

export const ForgotDetails = ({ pathLogIn, showPlaceholder, submit }) => {
  const { errors, handleSubmit, register } = useForm({
    resolver: yupResolver(ForgotDetailsSchema),
  })

  const defaultOptions = {
    errors: errors,
    register: register,
  }

  return (
    <>
      <PageHeading center divider={false} heading="Forgot Details" />

      <Form handleSubmit={handleSubmit(submit)}>
        <FormLabel label="Email">
          <FormField
            {...defaultOptions}
            autoFocus
            name="email"
            placeholder={showPlaceholder ? 'Email' : ''}
          />
        </FormLabel>

        <Button block content="Send reset link" size="lg" type="submit" />

        <Link to={pathLogIn} passHref>
          <StyledLink>Back to Log In</StyledLink>
        </Link>
      </Form>
    </>
  )
}

const StyledLink = styled.span`
  display: block;
  margin: 1rem 0 0 0;
`

ForgotDetails.propTypes = {
  pathLogIn: string,
  showPlaceholder: bool,
  submit: func.isRequired,
}

ForgotDetails.defaultProps = {
  pathLogIn: '/account/sign-in',
  showPlaceholder: false,
}
