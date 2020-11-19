// UI
import styled, { css } from 'styled-components'

import { Button, Close, Preview, Space, Text } from 'components'

export const MessagingDragHover = ({ files, handleRemoveFile, isOpen, onClose, onSubmit }) => {
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
          <Preview file={files[files.length - 1]} showName />
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
          {files.length > 0 &&
            files.map((item, index) => {
              return (
                <BottomPreviewContainer key={index}>
                  <RemoveContainer>
                    <Close click={() => handleRemoveFile(index)} context='white' />
                  </RemoveContainer>
                  <Preview file={item} />
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
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  height: 100%;
  justify-content: center;
  opacity: 0;
  position: absolute;
  transition: opacity 0.3s;
  width: 100%;
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
  border: 0.25rem solid ${({ theme }) => theme.COLOUR.white};
  margin: 0 0.25rem;
  position: relative;
  width: 4rem;
  &:hover {
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
  background-color: ${({ theme }) => theme.COLOUR[theme.MESSAGING.HEADER_BACKGROUND_COLOUR]};
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
