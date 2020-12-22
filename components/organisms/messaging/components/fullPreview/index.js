import { useEffect, useRef, useState } from 'react'

import styled, { css } from 'styled-components'

import { useComponentCommunication, Preview } from '../../../../'
import { MessageNames, MessagingActions, MessagingSubscriber } from '../../../../services'
import { Arrow } from './arrow'

export const FullPreview = () => {
  const [selectedFileIndex, setselectedFileIndex] = useState(null)
  const [maxDocHeight, setmaxDocHeight] = useState(null)
  const files = useRef()
  const senderData = useRef()
  const previewWrapperRef = useRef()
  useEffect(() => {
    if (previewWrapperRef.current && files.current[selectedFileIndex]?.type.includes('pdf')) {
      setTimeout(() => {
        const height = previewWrapperRef.current.offsetHeight
        console.log(height)
        setmaxDocHeight(height)
      }, 0)
    } else if (maxDocHeight !== null) {
      setmaxDocHeight(null)
    }
    return () => {}
  }, [selectedFileIndex])
  const onAction = payload => {
    switch (payload.action) {
      case MessagingActions.SET_FULL_PREVIEW_FILES:
        var { avatar, from, time, files: attachments } = payload.data
        files.current = attachments

        senderData.current = { avatar, from, time }
        setselectedFileIndex(payload.data.selectedIndex)
        break

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
    setselectedFileIndex(null)
  }

  const onFileClick = (e, index) => {
    e.stopPropagation()
    setselectedFileIndex(index)
  }
  const handleArrowClick = (e, direction) => {
    e.stopPropagation()
    switch (direction) {
      case 'right':
        if (selectedFileIndex === files.current.length - 1) {
          setselectedFileIndex(0)
          return
        }
        setselectedFileIndex(index => index + 1)
        break

      case 'left':
        if (selectedFileIndex === 0) {
          setselectedFileIndex(files.current.length - 1)
          return
        }
        setselectedFileIndex(index => index - 1)
        break

      default:
        break
    }
  }
  const handleMainPreviewClick = e => {
    e.stopPropagation()
  }
  return (
    <Wrapper onClick={handleHide} visible={selectedFileIndex !== null}>
      <ContentWrapper>
        {selectedFileIndex !== null && (
          <SelectedFilePreviewContainer
            onClick={handleMainPreviewClick}
            ref={previewWrapperRef}
            maxDocHeight={maxDocHeight}
            visible={files.current.length > 0}
          >
            <Arrow onClick={e => handleArrowClick(e, 'left')} />
            <Preview
              file={files.current[selectedFileIndex]}
              contain
              zoomable={files.current[selectedFileIndex].type.includes('image')}
            />
            <Arrow onClick={e => handleArrowClick(e, 'right')} right />
          </SelectedFilePreviewContainer>
        )}

        <PreviewsWrapper>
          {selectedFileIndex !== null ? (
            files.current.map((item, index) => {
              return (
                <BottomPreviewContainer key={index} selected={selectedFileIndex === index}>
                  <Preview onClick={e => onFileClick(e, index)} file={item} small />
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
                {`${selectedFileIndex + 1} of ${files.current.length - 1}`}
              </NumbersWrapper>
              <ActionsWrapper>
                <Actions>actions</Actions>
              </ActionsWrapper>
            </>
          )}
        </BottomContainer>
      </ContentWrapper>
    </Wrapper>
  )
}
const Actions = styled.div`
  display: none;
`
const ActionsWrapper = styled.div``
const NumbersWrapper = styled.div`
  color: ${({ theme }) => theme.COLOUR.white};
  flex: 1;
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
