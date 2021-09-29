/**
 * Components - Form - Input Group - Story
 */

// React
import React from 'react'

// Storybook
import SizeControl from '../../../../.storybook/decorators/controls/size'
import FormWrapper from '../../../../.storybook/decorators/wrapper/form'

// Yup
import { object, string } from 'yup'

// UI
import Button from '../../../atoms/button/button/button'
import Input from '../../input/input'
import Icon from '../../../atoms/icon/icon/icon'
import InputGroup from '../group'
import InputGroupAddon from '../addon'
import Readme from '../README.md'

const schema = object().shape({
  query: string().required()
})

export default {
  args: {
    size: 'md'
  },
  argTypes: {
    size: SizeControl()
  },
  component: InputGroup,
  decorators: [FormWrapper],
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    },
    schema: schema
  },
  title: 'Form/InputGroup'
}

export const Main = (args, { params: { formState, register } }) => {
  return (
    <InputGroup {...args}>
      <InputGroupAddon addonType="prepend">
        <Button content="Search" type="submit" size="sm" />
      </InputGroupAddon>

      <InputGroupAddon addonType="prepend" text>
        <Icon icon="search" />
      </InputGroupAddon>

      <Input
        errors={formState.errors}
        name="query"
        placeholder="Search..."
        register={register}
        size="lg"
      />

      <InputGroupAddon addonType="append" text>
        <Icon icon="search" />
      </InputGroupAddon>

      <InputGroupAddon addonType="append">
        <Button content="Search" type="submit" size="sm" />
      </InputGroupAddon>
    </InputGroup>
  )
}
