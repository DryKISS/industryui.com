/**
 * Dropzone - Preview
 * Shows the uploaded image preview
 *
 * @todo Need to set style directly on the img tag of Image - split from Figure
 */

// React
import React, { Component } from 'react'
import { any, func } from 'prop-types'

// UI
import { Close, Image } from '../../../'

// Style
import styled, { withTheme } from 'styled-components'

export const DropzonePreview = withTheme(
  class DropzonePreview extends Component {
    static propTypes = {
      file: any,
      handleRemove: func,
      index: any
    }

    render () {
      const { file, handleRemove, index } = this.props

      return (
        // onClick={this.handlePreview}
        <StyledPreview>

          <StyledHeader>
            <Close handleClose={handleRemove(index)} />
          </StyledHeader>

          <StyledImage alt={`Upload ${index}`} src={file.preview} />

        </StyledPreview>
      )
    }
  }
)

const StyledPreview = styled.div`
  border: 1px solid #000;
  height: 200px;
  overflow: hidden;
  z-index: 10;
  object-fit: cover;
`

const StyledImage = styled(Image)`
  /* height: auto;
  max-width: 100%; */
`

const StyledHeader = styled.div`
  align-items: flex-start;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`
