// UI
import styled, { css } from 'styled-components'

import { Close, Space, Text } from 'components'

export const MessagingDragHover = ({ onClose, files, isOpen }) => {
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
          {files[files.length - 1]?.type.includes('image') ? (
            <TopPreviewImage src={URL.createObjectURL(files[files.length - 1])} />
          ) : (
            <PlaceHolder>
              <FilePlaceHolder />
              {files[files.length - 1]?.name}
            </PlaceHolder>
          )}
        </LastFilePreviewContainer>
        {!files[0] && (
          <DragFilesHereContainer>
            <Text size='xl' context='dark'>
              Drag File Here
            </Text>
          </DragFilesHereContainer>
        )}
        <PreviewContainer>
          {files.length > 0 &&
            files.map((item, index) => {
              return (
                <BottomPreviewContainer key={index}>
                  {item.type.includes('image') ? (
                    <TopPreviewImage src={URL.createObjectURL(files[index])} />
                  ) : (
                    <PlaceHolder>
                      <FilePlaceHolder />
                      {files[index]?.name}
                    </PlaceHolder>
                  )}
                </BottomPreviewContainer>
              )
            })}
        </PreviewContainer>
      </ContentWrapper>
    </Wrapper>
  )
}
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
const FilePlaceHolder = styled.div`
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA8CAYAAADL94L/AAAByElEQVR4Ae3axdJTQRAFYFyegA3u8ALseCDcicsGhxt3x+G32BXc3X3NBnfXYTqp3sZlhuqpOlXZRL46He9ReJyJxGSTEreaPfEHZiX+1uSJvelVNu+Jvjd7Yk9zI8aSUe0eDpjCIYfNSuw5v/zF5In/6mU27478tXriLJvXjdSwPq1lCDTCmxjiCNav8GZYBVMwWKagX8kWjk9vCcMhYWhEFEw1+oV0wZjdPKY6Vn9EwmBDTYPwBoXCYPLGDQTJjkHQNQRJj0FQtmgs+C8wOHIIkh2DoDu5vD5Xfkz9hsTBWDyxhjDYUDqvLRYSY1JilSQGyyxXOt4QKJPX70NDQmI27gyxHcn9bH/5RFMNAUgoDI4afOAMHBiCdiDNj5woGAhgsCEYudSI1lBCRwoPL957slAoDDYEoPXb/ZVs3FE/y9072fDxsx4BMPVfGOpl1VY/y5++4EWM1Fm9LcCKpy8RpnchDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxhYNlXiP+XHXLRDM5thQVpyzIfS2YtLceVEkRmzalsgMArPhp258bA6b/LEb8LqPM930VNdvY/fhMmCxw+Of+4BTcPInBo2AAAAAElFTkSuQmCC);
  background-repeat: no-repeat;
  background-size: contain;
  height: 3rem;
  margin-bottom: 0.5rem;
  width: 3rem;
`
const PlaceHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const BottomPreviewContainer = styled.div`
  width: 4rem;
  margin: 0 0.25rem;
  border: 0.25rem solid ${({ theme }) => theme.COLOUR.white};
`
const TopPreviewImage = styled.img`
  width: 100%;
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
