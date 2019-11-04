/**
 * Dropzone
 * Allows a user to Upload multiple images
 */

// React
import React, { useCallback } from 'react'
import { bool, string } from 'prop-types'

// React Dropzone
import { useDropzone } from 'react-dropzone'

// UI
// import { Button, Container, Column, Heading, Row } from '../../../'
import { Accept } from './accept'
// import { DropzonePreview } from './'

// Style
import styled from 'styled-components'

export const Dropzone = ({ accept, disabled, handleDrop }) => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log('Dropped')
    handleDrop && handleDrop(acceptedFiles)
  }, [])

  const {
    acceptedFiles,
    rejectedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: accept,
    disabled: disabled,
    onDrop
  })

  const acceptedFilesItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  const rejectedFilesItems = rejectedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  console.log('Dropzone', isDragActive, isDragAccept, isDragReject, accept, disabled)

  return (
    <>
      <StyledContainer
        dragActive={isDragActive}
        dragAccept={isDragAccept}
        dragReject={isDragReject}
        disabled={disabled}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragAccept && <p>All files will be accepted</p>}
        {isDragReject && <p>Some files will be rejected</p>}

        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <>
            <p>Drag 'n' drop some files here, or click to select files</p>
            {accept && <Accept accept={accept} />}
          </>
        )}
      </StyledContainer>

      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFilesItems}</ul>
        <h4>Rejected files</h4>
        <ul>{rejectedFilesItems}</ul>
      </aside>
    </>
  )
}

const StyledContainer = styled.div`
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.COLOUR.warning : theme.COLOUR.light};
  border-color: ${({ dragAccept, dragReject, theme }) =>
    (dragReject && theme.COLOUR.warning) || (dragAccept && theme.COLOUR.success)};
  border-radius: 0.25rem;
  border-style: ${({ dragActive }) => (dragActive ? 'solid' : 'dashed')};
  border-width: 2px;
  cursor: pointer;
  margin-bottom: 1rem;
  height: 25vh;
  padding: 1rem;
  outline: none;
  overflow: auto;
  text-align: center;
  transition: border 0.24s ease-in-out;
  width: 100%;
`

Dropzone.propTypes = {
  accept: string,
  disabled: bool
}

Dropzone.defaultProps = {
  accept: 'image/jpeg, image/png',
  disabled: false
}

//   static propTypes = {
//     accepted: oneOfType([array, object]),
//     handleDrop: func,
//     handleRemove: func,
//     number: number
//   }

//   static defaultProps = {
//     number: 4
//   }

//   componentWillUnmount () {
//     this.cleanup()
//   }

//   cleanup = () => {
//     // Revoke data uris when done using the previews
//     const { accepted } = this.props

//     for (const file of accepted) {
//       URL.revokeObjectURL(file.preview)
//     }
//   }

//   previewList = () => {
//     const { accepted, handleRemove } = this.props

//     return accepted.map((file, index) => (
//       <Column key={index} md={2} style={{ marginBottom: '20px' }}>
//         <DropzonePreview file={file} handleRemove={handleRemove} index={index} />
//       </Column>
//     ))
//   }

//   render () {
//     const { accepted, disabled, handleDrop } = this.props

//     return (
//       <ReactDropzone
//         accept='image/jpeg, image/png'
//         disabled={disabled}
//         maxSize={5000000}
//         onDrop={handleDrop}
//       >
//         {({
//           getRootProps,
//           getInputProps,
//           isDragActive,
//           isDragAccept,
//           isDragReject,
//           acceptedFiles,
//           rejectedFiles
//         }) => (
//           <StyledContainer
//             disabled={disabled}
//             isDragActive={isDragActive}
//             isDragReject={isDragReject}
//             {...getRootProps()}
//           >
//             <Container>
//               <Row>
//                 <input {...getInputProps()} />

//                 {accepted.length > 0 && this.previewList()}

//                 {accepted.length <= 0 && (
//                   <Column md={12}>
//                     <Heading tag='h2'>
//                       Drag &amp; Drop images here
//                       <br />
//                       <small>or</small>
//                       <br />
//                     </Heading>

//                     <Button content='Select files' size='lg' />
//                   </Column>
//                 )}
//               </Row>
//             </Container>
//           </StyledContainer>
//         )}
//       </ReactDropzone>
//     )
//   }
// }
