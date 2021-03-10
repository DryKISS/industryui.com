// React
import React, { useEffect, useState } from 'react'

// Style
import styled, { css } from 'styled-components'

// UI
import { Close, Preview, Space, Text } from '../../../../'

export const MessagingDragHover = ({ files, handleRemoveFile, isOpen, onClose, onSubmit }) => {
  const [selectedFile, setselectedFile] = useState(null)
  const [documentInfo, setDocumentInfo] = useState({
    name: null,
    pagesNumber: 0
  })

  const resetDocInfo = () => {
    setDocumentInfo({ name: null, pagesNumber: 0 })
  }

  const onFileClick = (file) => {
    resetDocInfo()
    setselectedFile(file)
  }
  const handleRemoveClick = (e) => {
    resetDocInfo()
    handleRemoveFile(e)
  }

  useEffect(() => {
    setselectedFile(files[files.length - 1])
  }, [files.length, files[0] ? files[0].name : ''])

  const handlePdfDocumentLoaded = (data) => {
    setDocumentInfo(data)
  }

  return (
    <Wrapper open={isOpen}>
      <ContentWrapper>
        <Head>
          <Close click={onClose} context="white" />
          <Space marginLeft="sm">
            <Text context="white">Preview</Text>
          </Space>
        </Head>
        <LastFilePreviewContainer visible={files.length > 0}>
          {selectedFile && (
            <Preview
              file={selectedFile}
              showName
              showPagesNumber
              onPdfDocumentLoaded={handlePdfDocumentLoaded}
            />
          )}
        </LastFilePreviewContainer>
        {documentInfo.pagesNumber > 0 && files.length > 0 && (
          <DocumentInfoWrapper>
            <DocumentNameWrapper>
              <DocumentFileIcon pdf />
              <DocumentName>{documentInfo.name}</DocumentName>
            </DocumentNameWrapper>
            <DucumentPagesNumber>
              {`${documentInfo.pagesNumber} Page${documentInfo.pagesNumber > 1 ? 's' : ''}`}
            </DucumentPagesNumber>
          </DocumentInfoWrapper>
        )}
        {!files[0] && (
          <DragFilesHereContainer>
            <Text size="xl" context="dark">
              Drag File Here
            </Text>
          </DragFilesHereContainer>
        )}

        <PreviewContainer>
          {selectedFile &&
            files.map((item, index) => {
              return (
                <BottomPreviewContainer key={index}>
                  <RemoveContainer>
                    <Close click={() => handleRemoveClick(index)} context="white" />
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
const DocumentNameWrapper = styled.div`
  align-items: center;
  display: flex;
`
const DocumentFileIcon = styled.div`
  background-repeat: no-repeat;
  height: 1.5rem;
  margin-right: 1rem;
  width: 1rem;
  ${({ pdf }) => {
    return (
      pdf === true &&
      css`
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAWCAYAAAAmaHdCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEwSURBVHgBpZPvbYMwEMXfAZHykRGcDSAs0A3abNAVOkGaCdoNwgbtBmWAJKUT1CPwMVLkuGcaS4DABvKkky3/+flxd5DOsi8AD3BL0vG40mmag+iXTqddczMYAWiL6FWv19suZLo6oHkQC8qyvZlGuE/PDJoICYJPaC27y8QkjXHaQKmyb2OKkw+EYe+GL7Ebtv/iOeN0UtzsS3ZQ8RgPHXQ5ERwVRsgHsYoxE2IvS3gcuSB5DYmixJfc4T5RasUJNf/HE8/Tem25NOsxR8Jtv/c5yaksJTv4wWJhAKKO87nC5RLjei2andsusdYVt/aODod3nSTmtUe+tGVHNrHmou1a0f85xnYYCh4LHr/RrtCgmk5kHUpJdvM2FtCFiNvrMTx94YL8g2bIVKfEfSr+AAEZZZW4bAd8AAAAAElFTkSuQmCC');
      `
    )
  }}
`
const DocumentName = styled.p``
const DucumentPagesNumber = styled.p``

const DocumentInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 3.5rem;
  position: absolute;
  top: 70%;
  width: 100%;
  p {
    color: ${({ theme }) => theme.COLOUR.dark};
    font-size: 1.25rem;
    margin: 0;
  }
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
  height: calc(100% - 17rem);
  left: 3.5rem;
  place-content: center;
  position: absolute;
  top: 4rem;
  width: calc(100% - 7rem);
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
  height: calc(100% - 5.3rem);
  position: absolute;
  top: 0;
  transform: translateY(calc(100% + 5.3rem));
  width: 100%;

  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  ${({ open }) =>
    open === true &&
    css`
      transform: translateY(0%);
    `}
`
