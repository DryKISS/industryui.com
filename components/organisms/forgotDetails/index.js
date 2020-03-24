/**
 * Forgot Details
 */

// React
import React, { useState } from 'react'
import { bool, string } from 'prop-types'

// useForm
import { useForm } from 'react-hook-form'

// UI
import { Alert, Button, FormField, FormForm, FormLabel, Link, PageHeading } from '../../'

// Style
import styled from 'styled-components'

export const ForgotDetails = ({ pathLogIn, showPlaceholder }) => {
  const { errors, formState, handleSubmit, register } = useForm({ mode: 'onChange' })
  const [error] = useState(false)

  const submit = data => {}

  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return (
    <>
      <PageHeading center heading='Forgot Details' divider={false} />

      {error && <Alert content={error.message} context='warning' style={{ color: '#fff' }} />}

      <FormForm handleSubmit={handleSubmit(submit)}>
        <FormLabel label='Email'>
          <FormField
            autoFocus
            errors={errors}
            name='email'
            placeholder={showPlaceholder ? 'Email' : ''}
            regExp={pattern}
            register={register}
          />
        </FormLabel>

        <Button
          block
          content='Send reset link'
          context='primary'
          disabled={!formState.isValid}
          size='lg'
          type='submit'
        />

        <Link to={pathLogIn} passHref>
          <StyledLink>Back to Log In</StyledLink>
        </Link>
      </FormForm>
    </>
  )
}

const StyledLink = styled.span`
  display: block;
  margin: 1rem 0;
`

ForgotDetails.propTypes = {
  pathLogIn: string,
  showPlaceholder: bool
}

ForgotDetails.defaultProps = {
  pathLogIn: '/account/sign-in',
  showPlaceholder: false
}
