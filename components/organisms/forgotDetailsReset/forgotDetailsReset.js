/**
 * Organisms - Forgot Details Reset
 * Takes a UUID: 1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed
 */

// React
import React from 'react'
import { func, string } from 'prop-types'

// UI
import {
  Alert,
  Button,
  FormField,
  Form,
  FormLabel,
  Link,
  PageHeading,
  useForm,
  yupResolver
} from '../../'

import { ForgotDetailsResetSchema } from './schema'

// Style
import styled from 'styled-components'

export const ForgotDetailsReset = ({ pathLogIn, submit }) => {
  const { errors, handleSubmit, register } = useForm({
    resolver: yupResolver(ForgotDetailsResetSchema)
  })

  return (
    <>
      <PageHeading center heading='Set New Password' divider={false} />

      {errors?.password?.message && <Alert content={errors.password.message} context='warning' />}

      <Form handleSubmit={handleSubmit(submit)}>
        <FormLabel label='Password'>
          <FormField errors={errors} name='password' register={register} type='password' />
        </FormLabel>

        <Button block content='Submit' size='lg' type='submit' />

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

ForgotDetailsReset.propTypes = {
  pathLogIn: string,
  submit: func
}

ForgotDetailsReset.defaultProps = {
  pathLogIn: '/account/sign-in'
}
