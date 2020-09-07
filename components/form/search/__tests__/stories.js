/**
 * Form - Search
 */

// Storybook
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// Yup
import { object, string } from 'yup'

// UI
import { Divider, FormError, FormForm, Search, Text, useForm, yupResolver } from 'components'
import Readme from '../README.md'

export default {
  title: 'Form/Search',
  component: Search,
  decorators: [withKnobs, Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
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
    appendSearchButton: boolean('Append saerch button', props.appendSearchButton || false),
    appendSearchIcon: boolean('Append saerch icon', props.appendSearchIcon || false),
    errors: errors,
    label: text('Label', props.label || 'Go'),
    placeholder: text('Placeholder', props.placeholder || 'Search...'),
    prependSearchIcon: boolean('Prepend search icon', props.prependSearchIcon || false),
    register: register,
    type: select(
      'Type',
      {
        Search: 'search',
        Text: 'text'
      },
      props.type || 'search'
    ),
    ...props
  }

  return (
    <FormForm handleSubmit={handleSubmit(onSubmit)}>
      <Search {...defaultProps} />

      <Divider size='sm' />
      <Text>Search:</Text>
      <Text>{value}</Text>

      <FormError message={errors?.expiryAt?.message || ''} />
    </FormForm>
  )
}

export const main = () => <BaseComponent />
export const defaultValue = () => <BaseComponent value='XYZ' />
export const customLabel = () => <BaseComponent appendSearchButton label='Go' />
export const prependedIcon = () => <BaseComponent prependSearchIcon />
export const appendedIcon = () => <BaseComponent appendSearchIcon />
