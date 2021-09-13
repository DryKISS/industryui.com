/**
 * Components - Form - Form
 */

// React
import React from 'react'

// Decorators
import ControlTypes from '../../../../.storybook/decorators/controls/controlTypes'

// React Hook Form
import { Controller, useForm } from 'react-hook-form'

// Yup
import { number, object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// UI
import Button from '../../../atoms/button/button/button'
import Checkbox from '../../checkbox/checkbox'
import Column from '../../../atoms/grid/Column'
import CurrencyInput from '../../currency/currencyInput'
import DatePickerCalendar from '../../datePicker/calendar/calendar'
import Divider from '../../../atoms/divider/divider'
import Dropzone from '../../dropzone/react-dropzone/dropzone'
import FormError from '../../error/error'
import Input from '../../input/input'
import Form from '../../form/form'
import Label from '../../label/label'
import Heading from '../../../atoms/heading/heading'
import InputGroup from '../../inputGroup/group'
import InputGroupAddon from '../../inputGroup/addon'
import PercentInput from '../../percent/percentInput'
import RadioField from '../../radio/radio'
import ReactSelectField from '../../reactSelect/reactSelect'
import Row from '../../../atoms/grid/Row'
import Search from '../../search/search'
import SelectField from '../../select/select'
import Space from '../../../atoms/space/space'
import Text from '../../../atoms/text/text'
import TextareaField from '../../textarea/textarea'
import THEME_SIZE from '../../../constants/size'
import Readme from '../README.md'

// Data
import enGB from 'date-fns/locale/en-GB'
import { RADIO_GENDER } from '../../radio/__mocks__/radio'
import Options from '../../reactSelect/__mocks__/options'
import COLOURS from '../../select/__mocks__/colours'

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
  email: string().required('Please Enter an email').email(),
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

const All = ({ ...args }) => {
  const { control, errors, handleSubmit, register } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.info(data)
  }

  const colMd = args.ColumnWidth
  const rowBackground = args.backgroundColour

  const defaultProps = {
    errors: errors,
    register: register,
    size: args.size
  }

  const ErrMessage = (message) => <FormError message={message} />

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <Heading content="Inputs" tag="h1" />

      <Space />

      <Text>{args.formTitle}</Text>

      <Space />

      <Row style={{ background: rowBackground }}>
        <Column md={colMd}>
          <Label size="md" label="Name">
            <Input {...defaultProps} name="name" />
            {errors.name && ErrMessage(errors.name.message)}
          </Label>
        </Column>

        <Column md={colMd}>
          <Label size="md" label="Email">
            <Input
              {...defaultProps}
              helperMessage={"We'll never share your email with anyone else."}
              name="email"
              placeholder="Enter Email"
            />
            {errors.email && ErrMessage(errors.email.message)}
          </Label>
        </Column>

        <Column md={colMd}>
          <Label label="Disabled">
            <Input {...defaultProps} disabled name="disabled" />
            {errors.disabled && ErrMessage(errors.disabled.message)}
          </Label>
        </Column>

        <Column md={colMd}>
          <Label label="Readonly">
            <Input
              {...defaultProps}
              defaultValue="Readonly with defaultValue"
              name="readonly"
              readOnly
            />
            {errors.readonly && ErrMessage(errors.readonly.message)}
          </Label>
        </Column>

        <Column md={colMd}>
          <Label label="Datepicker">
            <DatePickerCalendar
              {...defaultProps}
              control={control}
              locale={enGB}
              name="datepicker"
            />
          </Label>
        </Column>

        <Column md={colMd}>
          <Label label="React Select">
            <ReactSelectField
              {...defaultProps}
              control={control}
              name="reactSelect"
              options={Options}
            />
          </Label>
        </Column>

        <Column md={12}>
          <Label children="" label="Dropzone" />
          <Controller
            {...defaultProps}
            render={() => <Dropzone multiple={false} />}
            control={control}
            name="dropzone"
          />
        </Column>
      </Row>

      <Divider size="md" />

      <Label label="Input Group">
        <InputGroup>
          <Input {...defaultProps} name="id" placeholder="Search..." />

          <InputGroupAddon addonType="append">
            <Button content="Search" type="submit" size="sm" />
          </InputGroupAddon>
        </InputGroup>
      </Label>

      <Label label="Search">
        <Search {...defaultProps} />
      </Label>

      <CurrencyInput {...defaultProps} name="amount" label="Currency input" />
      <PercentInput {...defaultProps} name="amount" label="Percent input" />

      <Label label="Input">
        <Input {...defaultProps} name="input" />
      </Label>

      <Label label="Textarea">
        <TextareaField {...defaultProps} name="textarea" rows={2} />
      </Label>

      <Label label="Select">
        <SelectField {...defaultProps} options={COLOURS} name="select" />
      </Label>

      <Checkbox {...defaultProps} data={checkbox} legend={args.checkboxLegend} name="checkbox" />

      <RadioField {...defaultProps} data={RADIO_GENDER()} legend="Gender?" name="radio" />

      <Button content="Submit" type="submit" />
    </Form>
  )
}

export const AllInputsTemplate = All.bind({})

AllInputsTemplate.args = {
  formTitle:
    'Grid can be used to layout a form, we do not need to repeat rows as the columns will wrap.',
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
    control: {
      type: ControlTypes.Select,
      options: [THEME_SIZE.SM, THEME_SIZE.MD, THEME_SIZE.LG]
    }
  }
}
