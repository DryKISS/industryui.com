/**
 * Dropzone
 */

// React
import React from 'react'

// UI
import { Dropzone } from '../dropzone'
import Readme from '../README.md'

export default {
  component: Dropzone,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  title: 'Form/Dropzone/Standard',
}

const BaseComponent = (props = {}) => {
  const onChange = (change) => {
    console.info('Changed', change)
  }

  const defaultProps = {
    accept: 'image/*',
    disabled: false,
    multiple: true,
    onChange: onChange,
    ...props,
  }

  return <Dropzone {...defaultProps} />
}

export const main = () => <BaseComponent />
export const multipleFalse = () => <BaseComponent multiple={false} />
export const acceptAll = () => <BaseComponent accept="" />
export const disabled = () => <BaseComponent disabled />
