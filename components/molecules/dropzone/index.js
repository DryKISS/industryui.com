/**
 * Dropzone
 * Allows a user to Upload multiple images
 *
 * @todo Get the initial look in a loop
 * @todo Need to merge the accepted files with the placeholders up to the max files allowed
 * @todo Import the SVG - need to configure next for Inline SVG
 * @todo Need to pass the files to the parent
 * @todo When its set to disabled it rerenders everything
 */

// React
import React, { Component, Fragment } from 'react'
import { number } from 'prop-types'
import ReactDropzone from 'react-dropzone'

// UI
import { Button, Container, Column, Heading, Row } from '../../'
import { DropzonePreview } from './components'

// Style
import styled, { withTheme } from 'styled-components'

export const Dropzone = withTheme(
  class Dropzone extends Component {
    constructor (props) {
      super(props)

      this.state = {
        accepted: [],
        disabled: false,
        rejected: []
      }
    }

    static propTypes = {
      number: number
    }

    static defaultProps = {
      number: 6
    }

    componentWillUnmount () {
      this.cleanup()
    }

    // Remove the uploaded file from the state
    handlePreview = (event) => {
      event.stopPropagation()
    }

    // Remove the uploaded file from the state
    handleRemove = (index) => (event) => {
      const { number } = this.props
      const { accepted } = this.state

      event.stopPropagation()

      var array = [...accepted]

      array.splice(index, 1)
      this.setState({ accepted: array })

      if (number !== 0 && accepted.length <= number) {
        this.setState({ disabled: false })
      }
    }

    // Handle the state addition
    handleDrop = (dropped) => {
      const { number } = this.props
      const { accepted } = this.state

      this.setState({
        accepted: accepted.concat(dropped.map(file => ({
          ...dropped,
          preview: URL.createObjectURL(file)
        })))
      })

      if (number !== 0 && accepted.length + 1 >= number) {
        this.setState({ disabled: true })
      }
    }

    cleanup = () => {
      // Revoke data uris when done using the previews
      const { accepted } = this.state

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
      const { accepted } = this.state
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
                handleRemove={this.handleRemove}
                index={index}
              />

            </Column>
          )}

          {/* {placeholder} */}

        </Fragment>
      )
    }

    render () {
      // const { children, onDrop } = this.props
      const { accepted, disabled } = this.state

      return (
        <StyledReactDropzone
          accept='image/jpeg, image/png'
          // acceptClassName='Dropzone-accept'
          // activeClassName='Dropzone-active'
          disabled={disabled}
          // disabledClassName='Dropzone-disabled'
          maxSize={5000000}
          multiple
          onDrop={this.handleDrop}
        >
          <Container>

            <Row>

              {accepted.length > 0 &&
                this.previewList()
              }

              {accepted.length <= 0 &&

                <Heading as='h2'>

                  Drag &amp; Drop images here

                  <br />

                  <small>or</small>

                  <br />

                  <Button content='Select files' size='lg' />

                </Heading>

                //   <Column lg={4} style={{ marginBottom: '1rem' }}>
                //     {this.placeholder()}
                //   </Column>

                //   <Column lg={4}>
                //     {this.placeholder()}
                //   </Column>

                //   <Column lg={4}>
                //     {this.placeholder()}
                //   </Column>

                //   <Column lg={4}>
                //     {this.placeholder()}
                //   </Column>

                //   <Column lg={4}>
                //     {this.placeholder()}
                //   </Column>

                //   <Column lg={4}>
                //     {this.placeholder()}
                //   </Column>
              }

            </Row>

          </Container>

        </StyledReactDropzone>
      )
    }
  }
)

const StyledReactDropzone = styled(ReactDropzone)`
  background-color: ${props => props.theme.COLOUR.light};
  border: 1px dashed black;
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

// :global(.Dropzone-disabled) {
//   border: 1px solid #00b43c;
// }

// :global(.Dropzone-accept) {
//   border: 1px solid black;
// }

// :global(.Dropzone-active) {
//   border: 1px solid black;
// }

// .Dropzone-placeholder {
//   border: 1px solid #ecf0f3;
//   display: flex;
//   justify-content: center;
//   margin: auto;
// }
