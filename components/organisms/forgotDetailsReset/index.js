/**
 * Forgot Details Reset
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

export const ForgotDetailsReset = ({ pathLogIn, showPlaceholder }) => {
  const { errors, formState, handleSubmit, register } = useForm({ mode: 'onChange' })
  const [error] = useState(false)

  const submit = data => {
    const { password } = data
    console.log(password)
  }

  return (
    <>
      <PageHeading center heading='Reset Password' divider={false} />

      {error && <Alert content={error.message} context='warning' style={{ color: '#fff' }} />}

      <FormForm handleSubmit={handleSubmit(submit)}>
        <FormLabel label='Password'>
          <FormField
            errors={errors}
            name='password'
            placeholder={showPlaceholder ? 'Password' : ''}
            register={register}
            required='This is required'
            type='password'
          />
        </FormLabel>

        <Button
          block
          content='Submit'
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

const StyledLink = styled.a`
  display: block;
  margin: 1rem 0;
`

ForgotDetailsReset.propTypes = {
  pathLogIn: string,
  showPlaceholder: bool
}

ForgotDetailsReset.defaultProps = {
  pathLogIn: '/account/sign-in',
  showPlaceholder: true
}
