/**
 * Input
 */

// React
import React from 'react'

// Storybook
import { withKnobs, boolean, text } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { Input, useForm } from 'components'
import Readme from '../README.md'

export default {
  title: 'Form/Controlled/Input',
  component: Input,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const { change, form, clear } = useForm({ email: '' })

  const defaultProps = {
    change: change,
    id: 'email',
    label: text('Label', 'Email'),
    placeholder: text('Placeholder', 'Enter your email'),
    readOnly: boolean('Read only', false),
    value: form.email,
    ...props,
    clear: props.clear ? clear : null
  }

  return <Input {...defaultProps} />
}

export const main = () => <BaseComponent />
export const noLabel = () => <BaseComponent label='' />
export const reset = () => <BaseComponent clear />
