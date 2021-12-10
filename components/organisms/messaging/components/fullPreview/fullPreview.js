/**
 * Components - Organisms - Messaging - Components - Full Preview
 */

// React
import React, { useEffect, useRef, useState } from 'react'

// Style
import styled, { css } from 'styled-components'

// UI

import CrossIcon from '../../../../icons/components/cross'
import DownloadIcon from '../../../../icons/components/download'
import downloadFile from '../../../../utils/fileDownload/fileDownload'
import MessageNames from '../../../../services/componentCommunication/messageNames'
import MessagingActions from '../../../../organisms/messaging/communication/messagingActions'
import MessagingSubscriber from '../../../../services/componentCommunication/messaging/subscriber'
import useComponentCommunication from '../../../../hooks/useComponentCommunication/useSubscription'
import MessagingCommunicationService from '../../../../services/componentCommunication/messaging/service'
import BottomPreview from './helpers/bottomPreview'
import SliderPreview from './helpers/sliderPreview'

const FullPreview = ({ isAddFile }) => {
  const [selectedFileIndex, setSelectedFileIndex] = useState(null)
  const [preElement, setPrevElement] = useState([])
  const [maxDocHeight, setMaxDocHeight] = useState(null)
  const files = useRef()
  const senderData = useRef()
  const previewWrapperRef = useRef()

  let fileName

  if (selectedFileIndex !== null) {
    if (files.current[selectedFileIndex]?.src) {
      fileName =
        files.current[selectedFileIndex].src.split('/')[
          files.current[selectedFileIndex].src.split('/').length - 1
        ]
    } else {
      fileName = 'localFile'
    }
  }
  useEffect(() => {
    if (isAddFile) {
      MessagingCommunicationService.send({
        name: MessageNames.Messaging.MESSAGING_ACTION,
        payload: {
          action: MessagingActions.SET_ATTACHMENTS_TO_NEW_MESSAGE,
          data: preElement
        }
      })

      // onSubmitAttachment(preElement)
    }
  }, [preElement.length])
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
    if (payload.action === MessagingActions.SET_FULL_PREVIEW_FILES) {
      const { avatar, from, time, files: attachments, selectedIndex } = payload.data
      files.current = Array.from(attachments)
      senderData.current = { avatar, from, time }
      setSelectedFileIndex(selectedIndex)
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

  const handleDownloadClick = (url, filename) => downloadFile({ url, filename })

  const sliderData = isAddFile ? preElement : files.current

  return (
    <Wrapper visible={selectedFileIndex !== null}>
      <CrossWrapper onClick={handleHide}>
        <CrossIcon colour="white" />
      </CrossWrapper>

      <ContentWrapper>
        {selectedFileIndex !== null && sliderData.length > 0 && (
          <SliderPreview
            previewWrapperRef={previewWrapperRef}
            maxDocHeight={maxDocHeight}
            data={sliderData}
            selectedFileIndex={selectedFileIndex}
            setSelectedFileIndex={setSelectedFileIndex}
          />
        )}

        <PreviewsWrapper>
          {selectedFileIndex !== null ? (
            <BottomPreview
              data={sliderData}
              isAddFile={isAddFile}
              selectedFileIndex={selectedFileIndex}
              setSelectedFileIndex={setSelectedFileIndex}
              setPrevElement={setPrevElement}
            />
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

              <NumbersWrapper>{`${selectedFileIndex + 1} of ${sliderData.length}`}</NumbersWrapper>

              {selectedFileIndex !== null && (
                <ActionsWrapper onClick={(e) => e.stopPropagation()}>
                  <Actions>
                    <DownloadIcon
                      onClick={() =>
                        handleDownloadClick(sliderData[selectedFileIndex]?.src, fileName)
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

const PreviewsWrapper = styled.div`
  bottom: 10%;
  margin: 0 5% 5%;
  width: 90%;
  display: flex;
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
  height: 95%;
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

// const BottomPreviewExtraContainer = styled.div`
//   overflow: hidden;
//   border: 2px solid ${({ theme }) => theme.COLOUR.blackGrey};
//   box-sizing: content-box;
//   object-fit: contain;
//   margin: 0 0.25rem;
//   position: relative;
//   width: 90px;
//   height: 90px;
//   transition-property: border-color;
//   transition-duration: 0.3s;
//   ${({ selected }) =>
//     selected &&
//     css`
//       border: 2px solid ${({ theme }) => theme.COLOUR.info};
//     `}
// `

export default FullPreview
