/**
 * Tabs
 */

// React
import React, { createRef, useEffect, useState } from 'react'
import { array, bool, number, object, oneOfType, string } from 'prop-types'

// Next
import Router, { useRouter } from 'next/router'

// UI
import { Tab } from './tab'

// Style
import styled, { css } from 'styled-components'

export const handleScroll = (el, grabWalkSpeed, grabTimeout) => {
  const slider = el
  let clickTime
  let isDown = false
  let isScrolling = false
  let startX
  let sl

  slider.addEventListener('mousedown', e => {
    clickTime = e.timeStamp
    isDown = true
    startX = e.pageX - slider.offsetLeft
    sl = slider.scrollLeft
  })
  slider.addEventListener('mouseleave', () => {
    isDown = false
    isScrolling = false
    slider.classList.remove('active')
  })
  slider.addEventListener('mouseup', () => {
    isDown = false
    isScrolling = false
    slider.classList.remove('active')
  })
  slider.addEventListener('mousemove', e => {
    if (isScrolling || (isDown && e.timeStamp - clickTime > grabTimeout)) {
      e.preventDefault()
      slider.classList.add('active')
      const x = e.pageX - slider.offsetLeft
      const walk = x - startX
      isScrolling = true
      slider.scrollLeft = sl - walk + grabWalkSpeed
    }
  })
}

export const Tabs = ({
  centerTabs,
  children,
  className,
  indicatorSize,
  gap,
  grabbable,
  grabWalkSpeed,
  grabTimeout,
  handleChange,
  scrollToActiveTab
}) => {
  const router = useRouter()
  const wrapperRef = createRef()

  useEffect(() => {
    if (grabbable) handleScroll(wrapperRef.current, grabWalkSpeed, grabTimeout)
  }, [])

  if (!Array.isArray(children)) {
    children = React.Children.toArray(children)
  }

  let active = children[0].props.label

  children.map(child => {
    if (child.props.active === true) {
      active = child.props.label
    }
  })

  const [activeTab, setActiveTab] = useState(active)

  const onClickTabItem = tab => {
    setActiveTab(tab)
    handleChange && handleTabChange(tab)
  }

  const handleTabChange = tab => {
    const href = `${router.pathname}?id=${router.query.id}&tab=${tab}`
    Router.push(href, href, { shallow: true })
  }

  return (
    <>
      <StyledTabs
        centerTabs={centerTabs}
        className={className}
        gap={gap}
        grabbable={grabbable}
        ref={wrapperRef}
      >
        {children.map(({ props }) => {
          return (
            <Tab
              activeTab={activeTab}
              key={props.label}
              onClick={props.disabled ? () => {} : onClickTabItem}
              scrollToActiveTab={scrollToActiveTab}
              gap={gap}
              indicatorSize={indicatorSize}
              {...props}
            />
          )
        })}
      </StyledTabs>

      {children.map(child => {
        if (child.props.label !== activeTab) {
          return undefined
        }

        return child.props.children
      })}
    </>
  )
}

const StyledTabs = styled.ol`
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid ${({ theme }) => theme.TABS.borderColour};
  ${({ gap }) =>
    gap !== 0 &&
    css`
      gap: ${gap}px;
    `}

  ${({ centerTabs }) =>
    centerTabs &&
    css`
      justify-content: center;
    `}

  margin: 0 0 1rem 0;
  padding-left: 0;
  white-space: nowrap;
  overflow-x: scroll;
  user-select: none;
  -ms-overflow-style: none;
  &&::-webkit-scrollbar {
    display: none;
  }

  ${({ grabbable }) =>
    grabbable &&
    css`
      &.active {
        cursor: grabbing;

        li {
          cursor: grabbing;
          pointer-events: none;
        }
      }
    `}
`

Tabs.propTypes = {
  centerTabs: bool,
  children: oneOfType([array, object]).isRequired,
  className: string,
  gap: number,
  grabbable: bool,
  grabWalkSpeed: number,
  grabTimeout: number,
  handleChange: bool,
  indicatorSize: number,
  scrollToActiveTab: bool
}

Tabs.defaultProps = {
  centerTabs: false,
  gap: 0,
  grabbable: true,
  grabWalkSpeed: 25,
  grabTimeout: 100,
  handleChange: true,
  indicatorSize: 1,
  scrollToActiveTab: true
}
