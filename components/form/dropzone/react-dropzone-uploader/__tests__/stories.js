/**
 * React Dropzone Uploader
 */

// React
import React from 'react'

// UI
import { Button, DropzoneUploader } from 'components'
import Readme from '../README.md'

// Storybook
import { Wrapper } from 'decorators'

export default {
  title: 'Form/Dropzone/Uploader',
  component: DropzoneUploader,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
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
      {/* fileWithMeta.restart  */}
    </>
  )
}
