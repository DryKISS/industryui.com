/**
 * React Dropzone Uploader
 * Allows a user to Upload multiple images
 */

// React
import React from 'react'
import { bool, string } from 'prop-types'

// React Dropzone
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'

export const DropzoneUploader = ({ autoUpload, SubmitButtonComponent, url }) => {
  // Specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    return { url: url }
  }

  // Called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file)
  }

  // Receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  return (
    <Dropzone
      accept='image/*,audio/*,video/*'
      autoUpload={autoUpload}
      canRestart={false}
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      // submitButtonDisabled={false}
      // SubmitButtonComponent={SubmitButtonComponent}
    />
  )
}

DropzoneUploader.propTypes = {
  autoUpload: bool,
  // handleSubmit: func.isRequired,
  url: string
}

DropzoneUploader.defaultProps = {
  autoUpload: false,
  url: 'https://httpbin.org/post'
}
