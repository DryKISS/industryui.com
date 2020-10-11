/**
 * Select
 */

// Yup
import { object, string } from 'yup'

// UI
import {
  Button,
  Form,
  FormLabel,
  SelectField,
  SelectCountryField,
  Text,
  useForm,
  yupResolver
} from 'components'

import Readme from '../README.md'
import { COLOURS, EXPENSES } from '../__mocks__/select'

export default {
  title: 'Form/Select',
  component: SelectField,
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
    select: string().required()
  })

  const { errors, getValues, handleSubmit, register } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {}

  const defaultProps = {
    data: { name: 'fred' },
    defaultValue: '',
    disabled: false,
    errors: errors,
    name: 'select',
    placeholder: 'Range',
    range: [],
    register: register,
    showError: true,
    ...props
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <FormLabel label='Select'>
        {!props.country && <SelectField {...defaultProps} />}
        {props.country && <SelectCountryField {...defaultProps} />}
      </FormLabel>

      <Button content='Submit' type='submit' />

      {getValues() && <Text>{getValues().select}</Text>}
    </Form>
  )
}

export const main = () => <BaseComponent options={COLOURS} />
export const optionGroups = () => <BaseComponent options={EXPENSES} />
export const country = () => <BaseComponent country />
export const range = () => <BaseComponent range={[20, 0]} />
