/**
 * Forgot Details
 */

import { bool, func, string } from 'prop-types'

// UI
import { Button, Form, FormField, FormLabel, Link, PageHeading, useForm } from '../../'
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

      <Form handleSubmit={handleSubmit(submit)}>
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
  submit: func.isRequired
}

ForgotDetails.defaultProps = {
  pathLogIn: '/account/sign-in',
  showPlaceholder: false
}
