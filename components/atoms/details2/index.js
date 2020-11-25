/**
 * Components - Details2
 */

import { useEffect, useRef, useState } from 'react'

// UI
import { DetailsPropTypes, DetailsDefaultProps } from './props'
import {
  DetailsSubscriber,
  Icon,
  MessageNames,
  SIZE,
  Text,
  useComponentCommunication
} from 'components'

// Style
import styled from 'styled-components'

export const Details2 = ({
  animationDuration,
  children,
  content,
  context,
  endActionComponent,
  icon,
  open,
  startActionComponent,
  title,
  toolbar,
  uniqueId,
  unmountContentOnClose,
  ...props
}) => {
  const [IsOpen, setIsOpen] = useState(open)
  const [ChildrenMounted, setChildrenMounted] = useState(unmountContentOnClose ? open : true)
  const [ContentHeight, setContentHeight] = useState(0)

  const contentRef = useRef(null)

  useEffect(() => {
    if (unmountContentOnClose) {
      IsOpen
        ? setChildrenMounted(() => true)
        : setTimeout(() => {
            window &&
              window.requestAnimationFrame(() => {
                setChildrenMounted(() => false)
              })
          }, animationDuration ?? 300)
    }
    setTimeout(
      () => {
        window &&
          window.requestAnimationFrame(() => {
            contentRef.current && setContentHeight(() => contentRef.current.offsetHeight)
          })
      },
      !IsOpen ? animationDuration ?? 300 : 0
    )

    return () => {}
  }, [contentRef.current, IsOpen])

  const handleEventRecieve = e => {
    setIsOpen(e)
  }

  useComponentCommunication({
    id: uniqueId,
    messageName: MessageNames.DetailsComponent.SET_OPEN,
    onRecieve: e => handleEventRecieve(e),
    subscriber: DetailsSubscriber
  })

  const handleOpenClose = () => {
    setIsOpen(IsOpen => !IsOpen)
  }

  return (
    <Wrapper context={context} {...props}>
      <Header>
        <OpenIconAndTitleWrapper>
          {(content || children) && (
            <OpenCloseWrapper
              open={IsOpen}
              onClick={handleOpenClose}
              animationDuration={animationDuration}
            >
              {icon ? <Icon icon={icon} prefix='fas' /> : <CaretRight />}{' '}
            </OpenCloseWrapper>
          )}
          <Text size={SIZE.MD} style={{ fontWeight: '600' }} context='blackText' content={title} />
        </OpenIconAndTitleWrapper>
        <ActionsWrapper>
          <StartActionComponentWrapper>
            {startActionComponent} {(toolbar || endActionComponent) && <ActionsDivider />}
          </StartActionComponentWrapper>
          <ToolbarWrapper>
            {toolbar}
            {endActionComponent && <ActionsDivider />}
          </ToolbarWrapper>
          {endActionComponent}
        </ActionsWrapper>
      </Header>
      {(content || children) && (
        <ContentWrapper
          maxHeight={ContentHeight}
          open={IsOpen}
          animationDuration={animationDuration}
        >
          <Content ref={contentRef}>{ChildrenMounted && (content || children)}</Content>
        </ContentWrapper>
      )}
    </Wrapper>
  )
}

const CaretRight = styled.div`
  border-bottom: 5px solid transparent;
  border-left: 5px solid ${({ theme }) => theme.COLOUR.blackText};
  border-top: 5px solid transparent;
  height: 0;
  width: 0;
`

const ActionsDivider = styled.div`
  background-color: ${({ theme }) => theme.COLOUR.darkGrey};
  height: 1rem;
  margin: 0 1rem;
  width: 2px;
`
const ToolbarWrapper = styled.div`
  align-items: center;
  display: flex;
`
const StartActionComponentWrapper = styled.div`
  align-items: center;
  display: flex;
`

const ActionsWrapper = styled.div`
  align-items: center;
  display: flex;
`
const Content = styled.div`
  padding: 1rem 0;
`

const OpenCloseWrapper = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin-right: 1rem;
  transform: rotate(${({ open }) => (open ? '90deg' : '0deg')});
  transition-duration: ${({ animationDuration }) => (animationDuration ?? 300) + 'ms'};
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`
const Wrapper = styled.div`
  background: white;
  border-bottom: 2px solid;
  border-bottom-color: ${({ theme, context }) => (context ? theme.COLOUR[context] : 'white')};
  width: 100%;
`
const OpenIconAndTitleWrapper = styled.div`
  display: flex;
`
const Header = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.COLOUR.light};
  display: flex;
  height: 3.5rem;
  justify-content: space-between;
  padding: 0 1.625rem;
`

const ContentWrapper = styled.div`
  max-height: ${({ open, maxHeight }) => (open ? maxHeight + 'px' : '0px')};
  overflow: hidden;
  transition-duration: ${({ animationDuration }) => (animationDuration ?? 300) + 'ms'};
  transition-property: max-height;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`

Details2.propTypes = DetailsPropTypes
Details2.defaultProps = DetailsDefaultProps
