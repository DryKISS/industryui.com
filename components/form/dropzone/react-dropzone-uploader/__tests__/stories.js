/**
 * React Dropzone Uploader
 */

// UI
import { Button, DropzoneUploader } from 'components'
import Readme from '../README.md'

export default {
  title: 'Form/Dropzone/Uploader',
  component: DropzoneUploader,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    autoUpload: false,
    ...props
  }

  return <DropzoneUploader {...defaultProps} />
}

export const main = () => {
  return (
    <>
      <BaseComponent />
      <Button content='Submit' />
    </>
  )
}
