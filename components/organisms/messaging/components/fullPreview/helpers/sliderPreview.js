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
  maxDocHeight,
  onScroll,
  isSlider
}) => {
  const handleArrowClick = (e, direction) => {
    e.stopPropagation()
    switch (direction) {
      case 'right':
        if (selectedFileIndex === data.length - 1) {
          setSelectedFileIndex(0)
          return
        }
        onScroll('right')
        setSelectedFileIndex((index) => index + 1)
        break

      case 'left':
        if (selectedFileIndex === 0) {
          setSelectedFileIndex(data.length - 1)
          return
        }
        onScroll('left')
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
        <ChevronIcon size={36} onClick={(e) => handleArrowClick(e, 'left')} colour="#666666" />
      </ChevronWrapper>

      {data.length > 0 && <Preview contain file={data[selectedFileIndex]} />}

      <ChevronWrapper right>
        <ChevronIcon size={36} onClick={(e) => handleArrowClick(e, 'right')} colour="#666666" />
      </ChevronWrapper>
    </SelectedFilePreviewContainer>
  )
}

const SelectedFilePreviewContainer = styled.div`
  border-radius: 9px;
  display: flex;
  flex: 1;
  justify-content: center;
  overflow: hidden;
  padding-top: 1rem;
  margin: 10px auto;

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
  top: 27%;
  z-index: 1;

  ${({ right }) =>
    right &&
    css`
      left: unset;
      right: 0.5rem;
      transform: rotate(180deg);
    `}
`
