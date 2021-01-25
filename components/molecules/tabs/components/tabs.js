/**
 * Components - Molecules - Tabs - Components - Tabs
 */

// React
import React, { createRef, useEffect, useState } from 'react'
import { array, bool, number, object, oneOfType, string } from 'prop-types'

// Next
import Router, { useRouter } from 'next/router'

// UI
import { slugify } from '../../../'
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
  children,
  className,
  grabbable,
  grabWalkSpeed,
  grabTimeout,
  handleChange,
  scrollToActiveTab
}) => {
  const router = useRouter()
  const wrapperRef = createRef()

  useEffect(() => {
    if (grabbable) {
      handleScroll(wrapperRef.current, grabWalkSpeed, grabTimeout)
    }
  }, [])

  if (!Array.isArray(children)) {
    children = React.Children.toArray(children)
  }

  // Active
  let active = ''

  // Find active in children if more than one tab or make first active
  if (children.length > 1) {
    children.map(child => {
      if (child.props.active === true) {
        active = slugify(child.props.label)
      }
    })
  } else {
    active = slugify(children[0].props.label)
  }

  const [activeTab, setActiveTab] = useState(active)

  const onClickTabItem = tab => {
    tab = slugify(tab)
    setActiveTab(tab)
    handleChange && handleTabChange(tab)
  }

  const handleTabChange = tab => {
    const query = router.query
    delete query.tab
    query.tab = tab

    Router.push({
      pathname: router.pathname,
      query: query,
      shallow: true
    })
  }

  return (
    <>
      <StyledTabs className={className} grabbable={grabbable} ref={wrapperRef}>
        {children.map(({ props }) => {
          return (
            <Tab
              activeTab={activeTab}
              key={props.label}
              onClick={!props.disabled && onClickTabItem}
              scrollToActiveTab={scrollToActiveTab}
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
  align-items: flex-end;
  border-bottom: 1px solid ${({ theme }) => theme.TABS.borderColour};
  display: flex;
  margin: 0 0 1rem 0;
  padding-left: 0;
  overflow-x: scroll;
  user-select: none;
  white-space: nowrap;
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
  children: oneOfType([array, object]).isRequired,
  className: string,
  grabbable: bool,
  grabWalkSpeed: number,
  grabTimeout: number,
  handleChange: bool,
  scrollToActiveTab: bool
}

Tabs.defaultProps = {
  grabbable: true,
  grabWalkSpeed: 25,
  grabTimeout: 100,
  handleChange: true,
  scrollToActiveTab: true
}
