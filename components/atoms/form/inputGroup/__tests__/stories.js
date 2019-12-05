/**
 * Form - Input - Group
 */

// React
import React from 'react'

// Storybook
import { withKnobs } from '@storybook/addon-knobs'
import { Size, Wrapper } from 'decorators'

// UI
import { Button, Icon, Input, InputGroup, InputGroupAddon, useChange } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Form/InputGroup',
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
  const [change, { id }] = useChange({ id: '' })

  return (
    <BaseComponent>
      <InputGroupAddon addonType='prepend'>
        <Button content='Search' type='submit' />
      </InputGroupAddon>

      <Input change={change} id='id' placeholder='Search...' value={id} />
    </BaseComponent>
  )
}

export const prependIcon = () => {
  const [change, { id }] = useChange({ id: '' })

  return (
    <BaseComponent>
      <InputGroupAddon addonType='prepend' text>
        <Icon icon='search' />
      </InputGroupAddon>

      <Input change={change} id='id' placeholder='Search...' value={id} />
    </BaseComponent>
  )
}

export const appendButton = () => {
  const [change, { id }] = useChange({ id: '' })

  return (
    <BaseComponent>
      <Input change={change} id='id' placeholder='Search...' value={id} />

      <InputGroupAddon addonType='append'>
        <Button content='Search' type='submit' />
      </InputGroupAddon>
    </BaseComponent>
  )
}

export const appendIcon = () => {
  const [change, { id }] = useChange({ id: '' })

  return (
    <BaseComponent>
      <Input change={change} id='id' placeholder='Search...' value={id} />

      <InputGroupAddon addonType='append' text>
        <Icon icon='search' />
      </InputGroupAddon>
    </BaseComponent>
  )
}
