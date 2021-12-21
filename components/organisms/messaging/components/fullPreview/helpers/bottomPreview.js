/**
 * Components - Organisms - Messaging - Components - Bottom Preview
 */

// React
import React, { createRef, useRef, useEffect } from 'react'

// Style
import CloseIcon from '../../../../../icons/components/close'
import styled, { css } from 'styled-components'
import PlusIcon from '../../../../../icons/components/plus'

// UI
import Preview from '../../../../../molecules/preview/preview'

export default ({
  data,
  isAddFile,
  scrollThumbnail,
  selectedFileIndex,
  setSelectedFileIndex,
  setPrevElement
}) => {
  const uploadFile = useRef(null)
  let wrapperRef = createRef()

  const onFileClick = (e, index) => {
    e.stopPropagation()
    setSelectedFileIndex(index)
  }

  useEffect(() => {
    if (wrapperRef.scrollIntoView) {
      wrapperRef.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'end' })
    }
  }, [wrapperRef])

  const onRemoveItem = (index) => {
    setPrevElement(data.filter((_, i) => i !== index))
    setSelectedFileIndex(index - 1 < 0 ? 0 : index - 1)
  }

  return (
    <BottomPreviewContainer>
      {data.map((item, index) => {
        return (
          <BottomPreviewItem
            key={index}
            selected={selectedFileIndex === index}
            ref={(ref) => {
              if (selectedFileIndex === index) {
                wrapperRef = ref
              }
            }}
          >
            {isAddFile && (
              <RemoveElement
                onClick={() => onRemoveItem(index)}
                selected={selectedFileIndex === index}
              >
                <CloseIcon colour="white" />
              </RemoveElement>
            )}
            <Preview onClick={(e) => onFileClick(e, index)} file={item} small />
          </BottomPreviewItem>
        )
      })}

      {isAddFile && (
        <AddingFile onClick={() => uploadFile.current.click()}>
          <PlusIcon colour="white" />
          <p>Adding File</p>
          <input
            accept=".pdf, image/*"
            multiple
            name="myFile"
            ref={uploadFile}
            style={{ display: 'none' }}
            type="file"
            onChange={(myData) => {
              const components = data
              Array.from(myData?.target?.files).forEach((item, index) => {
                components.push(item)
              })
              setPrevElement([...components])
            }}
          />
        </AddingFile>
      )}
    </BottomPreviewContainer>
  )
}

const BottomPreviewContainer = styled.div`
  box-sizing: content-box;
  margin: 0 0.25rem;
  position: relative;
  display: flex;
  width: 100%;
  transition-property: border-color;
  transition-duration: 0.3s;
  flex-wrap: nowrap;
  white-space: nowrap;
  height: 120px;
  padding-right: 100px;
  overflow: scroll;
  border-top: 2px solid #cccccc;
  padding-top: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`
const AddingFile = styled.div`
  margin-left: 10px;
  height: 90px;
  width: 90px;
  flex: 0 0 90px;
  white-space: nowrap;
  background-color: #2392dc;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
  padding-top: 15px;
  margin-top: 10px;

  p {
    margin: 0px;
    font-size: 12px;
    font-weight: bold;
  }
`
const BottomPreviewItem = styled.div`
  height: 90px;
  width: 90px;
  flex: 0 0 90px;
  margin-top: 12px !important;
  white-space: nowrap;
  position: relative;
  margin: 0px 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  border: 2px solid ${({ theme }) => theme.COLOUR.blackGrey};
  ${({ selected }) =>
    selected &&
    css`
      border: 4px solid ${({ theme }) => theme.COLOUR.info};
    `}
`
const RemoveElement = styled.button`
  ${({ selected }) =>
    selected
      ? css`
          background-color: #2392dc;
          border-radius: 50%;
          position: absolute;
          top: -15px;
          right: -12px;
          width: 28px;
          border: none;
          z-index: 1;
          svg {
            padding: 0px;
            margin-top: 2px;
            position: relative;
            right: 3px;
            top: 0.5px;
          }
        `
      : css`
          display: none;
        `}
`
