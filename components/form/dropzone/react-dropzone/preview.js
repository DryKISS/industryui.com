/**
 * Dropzone - Preview
 * Shows the uploaded image preview
 */

// React
import React from 'react'
import { any, func } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import Close from '../../../atoms/close/close'
import Image from '../../../atoms/image//image'

const DropzonePreview = ({ file, handleRemove, index }) => {
  return (
    <StyledPreview>
      <Close click={handleRemove} />
      <Image alt={`Upload ${index}`} src={file.preview} />
    </StyledPreview>
  )
}

const StyledPreview = styled.div`
  border: 1px solid #000;
  margin-bottom: 1.5rem;
  z-index: 1;
`

DropzonePreview.propTypes = {
  file: any.isRequired,
  handleRemove: func.isRequired,
  index: any.isRequired
}

export default DropzonePreview
