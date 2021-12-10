/**
 * Components - Organisms - Messaging - Components - Bottom Preview
 */

// React
import React, { useRef } from 'react'

// Style
import styled, { css } from 'styled-components'
import CrossIcon from '../../../../../icons/components/cross'
// UI
import Preview from '../../../../../molecules/preview/preview'

export default ({ data, isAddFile, selectedFileIndex, setSelectedFileIndex, setPrevElement }) => {
  const uploadFile = useRef(null)

  const onFileClick = (e, index) => {
    e.stopPropagation()
    setSelectedFileIndex(index)
  }

  const onRemoveItem = (index) => {
    setPrevElement(data.filter((_, i) => i !== index))
    setSelectedFileIndex(index - 1 < 0 ? 0 : index - 1)
  }

  return (
    <BottomPreviewContainer>
      {data.map((item, index) => {
        return (
          <BottomPreviewItem key={index} selected={selectedFileIndex === index}>
            {isAddFile && (
              <button onClick={() => onRemoveItem(index)}>
                <CrossIcon colour="white" />
              </button>
            )}
            <Preview onClick={(e) => onFileClick(e, index)} file={item} small />
          </BottomPreviewItem>
        )
      })}

      {isAddFile && (
        <input
          multiple
          ref={uploadFile}
          type="file"
          name="myFile"
          accept=".pdf, image/*"
          onChange={(myData) => {
            const components = data
            Array.from(myData?.target?.files).forEach((item, index) => {
              components.push(item)
            })
            setPrevElement([...components])
          }}
        />
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
`

const BottomPreviewItem = styled.div`
  height: 90px;
  width: 90px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  border: 2px solid ${({ theme }) => theme.COLOUR.blackGrey};
  ${({ selected }) =>
    selected &&
    css`
      border: 2px solid ${({ theme }) => theme.COLOUR.info};
    `}
`
