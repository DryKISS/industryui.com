/**
 * Components - Atoms - Details2
 */

// React
import React, { useEffect, useRef, useState } from 'react'

// Style
import styled, { css } from 'styled-components'

// UI
import {
  DetailsSubscriber,
  Details2Header,
  Details2Content,
  MessageNames,
  useComponentCommunication
} from '../../../'

import { propTypes, defaultProps } from '../props'

let callTimeout

export const Details2 = ({
  animationDuration,
  children,
  contentStyle,
  context,
  disableAnimation,
  fitParentHeight,
  headerContext,
  iconComponent,
  open,
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
        resetSize()
      },
      !isOpen ? animationTime ?? 300 : 0
    )

    return () => {}
  }, [contentRef.current])

  const resetSize = () => {
    clearTimeout(callTimeout)
    callTimeout = setTimeout(() => {
      window &&
        window.requestAnimationFrame(() => {
          if (contentRef.current) {
            if (contentHeight !== contentRef.current.offsetHeight) {
              setcontentHeight(() => contentRef.current.offsetHeight)
            }
          }
        })
    }, 100)
  }

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
        toolbar={toolbar}
      />

      {children && (
        <Details2Content
          animationTime={animationTime}
          children={children}
          contentRef={contentRef}
          onContentSizeChanged={resetSize}
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
  box-shadow: rgba(45, 62, 80, 0.12) 0 1px 5px 0;
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

Details2.propTypes = propTypes
Details2.defaultProps = defaultProps
