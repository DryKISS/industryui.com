/**
 * Dropzone
 * Allows a user to Upload multiple images
 */

// React
import React, { Component, Fragment } from 'react'
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

  // Remove the uploaded file from the state
  handlePreview = (event) => {
    event.stopPropagation()
  }

  // // Remove the uploaded file from the state
  // handleRemove = (index) => (event) => {
  //   const { number } = this.props
  //   const { accepted } = this.state

  //   event.stopPropagation()

  //   var array = [...accepted]

  //   array.splice(index, 1)
  //   this.setState({ accepted: array })

  //   if (number !== 0 && accepted.length <= number) {
  //     this.setState({ disabled: false })
  //   }
  // }

  cleanup = () => {
    // Revoke data uris when done using the previews
    const { accepted } = this.props

    for (const file of accepted) {
      URL.revokeObjectURL(file.preview)
    }
  }

  placeholder = () => {
    return (
      <div className='Dropzone-placeholder'>

        <svg width='33%' viewBox='0 0 512 512' fill='#ecf0f3'>
          <path d='M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm16 336c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V112c0-8.822 7.178-16 16-16h416c8.822 0 16 7.178 16 16v288zM112 232c30.928 0 56-25.072 56-56s-25.072-56-56-56-56 25.072-56 56 25.072 56 56 56zm0-80c13.234 0 24 10.766 24 24s-10.766 24-24 24-24-10.766-24-24 10.766-24 24-24zm207.029 23.029L224 270.059l-31.029-31.029c-9.373-9.373-24.569-9.373-33.941 0l-88 88A23.998 23.998 0 0 0 64 344v28c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12v-92c0-6.365-2.529-12.47-7.029-16.971l-88-88c-9.373-9.372-24.569-9.372-33.942 0zM416 352H96v-4.686l80-80 48 48 112-112 80 80V352z' />
        </svg>

      </div>
    )
  }

  previewList = () => {
    const { accepted, handleRemove } = this.props
    // const length = accepted.length

    // const placeholder = []

    // for (let i = length; i < 6; i++) {
    //   placeholder.push(
    //     <Column key={i} lg={4} style={{ marginBottom: '1rem' }}>
    //       {this.placeholder()}
    //     </Column>
    //   )
    // }

    return (
      <Fragment>

        {accepted.map((file, index) =>
          <Column key={index} lg={2} style={{ marginBottom: '20px' }}>

            <DropzonePreview
              file={file}
              handleRemove={handleRemove}
              index={index}
            />

          </Column>
        )}

        {/* {placeholder} */}

      </Fragment>
    )
  }

  files = () => {
    const { accepted } = this.props
    // data.map((element) => (
    //   element.profile = false
    // ))

    // return accepted.map((file, index) => (
    //   <li key={index}>
    //     {file.name} - {file.size} bytes
    //   </li>
    // ))
  }

  render () {
    const {
      accepted,
      disabled,
      handleDrop
    } = this.props

    return (
      <section>

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

                  { accepted.length > 0 && this.previewList() }

                  { accepted.length <= 0 &&

                    <Column md={12}>

                      <Heading as='h2'>
                        Drag &amp; Drop images here
                        <br />
                        <small>or</small>
                        <br />
                      </Heading>

                      <Button content='Select files' size='lg' />

                    </Column>

                  }

                </Row>

              </Container>

            </StyledContainer>
          )}

        </ReactDropzone>

        <aside>
          <h4>Files</h4>
          <ul>{this.files()}</ul>
        </aside>

      </section>
    )
  }
}

const StyledContainer = styled.div`
  background-color: ${({ disabled, theme }) => disabled ? theme.COLOUR.danger : theme.COLOUR.light};
  border-color: ${({ isDragReject }) => isDragReject && '#c66'};
  border-radius: 5px;
  border-style: ${({ isDragReject, isDragActive }) => isDragReject || isDragActive ? 'solid' : 'dashed'};
  border-width: 2px;
  cursor: pointer;
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
  margin-bottom: 1rem;
  height: 50vh;
  padding: 1rem;
  overflow: auto;
  text-align: center;
  width: 100%;
`

// .Dropzone-placeholder {
//   border: 1px solid #ecf0f3;
//   display: flex;
//   justify-content: center;
//   margin: auto;
// }
