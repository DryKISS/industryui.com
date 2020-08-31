/**
 * Molecules - OffCanvas - Tests - Form
 */

// UI
import { Button, FormForm, FormField, FormLabel } from 'components'

export const OffCanvasForm = ({ register }) => {
  const defaultOptions = { register: register }

  return (
    <FormForm submit={() => {}}>
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
        <FormField {...defaultOptions} name='brand' placeholder='Red' />
      </FormLabel>

      <FormLabel label='Preferences'>
        <FormField {...defaultOptions} name='preferences' placeholder='Red' />
      </FormLabel>

      <FormLabel label='Suggestions'>
        <FormField {...defaultOptions} name='suggestions' placeholder='Red' />
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

      <FormLabel label='Repeat your Password'>
        <FormField
          {...defaultOptions}
          name='repeatPassword'
          placeholder='Enter your password'
          type='password'
        />
      </FormLabel>

      <Button content='Go to next step' secondary type='submit' />
    </FormForm>
  )
}
