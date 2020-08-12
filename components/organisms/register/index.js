/**
 * Register
 */

// React
import React, { useContext, useState } from 'react'
import { any, bool, func, string } from 'prop-types'

// UI
import {
  Alert,
  Button,
  Checkbox,
  Column,
  DatePickerInput,
  FormForm,
  Input,
  Link,
  UserContext,
  Row
} from '../../'

// Style
import styled from 'styled-components'

export const Register = ({
  birthday,
  change,
  handleSubmit,
  dayBirthday,
  email,
  monthBirthday,
  marketing,
  nameFirst,
  nameLast,
  pathLogin,
  password,
  repeatPassword,
  terms,
  yearBirthday
}) => {
  const renderBirthday = () => (
    <>
      <DatePickerInput
        change={change}
        day={dayBirthday}
        id='Birthday'
        label='Birthdate'
        month={monthBirthday}
        year={yearBirthday}
      />
      To sign up, you must be 18 or older. Other users will not see this.
    </>
  )

  // const isInvalid = password === '' || email === ''
  const { register } = useContext(UserContext)
  const [error, setError] = useState()
  const isInvalid = false

  const handleError = error => {
    console.log('error en handle ', error, error.message)
    setError(error)
  }
  const submit = e => {
    // We get the check of password and repeatpassword from backend? or if not we can manage it here too
    e.preventDefault()

    if (password === repeatPassword) {
      // We can set it and
      register(nameFirst, nameLast, email, password, marketing, birthday, handleError)
    } else {
      // set the error
    }
  }

  const CHECKBOX_TERMS = [
    {
      id: 'terms',
      label: 'I confirm that I have read and agree to the Terms of Service and Privacy Policy.',
      required: true,
      isChecked: terms
    },
    {
      id: 'marketing',
      label:
        'I would like to receive, occasional news and exclusive offers from via email. I can opt out of receiving these at any time in my account settings.',
      isChecked: marketing
    }
  ]
  return (
    <FormForm handleSubmit={submit}>
      <Row>
        <Column md={6}>
          <Input label='First name' id='nameFirst' change={change} value={nameFirst} />
        </Column>

        <Column md={6}>
          <Input label='Last name' id='nameLast' change={change} value={nameLast} />
        </Column>
      </Row>

      <Input label='Email' id='email' change={change} type='email' value={email} />
      <Input label='Password' id='password' change={change} type='password' value={password} />
      <Input
        label='Repeat password'
        id='repeatPassword'
        change={change}
        type='password'
        value={repeatPassword}
      />
      {error && <Alert content={error.message} context='warning' style={{ color: '#fff' }} />}

      {birthday && renderBirthday()}

      <Checkbox data={CHECKBOX_TERMS} change={change} stacked />

      <Button
        align='right'
        content='Sign up'
        context='primary'
        size='lg'
        disabled={isInvalid}
        type='submit'
      />

      <StyledLink>
        Already have an account? <Link to={pathLogin}>Log in</Link>
      </StyledLink>
    </FormForm>
  )
}

const StyledLink = styled.div`
  display: block;
  margin: 1rem 0;
`

Register.propTypes = {
  birthday: bool,
  change: func.isRequired,
  email: string.isRequired,
  dayBirthday: any,
  marketing: bool.isRequired,
  monthBirthday: any,
  nameFirst: string.isRequired,
  nameLast: string.isRequired,
  password: string.isRequired,
  pathLogin: string,
  submit: func.isRequired,
  terms: bool.isRequired,
  yearBirthday: any
}

Register.defaultProps = {
  birthday: false,
  pathLogin: '/account/login'
}
