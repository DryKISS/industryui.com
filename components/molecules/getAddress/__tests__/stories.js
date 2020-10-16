/**
 * Get Address
 */
//

// Storybook
import { ControlTypes } from 'decorators'

// UI
import { Button, Column, Form, GetAddress, useForm, yupResolver } from 'components'

// Yup
import { object, string } from 'yup'

import Readme from '../README.md'

export default {
  args: { size: 'lg', label: 'PostalCode', placeholder: 'enter postal code here ...', throttle: 0 },
  argTypes: {
    errors: { control: { disable: true } },
    name: { control: { disable: true } },
    register: { control: { disable: true } },
    setValue: { control: { disable: true } },
    size: { control: { type: ControlTypes.Select, options: ['sm', 'md', 'lg'] } },
    validator: { control: { disable: true } }
  },
  title: 'Molecules/Get Address',
  component: GetAddress,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const elementName = 'postCode'

const schema = object().shape({
  [elementName]: string().required('This Field Is Required')
})

export const main = args => {
  const { errors, handleSubmit, register, setValue } = useForm({ resolver: yupResolver(schema) })
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <Column md={6}>
        <GetAddress
          {...args}
          errors={errors}
          setValue={setValue}
          register={register}
          name={elementName}
        />
        <Button content='Submit' type='submit' />
      </Column>
    </Form>
  )
}
