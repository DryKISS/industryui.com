/**
 * Dropzone
 * Allows a user to Upload multiple images
 */

// React
import React, { Component } from 'react'
import { array, func, number, object, oneOfType } from 'prop-types'
import ReactDropzone from 'react-dropzone'

// UI
import { Button, Container, Column, Heading, Row } from '../../'
import { DropzonePreview } from './components'

// Style
import styled from 'styled-components'

export class Dropzone extends Component {
  static propTypes = {
    accepted: oneOfType([array, object]),
    handleDrop: func,
    handleRemove: func,
    number: number
  }

  static defaultProps = {
    number: 4
  }

  componentWillUnmount () {
    this.cleanup()
  }

  cleanup = () => {
    // Revoke data uris when done using the previews
    const { accepted } = this.props

    for (const file of accepted) {
      URL.revokeObjectURL(file.preview)
    }
  }

  previewList = () => {
    const { accepted, handleRemove } = this.props

    return accepted.map((file, index) => (
      <Column key={index} md={2} style={{ marginBottom: '20px' }}>
        <DropzonePreview file={file} handleRemove={handleRemove} index={index} />
      </Column>
    ))
  }

  render () {
    const { accepted, disabled, handleDrop } = this.props

    return (
      <ReactDropzone
        accept='image/jpeg, image/png'
        disabled={disabled}
        maxSize={5000000}
        onDrop={handleDrop}
      >
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject,
          acceptedFiles,
          rejectedFiles
        }) => (
          <StyledContainer
            disabled={disabled}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
            {...getRootProps()}
          >
            <Container>
              <Row>
                <input {...getInputProps()} />

                {accepted.length > 0 && this.previewList()}

                {accepted.length <= 0 && (
                  <Column md={12}>
                    <Heading tag='h2'>
                      Drag &amp; Drop images here
                      <br />
                      <small>or</small>
                      <br />
                    </Heading>

                    <Button content='Select files' size='lg' />
                  </Column>
                )}
              </Row>
            </Container>
          </StyledContainer>
        )}
      </ReactDropzone>
    )
  }
}

const StyledContainer = styled.div`
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.COLOUR.danger : theme.COLOUR.light};
  border-color: ${({ isDragReject }) => isDragReject && '#c66'};
  border-radius: 0.25rem;
  border-style: ${({ isDragReject, isDragActive }) =>
    isDragReject || isDragActive ? 'solid' : 'dashed'};
  border-width: 2px;
  cursor: pointer;
  margin-bottom: 1rem;
  height: 25vh;
  padding: 1rem;
  overflow: auto;
  text-align: center;
  width: 100%;
`
