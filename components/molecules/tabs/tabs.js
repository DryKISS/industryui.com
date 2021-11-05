/**
 * Components - Molecules - Tabs - Components - Tabs
 */

// React
import React, { createRef, useEffect, useState } from 'react'
import { array, bool, number, object, oneOfType, string } from 'prop-types'

// Next
import Router, { useRouter } from 'next/router'

// Style
import styled, { css } from 'styled-components'

// UI
import slugify from '../../utils/slugify/slugify'
import Tab from './tab'

const handleScroll = (el, grabWalkSpeed, grabTimeout) => {
  const slider = el
  let clickTime
  let isDown = false
  let isScrolling = false
  let startX
  let sl

  slider.addEventListener('mousedown', (e) => {
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

  slider.addEventListener('mousemove', (e) => {
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

export const TabItem = ({ children }) => children

// Active
let active = ''

export const Tabs = ({
  centerTabs,
  children,
  className,
  defaultComponent,
  indicatorSize,
  gap,
  grabbable,
  initialPanes,
  grabWalkSpeed,
  grabTimeout,
  handleChange,
  onTabChange,
  scrollToActiveTab
}) => {
  const router = useRouter()
  const wrapperRef = createRef()
  const [chilrenss, setChild] = useState(
    !Array.isArray(children) ? React.Children.toArray(children) : children
  )

  useEffect(() => {
    if (grabbable) {
      handleScroll(wrapperRef.current, grabWalkSpeed, grabTimeout)
    }
  }, [])

  // Find active in children if more than one tab or make first active
  if (chilrenss.length > 1) {
    chilrenss.forEach((child, index) => {
      if (child.props.active === true) {
        active = {
          index: index,
          label: slugify(child.props.label)
        }
      }
    })
  } else {
    active = {
      index: 0,
      label: slugify(chilrenss[0].props.label)
    }
  }

  const [activeTab, setActiveTab] = useState(active)

  const onClickTabItem = ({ index, label }) => {
    const tab = slugify(label)
    setActiveTab({ index: index, label: tab })

    if (handleChange) {
      handleRoute(tab)
    }

    if (onTabChange) {
      onTabChange(tab)
    }
  }

  const handleRoute = (tab) => {
    const query = router.query || {}

    delete query?.tab
    query.tab = tab

    Router.push({
      pathname: router.pathname,
      query: query,
      shallow: true
    })
  }
  const renderItems = () => {
    return React.Children.map(chilrenss, (child, index) => {
      const { children: item } = chilrenss[index]?.props
      return activeTab.index === index && <div>{item}</div>
    })
  }

  const handleAdd = () => {
    const nextChild = parseInt(activeTab.index) + 1
    const data = (
      <TabItem label={'tab' + nextChild} active={true}>
        {'tab' + nextChild}
      </TabItem>
    )
    const result = [...chilrenss, data]

    setChild(result)
    setActiveTab({ index: nextChild, label: 'tab' + nextChild })
  }
  const handleRemove = (index) => {
    if (chilrenss.length > 1) {
      chilrenss.splice(index, 1)
      setChild(chilrenss)
      setActiveTab({ index: index - 1 })
    }
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
        {chilrenss.map(({ props, child, ...rest }, index) => {
          return (
            <Tab
              child={rest}
              activeTab={activeTab}
              index={index}
              setActiveTab={setActiveTab}
              key={props.label}
              onClick={!props.disabled && onClickTabItem}
              scrollToActiveTab={scrollToActiveTab}
              gap={gap}
              indicatorSize={indicatorSize}
              onRemove={handleRemove}
              {...props}
            />
          )
        })}
        <button onClick={handleAdd}>Add</button>
      </StyledTabs>

      {renderItems()}
    </>
  )
}

const StyledTabs = styled.ol`
  align-items: flex-end;
  border-bottom: 1px solid ${({ theme }) => theme.TABS.borderColour};
  display: flex;
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
  centerTabs: bool,
  children: oneOfType([array, object]).isRequired,
  className: string,
  gap: number,
  grabbable: bool,
  grabWalkSpeed: number,
  grabTimeout: number,
  handleChange: bool,
  indicatorSize: number,
  icon: string,
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
