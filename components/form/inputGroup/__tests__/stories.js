/**
 * Components - Form - Input Group - Story
 */

// Storybook
import { SizeControl } from '../../../../.storybook/decorators'

// React Hook Form
import { useForm } from 'react-hook-form'

// UI
import { Button, FormField, Icon, InputGroup, InputGroupAddon } from '../../../'
import Readme from '../README.md'

export default {
  args: {
    size: 'md'
  },
  argTypes: {
    size: SizeControl()
  },
  component: InputGroup,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Form/InputGroup'
}

const BaseComponent = (props = {}) => {
  return <InputGroup {...props} />
}

const Input = () => {
  const { register, errors } = useForm()

  return <FormField errors={errors} name='id' placeholder='Search...' register={register} />
}

export const prependButton = args => {
  return (
    <BaseComponent {...args}>
      <InputGroupAddon addonType='prepend'>
        <Button content='Search' type='submit' size='sm' />
      </InputGroupAddon>

      <Input />
    </BaseComponent>
  )
}

export const prependIcon = args => {
  return (
    <BaseComponent {...args}>
      <InputGroupAddon addonType='prepend' text>
        <Icon icon='search' />
      </InputGroupAddon>

      <Input />
    </BaseComponent>
  )
}

export const appendButton = args => {
  return (
    <BaseComponent {...args}>
      <Input />

      <InputGroupAddon addonType='append'>
        <Button content='Search' type='submit' size='sm' />
      </InputGroupAddon>
    </BaseComponent>
  )
}

export const appendIcon = args => {
  return (
    <BaseComponent {...args}>
      <Input />

      <InputGroupAddon addonType='append' text>
        <Icon icon='search' />
      </InputGroupAddon>
    </BaseComponent>
  )
}
