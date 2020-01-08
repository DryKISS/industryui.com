/**
 * Dropzone
 * Allows a user to Upload multiple images
 */

// React
import React, { useEffect, useState } from 'react'
import { bool, string } from 'prop-types'

// React Dropzone
import { useDropzone } from 'react-dropzone'

// UI
// import { Button, Container, Column, Heading, Row } from '../../../'
import { Accept } from './accept'
import { DropzonePreview } from './'

// Style
import styled from 'styled-components'

export const Dropzone = ({ accept, disabled, multiple, onChange }) => {
  const [files, setFiles] = useState([])

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    accept: accept,
    disabled: disabled,
    multiple: multiple,
    onDrop: acceptedFiles => {
      const files = acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )

      setFiles(files)

      if (onChange) {
        onChange(files)
      }
    }
  })

  const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  }

  const removeFile = file => {
    const newFiles = [...files]
    newFiles.splice(newFiles.indexOf(file), 1)
    setFiles(newFiles)
  }

  const thumbs = () => {
    return files.map(file => (
      <DropzonePreview
        file={file}
        handleRemove={() => removeFile(file)}
        index={file.name}
        key={file.name}
      />
    ))
  }

  // const acceptedFilesItems = acceptedFiles.map(file => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ))

  // const rejectedFilesItems = rejectedFiles.map(file => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ))

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
        {isDragAccept && <p>Accepted</p>}
        {isDragReject && <p>Rejected</p>}

        {isDragActive ? (
          <p>Drop here</p>
        ) : (
          <>
            <p>Drop, or click to select</p>
            {accept && <Accept accept={accept} />}
          </>
        )}
      </StyledContainer>

      <aside style={thumbsContainer}>{thumbs()}</aside>

      {/* <aside>
        <h4>Accepted</h4>
        <ul>{acceptedFilesItems}</ul>
        <h4>Rejected</h4>
        <ul>{rejectedFilesItems}</ul>
      </aside> */}
    </>
  )
}

const StyledContainer = styled.div`
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.COLOUR.warning : theme.COLOUR.light};
  border-color: ${({ dragAccept, dragReject, theme: { COLOUR } }) =>
    (dragReject && COLOUR.warning) || (dragAccept && COLOUR.success)};
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
  disabled: bool,
  multiple: bool
}

Dropzone.defaultProps = {
  accept: 'image/*',
  disabled: false,
  multiple: true
}
