/**
 * Components - Organisms - Messaging - Components - Full Preview
 */

// React
import React, { useEffect, useRef, useState } from 'react'

// Style
import styled, { css } from 'styled-components'

// UI
import BottomPreview from './helpers/bottomPreview'
import CloseIcon from '../../../../icons/components/close'
import DownloadIcon from '../../../../icons/components/download'
import downloadFile from '../../../../utils/fileDownload/fileDownload'
import MessageNames from '../../../../services/componentCommunication/messageNames'
import MessagingActions from '../../../../organisms/messaging/communication/messagingActions'
import MessagingSubscriber from '../../../../services/componentCommunication/messaging/subscriber'
import useComponentCommunication from '../../../../hooks/useComponentCommunication/useSubscription'
import MessagingCommunicationService from '../../../../services/componentCommunication/messaging/service'

import SliderPreview from './helpers/sliderPreview'

const FullPreview = () => {
  const [selectedFileIndex, setSelectedFileIndex] = useState(null)
  const [isAddFile, setAddingFile] = useState(false)
  const [preElement, setPrevElement] = useState([])
  const [maxDocHeight, setMaxDocHeight] = useState(null)
  const [scrollThumbnail, setScrollThumbnail] = useState(0)

  const senderData = useRef(false)
  const previewWrapperRef = useRef()

  let fileName

  if (selectedFileIndex !== null) {
    if (preElement[selectedFileIndex]?.src) {
      fileName =
        preElement[selectedFileIndex].src.split('/')[
          preElement[selectedFileIndex].src.split('/').length - 1
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
    }
  }, [preElement.length])

  useEffect(() => {
    if (previewWrapperRef.current && preElement[selectedFileIndex]?.type === 'pdf') {
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
      const {
        avatar,
        from,
        files: attachments,
        isClearData,
        isAdding,
        isPreview,
        time,
        selectedIndex
      } = payload.data

      if (isClearData) {
        if (isClearData) {
          handleClearAllData()
        }
        return handleHide()
      } else if (isAdding) {
        setAddingFile(true)
      } else if (isPreview) {
        setAddingFile(false)
      }

      setPrevElement([...attachments])
      if (isPreview) senderData.current = { avatar, from, time }
      setSelectedFileIndex(selectedIndex)
    }
  }

  useComponentCommunication({
    messageName: MessageNames.Messaging.MESSAGING_ACTION,
    onRecieve: onAction,
    subscriber: MessagingSubscriber
  })

  // clear component preview data when message is sent
  const handleClearAllData = () => {
    setPrevElement([])
    setSelectedFileIndex(0)
  }

  const handleHide = () => {
    setSelectedFileIndex(null)
  }

  const handleDownloadClick = (url, filename) => downloadFile({ url, filename })

  const handleScrollThumbnail = (status) => {
    setScrollThumbnail(status === 'right' ? scrollThumbnail + 50 : scrollThumbnail - 50)
  }

  return (
    <Wrapper visible={selectedFileIndex !== null} isSenderData={!!senderData.current}>
      <Title>
        <p>Preview of Files</p>
        <CrossWrapper onClick={handleHide}>
          <CloseIcon colour="white" />
        </CrossWrapper>
      </Title>

      <ContentWrapper>
        <SliderContent previewWrapperRef={previewWrapperRef}>
          {selectedFileIndex !== null && preElement.length > 0 ? (
            <SliderPreview
              maxDocHeight={maxDocHeight}
              data={preElement}
              selectedFileIndex={selectedFileIndex}
              setSelectedFileIndex={setSelectedFileIndex}
              onScroll={handleScrollThumbnail}
            />
          ) : (
            <NoData>No Data</NoData>
          )}
        </SliderContent>

        <PreviewsWrapper>
          {selectedFileIndex !== null ? (
            <BottomPreview
              data={preElement}
              scrollThumbnail={scrollThumbnail}
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
          {senderData.current ? (
            <MetaData>
              <SenderInfoWrapper>
                <AvatarWrapper>{senderData?.current?.avatar}</AvatarWrapper>

                <InfoWrapper>
                  <From>{senderData?.current?.from}</From>
                  <SentDate>{senderData?.current?.time}</SentDate>
                </InfoWrapper>
              </SenderInfoWrapper>

              <SenderInfo>
                <NumbersWrapper>{`${selectedFileIndex + 1} of ${
                  preElement.length
                }`}</NumbersWrapper>

                {selectedFileIndex !== null && (
                  <ActionsWrapper onClick={(e) => e.stopPropagation()}>
                    <Actions>
                      <DownloadIcon
                        onClick={() =>
                          handleDownloadClick(preElement[selectedFileIndex]?.src, fileName)
                        }
                        colour="dark"
                      />
                    </Actions>
                  </ActionsWrapper>
                )}
              </SenderInfo>
            </MetaData>
          ) : (
            <NumbersWrapper>{`${selectedFileIndex + 1} of ${preElement.length}`}</NumbersWrapper>
          )}
        </BottomContainer>
      </ContentWrapper>
    </Wrapper>
  )
}

const MetaData = styled.div``

const SenderInfo = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Title = styled.div`
  display: flex;
  background-color: #cccccc;
  p {
    color: #333333;
    padding: 5px 10px;
    font-weight: bold;
  }
`
const CrossWrapper = styled.div`
  cursor: pointer;
  background: #666666;
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
  color: ${({ theme }) => theme.COLOUR.dark};
  font-weight: bold;
  padding-right: 10px;
  text-align: ${({ isSenderData }) => (isSenderData ? 'none' : 'center')};
`

const AvatarWrapper = styled.div`
  width: 40px;
  margin-right: 1rem;
`

const InfoWrapper = styled.div`
  color: #000000;
`

const From = styled.p`
  color: ${({ theme }) => theme.COLOUR.dark};
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.25rem;
`

const SentDate = styled.p`
  color: ${({ theme }) => theme.COLOUR.dark};
  font-size: 0.75rem;
  margin: 0;
`

const SenderInfoWrapper = styled.div`
  align-items: center;
  display: flex;
`

const BottomContainer = styled.div`
  align-items: center;
  margin: 0 0.5rem 1rem 0.5rem;
  width: 95%;
`

const PreviewsWrapper = styled.div`
  bottom: 10%;
  margin: 0 5% 5%;
  width: 90%;
  display: flex;
  overflow: hidden;
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
  background: #e6e6e6;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  z-index: 2;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s;
  overscroll-behavior: contain;
  max-height: ${({ isSenderData }) => (isSenderData ? '800px' : '700px')};
  border-radius: 8px;

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      pointer-events: initial;
    `}
`
const SliderContent = styled.div`
  min-height: 55%;
  max-height: 70%;
`

const NoData = styled.div`
  height: 3rem;
  margin-bottom: 0.5rem;
  color: gray;
  font-size: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`

export default FullPreview
