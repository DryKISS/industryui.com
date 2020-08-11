/**
 * Forgot Details
 */

// React
import React from 'react'
import { bool, func, string } from 'prop-types'

// useForm
import { useForm } from 'react-hook-form'

// UI
import { Button, FormField, FormForm, FormLabel, Link, PageHeading } from '../../'
import { ForgotDetailsSchema } from './schema'

// Style
import styled from 'styled-components'

export const ForgotDetails = ({ pathLogIn, showPlaceholder, submit }) => {
  const { errors, handleSubmit, register } = useForm({
    validationSchema: ForgotDetailsSchema
  })

  return (
    <>
      <PageHeading center heading='Forgot Details' divider={false} />

      <FormForm handleSubmit={handleSubmit(submit)}>
        <FormLabel label='Email'>
          <FormField
            autoFocus
            errors={errors}
            name='email'
            placeholder={showPlaceholder ? 'Email' : ''}
            register={register}
          />
        </FormLabel>

        <Button block content='Send reset link' size='lg' type='submit' />

        <Link to={pathLogIn} passHref>
          <StyledLink>Back to Log In</StyledLink>
        </Link>
      </FormForm>
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
  submit: func
}

ForgotDetails.defaultProps = {
  pathLogIn: '/account/sign-in',
  showPlaceholder: false
}
