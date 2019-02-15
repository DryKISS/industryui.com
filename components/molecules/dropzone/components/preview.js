/**
 * Dropzone - Preview
 * Shows the uploaded image preview
 */

// React
import { any, func } from 'prop-types'

// UI
import { Close, Image } from '../../../'

// Style
import styled from 'styled-components'

const DropzonePreview = ({ file, handleRemove, index }) => {
  return (
    <StyledPreview>

      <StyledHeader>
        <Close handleClose={handleRemove(index)} />
      </StyledHeader>

      <Image alt={`Upload ${index}`} src={file.preview} />

    </StyledPreview>
  )
}

DropzonePreview.propTypes = {
  file: any,
  handleRemove: func,
  index: any
}

const StyledPreview = styled.div`
  border: 1px solid #000;
  height: 200px;
  overflow: hidden;
  z-index: 10;
  object-fit: cover;
`

const StyledHeader = styled.div`
  align-items: flex-start;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`

export { DropzonePreview }
