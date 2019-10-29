/**
 * Dropzone - Preview
 * Shows the uploaded image preview
 */

// React
import { any, func } from 'prop-types'

// UI
import { Image } from '../../../'

// Style
import styled from 'styled-components'

const DropzonePreview = ({ file, handleRemove, index }) => {
  return (
    <StyledPreview>
      {/* <Close click={handleRemove(index)} /> */}
      <Image alt={`Upload ${index}`} src={file.preview} />
    </StyledPreview>
  )
}

const StyledPreview = styled.div`
  border: 1px solid #000;
  z-index: 1;
`

DropzonePreview.propTypes = {
  file: any,
  handleRemove: func,
  index: any
}

export { DropzonePreview }
