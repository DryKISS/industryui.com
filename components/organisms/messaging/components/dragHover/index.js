// React
import { useEffect, useState } from 'react'

// UI
import styled, { css } from 'styled-components'

import { Button, Close, Preview, Space, Text } from 'components'

export const MessagingDragHover = ({ files, handleRemoveFile, isOpen, onClose, onSubmit }) => {
  const [selectedFile, setselectedFile] = useState(null)

  const onFileClick = file => {
    setselectedFile(file)
  }

  useEffect(() => {
    setselectedFile(files[files.length - 1])
  }, [files.length])

  return (
    <Wrapper open={isOpen}>
      <ContentWrapper>
        <Head>
          <Close click={onClose} context='white' />
          <Space marginLeft='sm'>
            <Text context='white'>Preview</Text>
          </Space>
        </Head>
        <LastFilePreviewContainer visible={files.length > 0}>
          {selectedFile && <Preview file={selectedFile} showName />}
        </LastFilePreviewContainer>
        {!files[0] && (
          <DragFilesHereContainer>
            <Text size='xl' context='dark'>
              Drag File Here
            </Text>
          </DragFilesHereContainer>
        )}
        <SendButtonContainer hasFile={files.length > 0}>
          <StyledSendButton style={{ borderRadius: '50px' }} onClick={onSubmit}>
            submit
          </StyledSendButton>
        </SendButtonContainer>
        <PreviewContainer>
          {selectedFile &&
            files.map((item, index) => {
              return (
                <BottomPreviewContainer key={index}>
                  <RemoveContainer>
                    <Close click={() => handleRemoveFile(index)} context='white' />
                  </RemoveContainer>
                  <Preview onClick={() => onFileClick(item)} file={item} small />
                </BottomPreviewContainer>
              )
            })}
        </PreviewContainer>
      </ContentWrapper>
    </Wrapper>
  )
}
const StyledSendButton = styled(Button)`
  border-radius: 5rem;
  height: 5rem;
`
const SendButtonContainer = styled.div`
  bottom: 6.5rem;
  position: absolute;
  right: 1rem;
  transform: scale(0);
  transition: transform 0.3s ease-in-out;
  z-index: 1;
  ${({ hasFile }) =>
    hasFile === true &&
    css`
      transform: scale(1);
    `}
`

const RemoveContainer = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.COLOUR.info};
  border: 2px solid ${({ theme }) => theme.COLOUR.info};
  border-radius: 50px;
  display: flex;
  height: 26px;
  justify-content: center;
  opacity: 0;
  position: absolute;
  right: -15px;
  transition: opacity 0.3s;
  top: -12px;
  width: 26px;
  z-index: 1;
`
const PreviewContainer = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  height: 9rem;
  justify-content: center;
  position: absolute;
  width: 100%;
  ${({ theme }) => css`
    background-color: ${theme.COLOUR.grey};
  `}
`

const BottomPreviewContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.COLOUR.blackGrey};
  box-sizing: content-box;
  margin: 0 0.25rem;
  position: relative;
  width: 4rem;
  transition-property: border-color;
  transition-duration: 0.3s;
  &:hover {
    border: 2px solid ${({ theme }) => theme.COLOUR.info};
    ${RemoveContainer} {
      opacity: 1;
    }
  }
`

const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.COLOUR.white};
  height: 100%;
  position: relative;
  width: 100%;
`
const CenterContainer = styled.div`
  display: grid;
  height: calc(100% - 15rem);
  left: 1rem;
  place-content: center;
  position: absolute;
  top: 4rem;
  width: calc(100% - 2rem);
`
const DragFilesHereContainer = styled(CenterContainer)`
  border: 0.25rem dashed;
`
const LastFilePreviewContainer = styled(CenterContainer)`
  border-radius: 9px;
  border: 1px solid;
  opacity: 0;
  overflow: hidden;
  transform: scale(0.5);
  transition-property: opacity, transform;
  transition-duration: 0.3s;
  ${({ visible }) =>
    visible === true &&
    css`
      opacity: 1;
      transform: scale(1);
    `}
`

const Head = styled.div`
  align-items: center;
  display: flex;
  height: 3rem;
  padding: 0 1.25rem;
  background-color: ${({ theme: { MESSAGING } }) => MESSAGING.dropableHeaderBackground};
`
const Wrapper = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  transform: translateY(100%);
  width: 100%;

  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  ${({ open }) =>
    open === true &&
    css`
      transform: translateY(0%);
    `}
`
