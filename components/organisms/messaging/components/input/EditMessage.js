/**
 * Components - Messaging - Edit Message
 */

// React
import React from 'react'

// UI
import MessagingCommunicationService from '../../../../services/componentCommunication/messaging/service'
import MessageNames from '../../../../services/componentCommunication/messageNames'
import MessagingActions from '../../../../organisms/messaging/communication/messagingActions'
import EditIcon from '../../../../icons/components/edit'
import CloseIcon from '../../../../icons/components/squareClose'
// Style
import styled from 'styled-components'

export default ({ setEditData, editData }) => {
  const content = editData?.content

  const onCancelEdit = () => {
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: { action: MessagingActions.CLEAR_INPUT }
    })
    setEditData(false)
  }

  return (
    <EditWrapper>
      <EditIcon colour="#2392DC" />
      <p>Edit Message</p>
      <Content>{content}</Content>
      <CloseIcon colour="#2392DC" onClick={onCancelEdit} />
    </EditWrapper>
  )
}

const EditWrapper = styled.div`
  display: flex;
  align-items: center;
  p {
    color: #2392dc;
    position: relative;
    &::after {
      content: '';
      width: 2px;
      height: 22px;
      background-color: #2392dc;
      position: absolute;
      left: 109px;
    }
  }
`
const Content = styled.div`
  flex: 5;
  color: #333333;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100px;
  margin-left: 20px;
`
