/**
 * Dropzone
 *
 * @todo Get the initial look in a loop
 * @todo Need to merge the accepted files with the placeholders up to the max files allowed
 * @todo Import the SVG - need to configure next for Inline SVG
 * @todo Need to pass the files to the parent
 * @todo Produce a close component - remove
 * @todo When its set to disabled it rerenders everything
 */

// React
import React, { Component, Fragment } from 'react'
import { number } from 'prop-types'
import ReactDropzone from 'react-dropzone'

// UI
import { Container, Column, Row } from '../../'

// Style
import styles from './styles'

// Style
import { withTheme } from 'styled-components'

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

      if (accepted.length <= number) {
        this.setState({ disabled: false })
      }
    }

    // Handle the state addition
    handleDrop = (dropped) => {
      const { number } = this.props
      const { accepted } = this.state

      this.setState({
        accepted: accepted.concat(dropped)
      })

      if (accepted.length + 1 >= number) {
        this.setState({ disabled: true })
      }
    }

    preview = (file, index) => {
      return (
        <div className='Dropzone-preview' onClick={this.handlePreview}>

          <img className='Dropzone-image' src={file.preview} />

          <div className='Dropzone-remove' onClick={this.handleRemove(index)}>
            Remove file
          </div>

          <style jsx>{styles}</style>

        </div>
      )
    }

    placeholder = () => {
      return (
        <div className='Dropzone-placeholder'>

          <svg width='33%' viewBox='0 0 512 512' fill='#ecf0f3'>
            <path d='M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm16 336c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V112c0-8.822 7.178-16 16-16h416c8.822 0 16 7.178 16 16v288zM112 232c30.928 0 56-25.072 56-56s-25.072-56-56-56-56 25.072-56 56 25.072 56 56 56zm0-80c13.234 0 24 10.766 24 24s-10.766 24-24 24-24-10.766-24-24 10.766-24 24-24zm207.029 23.029L224 270.059l-31.029-31.029c-9.373-9.373-24.569-9.373-33.941 0l-88 88A23.998 23.998 0 0 0 64 344v28c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12v-92c0-6.365-2.529-12.47-7.029-16.971l-88-88c-9.373-9.372-24.569-9.372-33.942 0zM416 352H96v-4.686l80-80 48 48 112-112 80 80V352z' />
          </svg>

          <style jsx>{styles}</style>

        </div>
      )
    }

    previewList = () => {
      const { accepted } = this.state
      const length = accepted.length

      const placeholder = []

      for (let i = length; i < 6; i++) {
        placeholder.push(
          <Column key={i} lg={4} style={{ marginBottom: '1rem' }}>
            {this.placeholder()}
          </Column>
        )
      }

      return (
        <Fragment>

          {accepted.map((file, index) =>
            <Column key={index} lg={4} style={{ marginBottom: '1rem' }}>
              {this.preview(file, index)}
            </Column>
          )}

          {placeholder}

          <style jsx>{styles}</style>

        </Fragment>
      )
    }

    render () {
      // const { children, onDrop } = this.props
      const { accepted, disabled, rejected } = this.state

      return (
        <Fragment>

          <ReactDropzone
            accept='image/jpeg, image/png'
            acceptClassName='Dropzone-accept'
            activeClassName='Dropzone-active'
            disabled={disabled}
            className='Dropzone'
            disabledClassName='Dropzone-disabled'
            maxSize={5000000}
            multiple
            onDrop={this.handleDrop}
          >
            <Container>

              <Row>

                {accepted.length > 0 &&
                  this.previewList()
                }

                {/* Initial Look */}
                {accepted.length <= 0 &&
                  <Fragment>

                    <Column lg={4} style={{ marginBottom: '1rem' }}>
                      {this.placeholder()}
                    </Column>

                    <Column lg={4}>
                      {this.placeholder()}
                    </Column>

                    <Column lg={4}>
                      {this.placeholder()}
                    </Column>

                    <Column lg={4}>
                      {this.placeholder()}
                    </Column>

                    <Column lg={4}>
                      {this.placeholder()}
                    </Column>

                    <Column lg={4}>
                      {this.placeholder()}
                    </Column>

                  </Fragment>
                }

              </Row>

            </Container>

          </ReactDropzone>

          {/* <aside>

            <h2>Accepted files</h2>

            <ul>
              {
                accepted.map((f, index) => <li key={index}>{f.name} - {f.size} bytes</li>)
              }
            </ul>

            <h2>Rejected files</h2>

            <ul>
              {
                rejected.map((f, index) => <li key={index}>{f.name} - {f.size} bytes</li>)
              }
            </ul>

          </aside> */}

          <style jsx>{styles}</style>

        </Fragment>
      )
    }
  }
)
