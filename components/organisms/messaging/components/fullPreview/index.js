import { useRef, useState } from 'react'

import styled, { css } from 'styled-components'

import { useComponentCommunication, Preview } from '../../../../'
import { MessageNames, MessagingActions, MessagingSubscriber } from '../../../../services'
export const FullPreview = () => {
  const [selectedFileIndex, setselectedFileIndex] = useState(null)
  const files = useRef()

  const onAction = payload => {
    switch (payload.action) {
      case MessagingActions.SET_FULL_PREVIEW_FILES:
        files.current = payload.data.files

        setselectedFileIndex(payload.data.selectedIndex)
        console.log(payload)
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

  return (
    <Wrapper onClick={handleHide} visible={selectedFileIndex !== null}>
      <ContentWrapper>
        {selectedFileIndex !== null && (
          <SelectedFilePreviewContainer visible={files.current.length > 0}>
            <Preview file={files.current[selectedFileIndex]} showName />
          </SelectedFilePreviewContainer>
        )}

        <BottomContainer>
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
        </BottomContainer>
      </ContentWrapper>
    </Wrapper>
  )
}

const SelectedFilePreviewContainer = styled.div`
  border-radius: 9px;
  margin: auto;
  max-height: 80%;
  max-width: 90%;
`

const BottomContainer = styled.div`
  position: fixed;
  bottom: 10%;
  margin: 0 5%;
  width: 90%;
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
  position: relative;
  width: 100%;
  height: 100%;
`
const Wrapper = styled.div`
  display: grid;
  background: rgb(0 0 0 / 60%);
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  place-content: center;
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
