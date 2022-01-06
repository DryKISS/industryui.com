// Style
import styled from 'styled-components'

import Avatar from '../../../../../atoms/avatar/avatar'
import MessageNames from '../../../../../services/componentCommunication/messageNames'
import MessagingActions from '../../../../../organisms/messaging/communication/messagingActions'
import MessagingCommunicationService from '../../../../../services/componentCommunication/messaging/service'
import Preview from '../../../../../molecules/preview/preview'

const Attachments = ({ attachments, avatar, from, time }) => {
  const handleFileClick = (files, index) => {
    const av = avatar ? <Avatar size="xs" src={avatar} /> : <Avatar size="xs" content={from[0]} />

    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.SET_FULL_PREVIEW_FILES,
        data: {
          avatar: av,
          files,
          from,
          isAdding: false,
          isClearData: false,
          isPreview: true,
          selectedIndex: index,
          time
        }
      }
    })
  }

  const renderAttachments = () => {
    const elements = []
    Array.from(attachments).forEach((item, index) => {
      if (index < 4) {
        elements.push(
          <SingleAttachment key={index} onClick={() => handleFileClick(attachments, index)}>
            {attachments.length > 4 && index === 3 && (
              <OverlayForAdditionalMessages>+{attachments.length - 4}</OverlayForAdditionalMessages>
            )}

            <Preview
              dim={attachments.length > 4 && index === 3}
              imageStyles={{
                minHeight: '10rem',
                height: '10rem',
                borderRadius: '6px',
                objectFit: 'cover'
              }}
              file={item}
              message
            />
          </SingleAttachment>
        )
      }
    })
    return elements
  }

  return <AttachmentsContainer>{renderAttachments(attachments)}</AttachmentsContainer>
}

const AttachmentsContainer = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  grid-row: auto auto;
  grid-row-gap: 1rem;
`

const SingleAttachment = styled.div`
  cursor: pointer;
  overflow: hidden;
  max-width: calc(90% - 0.5rem);
`

const OverlayForAdditionalMessages = styled.div`
  align-items: center;
  color: white;
  display: flex;
  height: 40%;
  font-size: 5rem;
  position: absolute;
  justify-content: center;
  width: 40%;
  z-index: 1;
`

export default Attachments
