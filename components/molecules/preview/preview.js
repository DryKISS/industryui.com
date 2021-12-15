/**
 * Preview
 */

// React
import React, { memo, useEffect, useState, useRef } from 'react'

// UI
import styled, { css } from 'styled-components'
import Cropper from 'react-cropper'

const imageFormats = ['.jpg', '.jpeg', '.png']

const isImage = (src) => {
  let isIt = false

  for (const format of imageFormats) {
    if (src.includes(format)) {
      isIt = true
      break
    }
  }

  return isIt
}

const fileType = (source) => {
  if (source) {
    const src = source.toLowerCase()

    if (isImage(src)) {
      return 'image'
    } else if (src.includes('.pdf')) {
      return 'pdf'
    } else {
      return undefined
    }
  } else {
    return undefined
  }
}

const checkFileType = (file, type) => {
  if (file?.type.includes(type) || fileType(file?.src) === type) {
    return true
  }

  return false
}

const source = (file) => {
  return file.src ?? URL.createObjectURL(file)
}

const Preview = memo(
  ({
    contain,
    dim,
    file,
    imageStyles,
    onClick,
    onPdfDocumentLoaded,
    placeHolderImageUrl,
    showName,
    showPagesNumber,
    small,
    message,
    zoomable
  }) => {
    const [pdfLoader, setPdfLoader] = useState({
      Document: null,
      Page: null,
      pdfjs: null
    })

    const loadModules = async () => {
      const { Document, Page, pdfjs } = await import('react-pdf')
      const path = '//cdnjs.cloudflare.com/ajax/libs/pdf.js'
      pdfjs.GlobalWorkerOptions.workerSrc = `${path}/${pdfjs.version}/pdf.worker.js`
      setPdfLoader({ Document, Page, pdfjs })
    }

    useEffect(() => {
      loadModules()
      return () => {}
    }, [])

    const cropperRef = useRef(null)

    const onDocumentLoadSuccess = ({ numPages }) => {
      showPagesNumber &&
        onPdfDocumentLoaded &&
        onPdfDocumentLoaded({
          file,
          name: file?.name,
          pagesNumber: numPages
        })
    }

    const src = source(file)

    const imagePreview = () => {
      if (zoomable) {
        return (
          <Cropper
            src={file.src ?? URL.createObjectURL(file)}
            style={{ height: '100%', width: '100%' }}
            highlight
            movable
            zoomable
            zoomOnTouch
            zoomOnWheel
            autoCrop={false}
            background={false}
            guides={false}
            checkCrossOrigin={false}
            dragMode="move"
            ref={cropperRef}
          />
        )
      } else {
        return (
          <PreviewImage
            contain={contain}
            dim={dim}
            src={src}
            onClick={onClick}
            style={imageStyles}
          />
        )
      }
    }

    const pdfPreview = () => {
      if (file.thumbnail) {
        return (
          <PreviewImage
            contain={contain}
            dim={dim}
            src={file.thumbnail}
            onClick={onClick}
            style={imageStyles}
          />
        )
      } else {
        return (
          <PdfWrapper onClick={onClick} small={small} message={message}>
            {pdfLoader.Document && (
              <>
                <pdfLoader.Document
                  file={src}
                  onLoadSuccess={onDocumentLoadSuccess}
                  style={{ backgroundColor: 'tomato', width: 100 }}
                >
                  <pdfLoader.Page pageNumber={1} size="ID1" height={300} width={300} scale={1.5} />
                </pdfLoader.Document>
              </>
            )}
          </PdfWrapper>
        )
      }
    }

    if (checkFileType(file, 'image')) {
      return imagePreview()
    } else if (checkFileType(file, 'pdf')) {
      return pdfPreview()
    } else {
      return (
        <PlaceHolder>
          <FilePlaceHolder placeHolderImageUrl={placeHolderImageUrl} />
          {showName && file?.name}
        </PlaceHolder>
      )
    }
  },
  ({ file: prevFile }, { file: nextFile }) => {
    if (nextFile.src) {
      if (!(prevFile.src === nextFile.src)) {
        return false
      }
    } else if (nextFile.name) {
      if (!(prevFile.name === nextFile.name)) {
        return false
      }
    }
    return true
  }
)

const PreviewImage = styled.img`
  width: 100%;

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}
  ${({ contain }) =>
    css`
      object-fit: ${contain ? 'contain' : 'cover'};
    `}
  ${({ dim }) =>
    dim &&
    css`
      filter: brightness(0.4);
    `}
`

const PdfWrapper = styled.div`
  height: 300px;
  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}
  ${({ small, message }) => {
    if (message || small) {
      const size = small ? '5.1rem' : '10rem'
      return css`
        width: 100%;
        height: ${size};

        overflow: hidden;
        .react-pdf__Page__canvas,
        .react-pdf__Page__textContent {
          width: 100% !important;
          height: auto !important;
        }
      `
    }
  }}
`

const FilePlaceHolder = styled.div`
  background-image: url(${({ placeHolderImageUrl }) =>
    placeHolderImageUrl ??
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA8CAYAAADL94L/AAAByElEQVR4Ae3axdJTQRAFYFyegA3u8ALseCDcicsGhxt3x+G32BXc3X3NBnfXYTqp3sZlhuqpOlXZRL46He9ReJyJxGSTEreaPfEHZiX+1uSJvelVNu+Jvjd7Yk9zI8aSUe0eDpjCIYfNSuw5v/zF5In/6mU27478tXriLJvXjdSwPq1lCDTCmxjiCNav8GZYBVMwWKagX8kWjk9vCcMhYWhEFEw1+oV0wZjdPKY6Vn9EwmBDTYPwBoXCYPLGDQTJjkHQNQRJj0FQtmgs+C8wOHIIkh2DoDu5vD5Xfkz9hsTBWDyxhjDYUDqvLRYSY1JilSQGyyxXOt4QKJPX70NDQmI27gyxHcn9bH/5RFMNAUgoDI4afOAMHBiCdiDNj5woGAhgsCEYudSI1lBCRwoPL957slAoDDYEoPXb/ZVs3FE/y9072fDxsx4BMPVfGOpl1VY/y5++4EWM1Fm9LcCKpy8RpnchDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxhYNlXiP+XHXLRDM5thQVpyzIfS2YtLceVEkRmzalsgMArPhp258bA6b/LEb8LqPM930VNdvY/fhMmCxw+Of+4BTcPInBo2AAAAAElFTkSuQmCC'});
  background-repeat: no-repeat;
  background-size: contain;
  height: 3rem;
  margin-bottom: 0.5rem;
  width: 3rem;
`

const PlaceHolder = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
export default Preview
