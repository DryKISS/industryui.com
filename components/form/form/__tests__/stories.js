/**
 * Components - Form - Form
 */

// Decorators
import { ControlTypes } from '../../../../.storybook/decorators'

// React Hook Form
import { Controller, useForm } from 'react-hook-form'

// Yup
import { number, object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// UI
import {
  Button,
  CheckboxField,
  Column,
  CurrencyInput,
  DatePickerCalendar,
  Divider,
  Dropzone,
  FormError,
  FormField,
  Form,
  FormLabel,
  Heading,
  InputGroup,
  InputGroupAddon,
  PercentInput,
  RadioField,
  ReactSelectField,
  Row,
  Search,
  SelectField,
  Space,
  Text,
  TextareaField
} from '../../../'

import { THEME_SIZE } from '../../../theme/constants/size'
import Readme from '../README.md'

// Data
import enGB from 'date-fns/locale/en-GB'
import { RADIO_GENDER } from '../../radio/__mocks__/radio'
import { Options } from '../../reactSelect/__mocks__/options'
import { COLOURS } from '../../select/__mocks__/colours'

export default {
  title: 'Form',
  component: Form,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const schema = object().shape({
  amount: number().required(),
  checkbox: string().required(),
  radio: string().required(),
  disabled: string(),
  email: string()
    .required('Please Enter an email')
    .email(),
  input: string().required(),
  name: string().required(),
  reactSelect: string().required(),
  rich: string().required(),
  datepicker: string().required(),
  textarea: string().required(),
  select: string().required(),
  readonly: string()
})

const checkbox = [
  {
    id: 'check',
    label: 'Yes',
    value: 'check'
  },
  {
    id: 'checked',
    label: 'No',
    value: 'checked'
  }
]

const all = ({ ...args }) => {
  const { control, errors, handleSubmit, register } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    console.info(data)
  }

  const colMd = args.ColumnWidth
  const rowBackground = args.backgroundColour

  const defaultProps = {
    errors: errors,
    register: register,
    size: args.size
  }

  const ErrMessage = message => <FormError message={message} />

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <Heading content='Inputs' tag='h1' />

      <Space />

      <Text>{args.formTitle}</Text>

      <Space />

      <Row style={{ background: rowBackground }}>
        <Column md={colMd}>
          <FormLabel size='md' label='Name'>
            <FormField {...defaultProps} name='name' />
            {errors.name && ErrMessage(errors.name.message)}
          </FormLabel>
        </Column>

        <Column md={colMd}>
          <FormLabel size='md' label='Email'>
            <FormField
              {...defaultProps}
              helperMessage={"We'll never share your email with anyone else."}
              name='email'
              placeholder='Enter Email'
            />
            {errors.email && ErrMessage(errors.email.message)}
          </FormLabel>
        </Column>

        <Column md={colMd}>
          <FormLabel label='Disabled'>
            <FormField {...defaultProps} disabled name='disabled' />
            {errors.disabled && ErrMessage(errors.disabled.message)}
          </FormLabel>
        </Column>

        <Column md={colMd}>
          <FormLabel label='Readonly'>
            <FormField
              {...defaultProps}
              defaultValue='Readonly with defaultValue'
              name='readonly'
              readOnly
            />
            {errors.readonly && ErrMessage(errors.readonly.message)}
          </FormLabel>
        </Column>

        <Column md={colMd}>
          <FormLabel label='Datepicker'>
            <DatePickerCalendar
              {...defaultProps}
              control={control}
              locale={enGB}
              name='datepicker'
            />
          </FormLabel>
        </Column>

        <Column md={colMd}>
          <FormLabel label='React Select'>
            <ReactSelectField
              {...defaultProps}
              control={control}
              name='reactSelect'
              options={Options}
            />
          </FormLabel>
        </Column>

        <Column md={12}>
          <FormLabel children='' label='Dropzone' />
          <Controller
            {...defaultProps}
            render={() => <Dropzone multiple={false} />}
            control={control}
            name='dropzone'
          />
        </Column>
      </Row>

      <Divider size='md' />

      <FormLabel label='Input Group'>
        <InputGroup>
          <FormField {...defaultProps} name='id' placeholder='Search...' />

          <InputGroupAddon addonType='append'>
            <Button content='Search' type='submit' size='sm' />
          </InputGroupAddon>
        </InputGroup>
      </FormLabel>

      <FormLabel label='Search'>
        <Search {...defaultProps} />
      </FormLabel>

      <CurrencyInput {...defaultProps} name='amount' label='Currency input' />
      <PercentInput {...defaultProps} name='amount' label='Percent input' />

      <FormLabel label='Input'>
        <FormField {...defaultProps} name='input' />
      </FormLabel>

      <FormLabel label='Textarea'>
        <TextareaField {...defaultProps} name='textarea' rows={2} />
      </FormLabel>

      <FormLabel label='Select'>
        <SelectField {...defaultProps} options={COLOURS} name='select' />
      </FormLabel>

      <CheckboxField
        {...defaultProps}
        data={checkbox}
        legend={args.checkboxLegend}
        name='checkbox'
      />

      <RadioField {...defaultProps} data={RADIO_GENDER()} legend='Gender?' name='radio' />

      <Button content='Submit' type='submit' />
    </Form>
  )
}

export const AllInputsTemplate = all.bind({})

AllInputsTemplate.args = {
  formTitle:
    'Grid elements can be used to layout a form, we do not need to repeat rows as the columns will wrap.',
  backgroundColour: '#F5F5F7',
  ColumnWidth: 6,
  datePickerValue: '',
  checkboxLegend: 'Checkbox Legend',
  size: 'lg'
}

AllInputsTemplate.argTypes = {
  children: {
    control: {
      type: null
    }
  },
  datePickerValue: {
    name: 'Date Picker Value',
    control: { type: ControlTypes.Date }
  },
  backgroundColour: { name: 'Background Colour', control: ControlTypes.Color },
  formTitle: {
    name: 'Form Tilte'
  },
  ColumnWidth: {
    name: 'col md',
    control: { type: ControlTypes.Range, min: 2, max: 12 }
  },

  size: {
    name: 'Input Size',
    control: { type: ControlTypes.Select, options: [THEME_SIZE.SM, THEME_SIZE.MD, THEME_SIZE.LG] }
  }
}
