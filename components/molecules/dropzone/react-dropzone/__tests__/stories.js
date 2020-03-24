/**
 * Dropzone
 */

// React
import React from 'react'

// UI
import { Dropzone } from '../'
import Readme from '../README.md'

// Storybook
import { Wrapper } from 'decorators'

export default {
  title: 'Molecules/Dropzone/Standard',
  component: Dropzone,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const onChange = change => {
    console.info('Changed', change)
  }

  const defaultProps = {
    accept: 'image/*',
    disabled: false,
    multiple: true,
    onChange: onChange,
    ...props
  }

  return <Dropzone {...defaultProps} />
}

export const main = () => <BaseComponent />
export const multipleFalse = () => <BaseComponent multiple={false} />
export const acceptAll = () => <BaseComponent accept='' />
export const disabled = () => <BaseComponent disabled />
