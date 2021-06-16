import Modal from '../../../../molecules/modal/modal'
import React, { useState } from 'react'
import styled from 'styled-components'
import VerticalThreeDotsIcon from '../../../../icons/components/verticalThreeDots'
import Avatar from '../../../../atoms/avatar/avatar'
const EmailContainer = ({ email, header }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => {
    setIsOpen(false)
  }
  const handleExpandClick = () => {
    setIsOpen(true)
  }
  const av = email.forwardedFrom?.avatar ? (
    <Avatar size="xxs" src={email.forwardedFrom.avatar} />
  ) : (
    <Avatar size="xxs" content={email.forwardedFrom.name[0]} />
  )
  const top = email.forwardedFrom && (
    <TopContainer>
      {av}
      <TextsWrapper nm>
        <p>
          <NameText>Forwarded:</NameText>
        </p>
        <p>
          <ValueText> {email.forwardedFrom.name}</ValueText>
        </p>
      </TextsWrapper>
    </TopContainer>
  )
  return (
    <>
      {top}
      <EmailShortDescContainer>
        <TextsWrapper>
          <p>
            <NameText>Contacts Name:</NameText>
            <ValueText bold>{email.from.name}</ValueText>
          </p>
          <p>
            <NameText> Email:</NameText>
            <ValueText> {email.from.emailAddress}</ValueText>
          </p>
        </TextsWrapper>
        <ExpandButtonWrapper onClick={handleExpandClick}>
          <VerticalThreeDotsIcon colour="#aaaaaa" />
        </ExpandButtonWrapper>
      </EmailShortDescContainer>

      <Modal open={isOpen} onClose={handleClose} removeChildrenWhenUnmounted>
        <ExpandedContentContainer>
          <HeadContainer> {header}</HeadContainer>
          {top}
          {email.content.map((text, index) => {
            return <ContentText key={'content' + index}>{text}</ContentText>
          })}
        </ExpandedContentContainer>
      </Modal>
    </>
  )
}
const HeadContainer = styled.div`
  display: flex;
  span {
    position: relative;
    top: unset;
    left: unset;
    right: unset;
    width: unset;
  }
`
const TopContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

const EmailShortDescContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  p {
    margin: 0.25rem 0;
  }
`
const ValueText = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: #2392dc;
  ${({ bold }) =>
    bold &&
    `
	  font-weight: 700;
		color: #3333ff;
	`}
`
const NameText = styled.span`
  font-size: 10px;
  font-weight: 700;
  color: #666666;
`
const ExpandedContentContainer = styled.div`
  background: white;
  border-radius: 8px;
  width: 80vw;
  max-width: 680px;
  min-height: 70vh;
  padding: 26px;
`
const TextsWrapper = styled.div`
  ${({ nm }) =>
    nm &&
    `
	p{
		margin:0;
		line-height:0.75rem;
	}
	`}
`
const ExpandButtonWrapper = styled.div`
  border-radius: 3px;
  padding: 2px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6e6e6;
  width: 23px;
  padding-left: 0;
  cursor: pointer;
`
const ContentText = styled.p`
  font-size: 14px;
  color: #333333;
`
export default EmailContainer
