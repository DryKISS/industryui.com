import React from 'react'

// Style
import styled, { css } from 'styled-components'

// UI
import ChevronIcon from '../../../../../icons/components/chevron'
import Preview from '../../../../../molecules/preview/preview'

export default ({
  data,
  selectedFileIndex,
  setSelectedFileIndex,
  previewWrapperRef,
  maxDocHeight
}) => {
  const handleArrowClick = (e, direction) => {
    e.stopPropagation()
    switch (direction) {
      case 'right':
        if (selectedFileIndex === data.length - 1) {
          setSelectedFileIndex(0)
          return
        }
        setSelectedFileIndex((index) => index + 1)
        break

      case 'left':
        if (selectedFileIndex === 0) {
          setSelectedFileIndex(data.length - 1)
          return
        }
        setSelectedFileIndex((index) => index - 1)
        break

      default:
        break
    }
  }

  return (
    <SelectedFilePreviewContainer
      onClick={(e) => e.stopPropagation()}
      ref={previewWrapperRef}
      maxDocHeight={maxDocHeight}
      visible={data.length > 0}
    >
      <ChevronWrapper>
        <ChevronIcon size={36} onClick={(e) => handleArrowClick(e, 'left')} />
      </ChevronWrapper>

      <Preview
        contain
        file={data[selectedFileIndex]}
        // zoomable={data[selectedFileIndex]?.type?.includes('image')}
      />

      <ChevronWrapper right>
        <ChevronIcon size={36} onClick={(e) => handleArrowClick(e, 'right')} />
      </ChevronWrapper>
    </SelectedFilePreviewContainer>
  )
}

const SelectedFilePreviewContainer = styled.div`
  border-radius: 9px;
  display: flex;
  flex: 1;
  justify-content: center;
  max-height: 80%;
  overflow: hidden;
  padding-top: 1rem;
  margin-top: 20%;

  img {
    max-height: 100%;
    max-width: 100%;
    width: unset;
  }

  ${({ maxDocHeight }) =>
    maxDocHeight &&
    css`
      .react-pdf__Page__canvas {
        width: unset !important;
        height: ${maxDocHeight}px !important;
      }
    `}
`
const ChevronWrapper = styled.div`
  left: 0.5rem;
  position: absolute;
  top: 40%;
  z-index: 1;
  ${({ right }) =>
    right &&
    css`
      left: unset;
      right: 0.5rem;
      transform: rotate(180deg);
    `}
`
