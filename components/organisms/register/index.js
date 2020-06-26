/**
 * Register
 */

// React
import { any, bool, func, string } from 'prop-types'

// UI
import {
  Button,
  CheckboxField,
  Column,
  DatePickerInput,
  Form,
  FormField,
  FormLabel,
  Link,
  Row,
  useForm
} from '../../'

// Style
import styled from 'styled-components'

export const Register = ({
  birthday,
  dayBirthday,
  email,
  monthBirthday,
  marketing,
  nameFirst,
  nameLast,
  pathLogin,
  password,
  submit,
  terms,
  yearBirthday
}) => {
  const { errors, register } = useForm()
  const renderBirthday = () => (
    <>
      <DatePickerInput register={register} errors={errors} name='Birthday' label='Birthdate' />
      <p>To sign up, you must be 18 or older. Other users will not see this.</p>
    </>
  )

  // const isInvalid = password === '' || email === ''
  const isInvalid = false

  const CHECKBOX_TERMS = [
    {
      id: 'terms',
      label: 'I confirm that I have read and agree to the Terms of Service and Privacy Policy.',
      required: true
    },
    {
      id: 'marketing',
      label:
        'I would like to receive, occasional news and exclusive offers from via email. I can opt out of receiving these at any time in my account settings.'
    }
  ]

  return (
    <Form handleSubmit={() => {}}>
      <Row>
        <Column md={6}>
          <FormLabel label='First name'>
            <FormField name='nameFirst' register={register} errors={errors} />
          </FormLabel>
        </Column>

        <Column md={6}>
          <FormLabel label='Last name'>
            <FormField name='nameLast' register={register} errors={errors} />
          </FormLabel>
        </Column>
      </Row>

      <FormLabel label='Email'>
        <FormField name='email' register={register} errors={errors} type='email' />
      </FormLabel>

      <FormLabel label='Password'>
        <FormField name='password' register={register} errors={errors} type='password' />
      </FormLabel>

      {birthday && renderBirthday()}

      <CheckboxField data={CHECKBOX_TERMS} register={register} errors={errors} stacked />

      <Button
        align='right'
        content='Sign up'
        context='primary'
        disabled={isInvalid}
        size='lg'
        type='submit'
      />

      <StyledLink>
        Already have an account? <Link to={pathLogin}>Log in</Link>
      </StyledLink>
    </Form>
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
  pathLogin: '/account/sign-in'
}
