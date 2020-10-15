/**
 * Form - Search
 */

// Yup
import { object, string } from 'yup'

// UI
import { Divider, FormError, Form, Search, Text, useForm, yupResolver } from 'components'
import Readme from '../README.md'

export default {
  args: {
    appendSearchButton: false,
    appendSearchIcon: false,
    label: 'Go',
    placeholder: 'Search...',
    prependSearchIcon: false,
    type: 'search'
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['search', 'text']
      }
    }
  },
  title: 'Form/Search',
  component: Search,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const BaseComponent = (props = {}) => {
  const schema = object().shape({
    query: string().required()
  })

  const { errors, getValues, handleSubmit, register } = useForm({
    defaultValues: {
      query: props.value
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    console.info(data)
  }

  const value = getValues()?.query?.toString()

  const defaultProps = {
    errors: errors,
    register: register,
    ...props
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <Search {...defaultProps} />

      <Divider size='sm' />
      <Text>Search:</Text>
      <Text>{value}</Text>

      <FormError message={errors?.expiryAt?.message || ''} />
    </Form>
  )
}

export const main = args => <BaseComponent {...args} />
export const defaultValue = args => <BaseComponent {...args} value='XYZ' />
export const customLabel = args => <BaseComponent appendSearchButton {...args} label='Go' />
export const prependedIcon = args => <BaseComponent {...args} prependSearchIcon />
export const appendedIcon = args => <BaseComponent {...args} appendSearchIcon />
