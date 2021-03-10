/**
 * Components - Atoms - Details2
 */

// React
import React, { useEffect, useRef, useState } from 'react'

// UI
import {
  DetailsSubscriber,
  Details2Header,
  Details2Content,
  MessageNames,
  useComponentCommunication
} from '../../../'

import { Details2PropTypes, Details2DefaultProps } from '../props'

// Style
import styled, { css } from 'styled-components'

export const Details2 = ({
  animationDuration,
  children,
  contentStyle,
  context,
  disableAnimation,
  endActionComponent,
  fitParentHeight,
  headerContext,
  iconComponent,
  open,
  startActionComponent,
  style,
  title,
  titleContext,
  toolbar,
  uniqueId,
  unmountContentOnClose
}) => {
  const animationTime = disableAnimation ? 0 : animationDuration
  const [isOpen, setisOpen] = useState(open)
  const [mounted, setMounted] = useState(unmountContentOnClose ? open : true)
  const [contentHeight, setcontentHeight] = useState(0)

  const contentRef = useRef(null)

  useEffect(() => {
    if (unmountContentOnClose) {
      isOpen
        ? setMounted(() => true)
        : setTimeout(() => {
            window &&
              window.requestAnimationFrame(() => {
                setMounted(() => false)
              })
          }, animationTime ?? 300)
    }

    setTimeout(
      () => {
        window &&
          window.requestAnimationFrame(() => {
            contentRef.current && setcontentHeight(() => contentRef.current.offsetHeight)
          })
      },
      !isOpen ? animationTime ?? 300 : 0
    )

    return () => {}
  }, [contentRef.current, isOpen])

  const handleEventRecieve = (e) => {
    setisOpen(e)
  }

  useComponentCommunication({
    id: uniqueId,
    messageName: MessageNames.DetailsComponent.SET_OPEN,
    onRecieve: (e) => handleEventRecieve(e),
    subscriber: DetailsSubscriber
  })

  const handleOpenClose = () => {
    setisOpen((isOpen) => !isOpen)
  }

  return (
    <Wrapper context={context} style={style} fitParentHeight={fitParentHeight} open={isOpen}>
      <Details2Header
        animationtime={animationTime}
        children={children}
        headerContext={headerContext}
        handleOpenClose={handleOpenClose}
        iconComponent={iconComponent}
        isOpen={isOpen}
        title={title}
        titleContext={titleContext}
      />

      {children && (
        <Details2Content
          animationTime={animationTime}
          children={children}
          contentRef={contentRef}
          fitParentHeight={fitParentHeight}
          isOpen={isOpen}
          maxHeight={contentHeight}
          mounted={mounted}
        />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.DETAILS2.wrapper.background};
  border-bottom: 2px solid ${({ theme, context }) => (context ? theme.COLOUR[context] : 'white')};
  transition: height 0.3 cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;

  ${({ fitParentHeight, open }) => {
    return (
      fitParentHeight &&
      css`
        height: ${!open ? '3.6rem' : '100%'};
      `
    )
  }}
`

Details2.propTypes = Details2PropTypes
Details2.defaultProps = Details2DefaultProps
