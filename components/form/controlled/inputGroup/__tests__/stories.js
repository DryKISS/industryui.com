/**
 * Form - Input - Group
 */

// React
import React from 'react'

// Storybook
import { withKnobs } from '@storybook/addon-knobs'
import { Size, Wrapper } from 'decorators'

// UI
import { Input, InputGroup, InputGroupAddon } from '../../'
import { Button, Icon, useForm } from '../../../../'
import Readme from '../README.md'

export default {
  title: 'Form/Controlled/InputGroup',
  component: InputGroup,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    size: Size(),
    ...props
  }

  return <InputGroup {...defaultProps} />
}

export const prependButton = () => {
  const { change, form, clear } = useForm({ id: '' })

  return (
    <BaseComponent>
      <InputGroupAddon addonType='prepend'>
        <Button content='Search' type='submit' />
      </InputGroupAddon>

      <Input change={change} clear={clear} id='id' placeholder='Search...' value={form.id} />
    </BaseComponent>
  )
}

export const prependIcon = () => {
  const { change, form } = useForm({ id: '' })

  return (
    <BaseComponent>
      <InputGroupAddon addonType='prepend' text>
        <Icon icon='search' />
      </InputGroupAddon>

      <Input change={change} id='id' placeholder='Search...' value={form.id} />
    </BaseComponent>
  )
}

export const appendButton = () => {
  const { change, form, clear } = useForm({ id: '' })

  return (
    <BaseComponent>
      <Input change={change} clear={clear} id='id' placeholder='Search...' value={form.id} />

      <InputGroupAddon addonType='append'>
        <Button content='Search' type='submit' />
      </InputGroupAddon>
    </BaseComponent>
  )
}

export const appendIcon = () => {
  const { change, form } = useForm({ id: '' })

  return (
    <BaseComponent>
      <Input change={change} id='id' placeholder='Search...' value={form.id} />

      <InputGroupAddon addonType='append' text>
        <Icon icon='search' />
      </InputGroupAddon>
    </BaseComponent>
  )
}
