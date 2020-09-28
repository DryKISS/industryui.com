/**
 * Form - Input - Group
 */

// Storybook
import { Size, Wrapper } from 'decorators'

// UI
import { Button, FormField, Icon, InputGroup, InputGroupAddon, useForm } from 'components'
import Readme from '../README.md'

export default {
  title: 'Form/InputGroup',
  component: InputGroup,
  decorators: [Wrapper],
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

const Input = () => {
  const { register, errors } = useForm()

  return <FormField errors={errors} name='id' placeholder='Search...' register={register} />
}

export const prependButton = () => {
  return (
    <BaseComponent>
      <InputGroupAddon addonType='prepend'>
        <Button content='Search' type='submit' />
      </InputGroupAddon>

      <Input />
    </BaseComponent>
  )
}

export const prependIcon = () => {
  return (
    <BaseComponent>
      <InputGroupAddon addonType='prepend' text>
        <Icon icon='search' />
      </InputGroupAddon>

      <Input />
    </BaseComponent>
  )
}

export const appendButton = () => {
  return (
    <BaseComponent>
      <Input />

      <InputGroupAddon addonType='append'>
        <Button content='Search' type='submit' />
      </InputGroupAddon>
    </BaseComponent>
  )
}

export const appendIcon = () => {
  return (
    <BaseComponent>
      <Input />

      <InputGroupAddon addonType='append' text>
        <Icon icon='search' />
      </InputGroupAddon>
    </BaseComponent>
  )
}
