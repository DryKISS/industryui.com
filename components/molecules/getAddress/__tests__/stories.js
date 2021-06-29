/**
 * Get Address
 */

// React
import React from 'react'

// Storybook
import { ControlTypes } from '../../../../.storybook/decorators/controlTypes'

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// UI
import Button from '../../../atoms/button/button/button'
import Column from '../../../atoms/grid/Column'
import Form from '../../../form/form/form'
import GetAddress from '../getAddress'
import Readme from '../README.md'

export default {
  args: {
    size: 'lg',
    label: 'PostalCode',
    placeholder: 'enter postal code here ...',
    throttle: 0
  },
  argTypes: {
    errors: { control: { disable: true } },
    name: { control: { disable: true } },
    register: { control: { disable: true } },
    setValue: { control: { disable: true } },
    size: {
      control: { type: ControlTypes.Select, options: ['sm', 'md', 'lg'] }
    },
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

export const Main = (args) => {
  const { errors, handleSubmit, register, setValue } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.info(data)
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
        <Button content="Submit" type="submit" />
      </Column>
    </Form>
  )
}
