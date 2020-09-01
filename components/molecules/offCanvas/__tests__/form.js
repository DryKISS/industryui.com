/**
 * Molecules - OffCanvas - Tests - Form
 */

// React Hook Form
import { useForm } from 'react-hook-form'
import { object, string } from 'yup'

// UI
import { FormForm, FormField, FormLabel } from 'components'

export const OffCanvasForm = ({ onSubmit }) => {
  const schema = object().shape({
    name: string().required(),
    surname: string().required(),
    color: string().required(),
    brand: string().required(),
    preferences: string().required(),
    suggestions: string().required(),
    email: string().required(),
    password: string().required()
  })

  const { errors, handleSubmit, register } = useForm({
    validationSchema: schema
  })

  const defaultOptions = {
    errors: errors,
    register: register
  }

  return (
    <FormForm id='offCanvasForm' handleSubmit={handleSubmit(onSubmit)}>
      <FormLabel label='Name'>
        <FormField {...defaultOptions} name='name' placeholder='Alfred' />
      </FormLabel>

      <FormLabel label='Surname'>
        <FormField {...defaultOptions} name='surname' placeholder='Lavanne' />
      </FormLabel>

      <FormLabel label='Favourite colour'>
        <FormField {...defaultOptions} name='color' placeholder='Red' />
      </FormLabel>

      <FormLabel label='Brand'>
        <FormField {...defaultOptions} name='brand' placeholder='Apple' />
      </FormLabel>

      <FormLabel label='Preferences'>
        <FormField {...defaultOptions} name='preferences' placeholder='Two' />
      </FormLabel>

      <FormLabel label='Suggestions'>
        <FormField {...defaultOptions} name='suggestions' placeholder='One' />
      </FormLabel>

      <FormLabel label='Email'>
        <FormField
          {...defaultOptions}
          name='email'
          placeholder='Enter email address'
          type='email'
        />
      </FormLabel>

      <FormLabel label='Password'>
        <FormField
          {...defaultOptions}
          name='password'
          placeholder='Enter your password'
          type='password'
        />
      </FormLabel>
    </FormForm>
  )
}
