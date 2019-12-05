/**
 * Form - Input - Group
 */

// React
import React from 'react'

// Storybook
import { withKnobs } from '@storybook/addon-knobs'
import { Size, Wrapper } from 'decorators'

// UI
import { Button, Input, InputGroup, InputGroupAddon } from 'components'
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

export const main = () => {
  const id = ''

  return (
    <BaseComponent>
      <Input change={() => {}} id='id' placeholder='Search...' value={id} />
      <InputGroupAddon addonType='append'>
        <Button content='Search' type='submit' />
      </InputGroupAddon>
    </BaseComponent>
  )
}
