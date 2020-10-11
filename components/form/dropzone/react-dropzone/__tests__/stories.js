/**
 * Dropzone
 */

// UI
import { Dropzone } from 'components'
import Readme from '../README.md'

export default {
  title: 'Form/Dropzone/Standard',
  component: Dropzone,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
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
