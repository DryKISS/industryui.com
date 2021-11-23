/**
 * Components - Form - Form
 */

// React
import React from 'react'

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { bool, number, object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// UI
import Button from '../../../atoms/button/button/button'
import Checkbox from '../../checkbox/checkbox'
import Column from '../../../atoms/grid/Column'
import Currency from '../../currency/currency'
import DatePicker from '../../datePicker/datePicker'
import DropzoneController from '../../dropzone/controller'
import Error from '../../error/error'
import Input from '../../input/input'
import Fieldset from '../../feildset/fieldset'
import Form from '../../form/form'
import Label from '../../label/label'
import Legend from '../../legend/legend'
import Heading from '../../../atoms/heading/heading'
import InputGroup from '../../inputGroup/group'
import InputGroupAddon from '../../inputGroup/addon'
import Percent from '../../percent/percent'
import Radio from '../../radio/radio'
import ReactSelect from '../../reactSelect/reactSelect'
import Row from '../../../atoms/grid/Row'
import Search from '../../search/search'
import Select from '../../select/select'
import Space from '../../../atoms/space/space'
import Text from '../../../atoms/text/text'
import Textarea from '../../textarea/textarea'
import Readme from '../README.md'

// Data
import enGB from 'date-fns/locale/en-GB'
import Options from '../../reactSelect/__mocks__/options'
import EXPENSES from '../../select/__mocks__/expenses'

export default {
  component: Form,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Form/Form'
}

const schema = object().shape({
  currency: number().required(),
  percent: number().required(),
  checkbox: bool().oneOf([true], 'Accept checkbox'),
  checked: bool().oneOf([true], 'Accept checkbox'),
  radio: string().required(),
  disabled: string(),
  email: string().required('Please Enter an email').email(),
  input: string().required(),
  name: string().required(),
  rich: string().required(),
  datepicker: string().required(),
  textarea: string().required(),
  select: string().required(),
  readonly: string()
})

export const All = () => {
  const { control, formState, handleSubmit, register } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.info(data)
  }

  const defaultProps = {
    control,
    errors: formState.errors,
    register,
    size: 'lg'
  }

  const ErrMessage = (message) => <Error message={message} />

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <Heading content="Inputs" tag="h1" />

      <Space />

      <Text>
        Grid can be used to layout a form, we do not need to repeat rows as the columns will wrap.
      </Text>

      <Space />

      <Row>
        <Column md={6}>
          <Label size="md" label="Name">
            <Input {...defaultProps} name="name" />
            {formState.errors.name && ErrMessage(formState.errors.name.message)}
          </Label>
        </Column>

        <Column md={6}>
          <Label size="md" label="Email">
            <Input
              {...defaultProps}
              helperMessage={"We'll never share your email with anyone else."}
              name="email"
              placeholder="Enter Email"
            />
            {formState.errors.email && ErrMessage(formState.errors.email.message)}
          </Label>
        </Column>

        <Column md={6}>
          <Label label="Disabled">
            <Input {...defaultProps} disabled name="disabled" />
            {formState.errors.disabled && ErrMessage(formState.errors.disabled.message)}
          </Label>
        </Column>

        <Column md={6}>
          <Label label="Readonly">
            <Input
              {...defaultProps}
              defaultValue="Readonly with defaultValue"
              name="readonly"
              readOnly
            />
            {formState.errors.readonly && ErrMessage(formState.errors.readonly.message)}
          </Label>
        </Column>

        <Column md={6}>
          <Label label="Datepicker">
            <DatePicker {...defaultProps} control={control} locale={enGB} name="datepicker" />
          </Label>
        </Column>

        <Column md={6}>
          <Label label="React Select">
            <ReactSelect
              {...defaultProps}
              control={control}
              isMulti
              name="reactSelect"
              options={Options}
            />
          </Label>
        </Column>

        <Column md={12}>
          <Label label="Dropzone">
            <DropzoneController {...defaultProps} />
          </Label>
        </Column>

        <Column md={6}>
          <Label label="Input Group">
            <InputGroup>
              <Input {...defaultProps} name="id" placeholder="Search..." />

              <InputGroupAddon addonType="append">
                <Button content="Search" type="submit" size="sm" />
              </InputGroupAddon>
            </InputGroup>
          </Label>
        </Column>

        <Column md={6}>
          <Label label="Search">
            <Search {...defaultProps} />
          </Label>
        </Column>

        <Column md={6}>
          <Label label="Currency">
            <Currency {...defaultProps} name="currency" label="Currency input" />
          </Label>
        </Column>

        <Column md={6}>
          <Label label="Percent">
            <Percent {...defaultProps} name="percent" label="Percent input" />
          </Label>
        </Column>

        <Column md={6}>
          <Fieldset>
            <Legend>Checkboxes</Legend>
            <Checkbox {...defaultProps} inline label="Yes" name="checkbox" />
            <Checkbox {...defaultProps} inline label="No" name="checked" />
          </Fieldset>
        </Column>

        <Column md={6}>
          <Label label="Input">
            <Input {...defaultProps} name="input" />
          </Label>
        </Column>

        <Column md={6}>
          <Label label="Textarea">
            <Textarea {...defaultProps} name="textarea" rows={1} />
          </Label>
        </Column>

        <Column md={6}>
          <Label label="Select">
            <Select {...defaultProps} options={EXPENSES} name="select" />
          </Label>
        </Column>

        <Column md={6}>
          <Fieldset>
            <Legend>Radio Buttons</Legend>
            <Radio {...defaultProps} inline label="Yes" name="radio" value="yes" />
            <Radio {...defaultProps} inline label="No" name="radio" value="no" />
          </Fieldset>
        </Column>
      </Row>

      <Button content="Submit" type="submit" />
    </Form>
  )
}
