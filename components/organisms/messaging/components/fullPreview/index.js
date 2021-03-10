/**
 * Components - Organisms - Messaging - Components - Full Preview
 */

// React
import React, { useEffect, useRef, useState } from 'react'

// Style
import styled, { css } from 'styled-components'

// UI
import {
  ChevronIcon,
  CrossIcon,
  DownloadIcon,
  downloadFile,
  MessageNames,
  MessagingActions,
  MessagingSubscriber,
  Preview,
  useComponentCommunication
} from '../../../../'

export const FullPreview = () => {
  const [selectedFileIndex, setSelectedFileIndex] = useState(null)
  const [maxDocHeight, setMaxDocHeight] = useState(null)
  const files = useRef()
  const senderData = useRef()
  const previewWrapperRef = useRef()

  let fileName

  if (selectedFileIndex !== null) {
    if (files.current[selectedFileIndex]?.src) {
      fileName = files.current[selectedFileIndex].src.split('/')[
        files.current[selectedFileIndex].src.split('/').length - 1
      ]
    } else {
      fileName = 'localFile'
    }
  }

  useEffect(() => {
    if (previewWrapperRef.current && files.current[selectedFileIndex]?.type.includes('pdf')) {
      setTimeout(() => {
        const height = previewWrapperRef.current.offsetHeight
        setMaxDocHeight(height)
      }, 0)
    } else if (maxDocHeight !== null) {
      setMaxDocHeight(null)
    }
    return () => {}
  }, [selectedFileIndex])

  const onAction = (payload) => {
    switch (payload.action) {
      case MessagingActions.SET_FULL_PREVIEW_FILES: {
        const { avatar, from, time, files: attachments, selectedIndex } = payload.data

        files.current = Array.from(attachments)
        senderData.current = { avatar, from, time }
        setSelectedFileIndex(selectedIndex)
        break
      }
      default:
        break
    }
  }

  useComponentCommunication({
    messageName: MessageNames.Messaging.MESSAGING_ACTION,
    onRecieve: onAction,
    subscriber: MessagingSubscriber
  })

  const handleHide = () => {
    setSelectedFileIndex(null)
  }

  const onFileClick = (e, index) => {
    e.stopPropagation()
    setSelectedFileIndex(index)
  }

  const handleArrowClick = (e, direction) => {
    e.stopPropagation()
    switch (direction) {
      case 'right':
        if (selectedFileIndex === files.current.length - 1) {
          setSelectedFileIndex(0)
          return
        }
        setSelectedFileIndex((index) => index + 1)
        break

      case 'left':
        if (selectedFileIndex === 0) {
          setSelectedFileIndex(files.current.length - 1)
          return
        }
        setSelectedFileIndex((index) => index - 1)
        break

      default:
        break
    }
  }

  const handleMainPreviewClick = (e) => {
    e.stopPropagation()
  }

  const handleDownloadClick = (url, filename) => downloadFile({ url, filename })

  return (
    <Wrapper onClick={handleHide} visible={selectedFileIndex !== null}>
      <CrossWrapper onClick={handleHide}>
        <CrossIcon colour="white" />
      </CrossWrapper>

      <ContentWrapper>
        {selectedFileIndex !== null && (
          <SelectedFilePreviewContainer
            onClick={handleMainPreviewClick}
            ref={previewWrapperRef}
            maxDocHeight={maxDocHeight}
            visible={files.current.length > 0}
          >
            <ChevronWrapper>
              <ChevronIcon size={36} onClick={(e) => handleArrowClick(e, 'left')} />
            </ChevronWrapper>

            <Preview
              file={files.current[selectedFileIndex]}
              contain
              zoomable={files.current[selectedFileIndex].type.includes('image')}
            />

            <ChevronWrapper right>
              <ChevronIcon size={36} onClick={(e) => handleArrowClick(e, 'right')} />
            </ChevronWrapper>
          </SelectedFilePreviewContainer>
        )}

        <PreviewsWrapper>
          {selectedFileIndex !== null ? (
            files.current.map((item, index) => {
              return (
                <BottomPreviewContainer key={index} selected={selectedFileIndex === index}>
                  <Preview onClick={(e) => onFileClick(e, index)} file={item} small />
                </BottomPreviewContainer>
              )
            })
          ) : (
            <></>
          )}
        </PreviewsWrapper>

        <BottomContainer>
          {senderData.current && (
            <>
              <SenderInfoWrapper>
                <AvatarWrapper>{senderData.current.avatar}</AvatarWrapper>

                <InfoWrapper>
                  <From>{senderData.current.from}</From>
                  <SentDate>{senderData.current.time}</SentDate>
                </InfoWrapper>
              </SenderInfoWrapper>

              <NumbersWrapper>
                {`${selectedFileIndex + 1} of ${files.current.length}`}
              </NumbersWrapper>

              {selectedFileIndex !== null && (
                <ActionsWrapper onClick={(e) => e.stopPropagation()}>
                  <Actions>
                    <DownloadIcon
                      onClick={() =>
                        handleDownloadClick(files.current[selectedFileIndex].src, fileName)
                      }
                      colour="#c1c1c1"
                    />
                  </Actions>
                </ActionsWrapper>
              )}
            </>
          )}
        </BottomContainer>
      </ContentWrapper>
    </Wrapper>
  )
}

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

const CrossWrapper = styled.div`
  cursor: pointer;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5rem;
  display: flex;
  position: absolute;
  padding: 5px;
  right: 1rem;
  top: 1rem;
  z-index: 1;
`

const Actions = styled.div``
const ActionsWrapper = styled.div``
const NumbersWrapper = styled.div`
  color: ${({ theme }) => theme.COLOUR.white};
  flex: 1;
  padding-left: 25%;
`

const AvatarWrapper = styled.div`
  margin-right: 1rem;
`

const InfoWrapper = styled.div``

const From = styled.p`
  color: ${({ theme }) => theme.COLOUR.white};
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.25rem;
`

const SentDate = styled.p`
  color: ${({ theme }) => theme.COLOUR.white};
  font-size: 0.75rem;
  margin: 0;
`

const SenderInfoWrapper = styled.div`
  align-items: center;
  display: flex;
`

const BottomContainer = styled.div`
  align-items: center;
  display: flex;
  margin: 0 0.5rem 1rem 0.5rem;
  width: 95%;
`

const SelectedFilePreviewContainer = styled.div`
  border-radius: 9px;
  display: flex;
  flex: 1;
  justify-content: center;
  max-height: 78%;
  overflow: hidden;
  padding-top: 1rem;
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

const PreviewsWrapper = styled.div`
  bottom: 10%;
  margin: 0 5% 5%;
  width: 90%;
  display: flex;
`

const BottomPreviewContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.COLOUR.blackGrey};
  box-sizing: content-box;
  margin: 0 0.25rem;
  position: relative;
  width: 4rem;
  transition-property: border-color;
  transition-duration: 0.3s;
  ${({ selected }) =>
    selected &&
    css`
      border: 2px solid ${({ theme }) => theme.COLOUR.info};
    `}
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  width: 100%;
  gap: 1rem;
`

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.9);
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  z-index: 2;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s;

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      pointer-events: initial;
    `}
`
