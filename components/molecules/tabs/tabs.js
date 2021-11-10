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
import Dropdown from '../../molecules/dropdown/dropdown'
import Button from '../../atoms/button/button/button'
import Icon from '../../atoms/icon/icon/icon'
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
  activeBorders,
  activeContext,
  borders,
  context,
  centerTabs,
  children,
  className,
  defaultContentComponent,
  component,
  indicatorSize,
  isVertical,
  gap,
  grabbable,
  grabWalkSpeed,
  grabTimeout,
  rightTabIcon,
  handleChange,
  onTabChange,
  size,
  scrollToActiveTab
}) => {
  const router = useRouter()
  const wrapperRef = createRef()
  const [overflow, setOverflow] = useState(false)
  const [tabPanes, setTabPane] = useState(
    !Array.isArray(children) ? React.Children.toArray(children) : children
  )
  // Find active in children if more than one tab or make first active
  if (tabPanes.length > 1) {
    tabPanes.forEach((child, index) => {
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
      label: slugify(tabPanes[0].props.label)
    }
  }

  const [activeTab, setActiveTab] = useState(active)

  useEffect(() => {
    if (grabbable) {
      handleScroll(wrapperRef.current, grabWalkSpeed, grabTimeout)
    }
  }, [])

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

  const renderTabContent = (defaultContentComponent) => {
    return React.Children.map(tabPanes, (child, index) => {
      const { children: item } = tabPanes[index]?.props
      return (
        activeTab.index === index && (
          <>{defaultContentComponent ? defaultContentComponent() : item}</>
        )
      )
    })
  }

  const handleAdd = () => {
    const nextChild = tabPanes.length
    const newTabTitle = 'New Tab'
    const data = (
      <TabItem label={newTabTitle} active={true} rightTabIcon={rightTabIcon}>
        {newTabTitle}
      </TabItem>
    )

    setTabPane([...tabPanes, data])
    setActiveTab({ index: nextChild, label: slugify(newTabTitle) })
  }
  const handleRemove = (index) => {
    if (tabPanes.length > 1) {
      const newIndex = tabPanes.length - 2 < 0 ? 0 : tabPanes.length - 2
      setActiveTab(
        Object.assign(activeTab, {
          index: newIndex,
          label: slugify(tabPanes[newIndex]?.props?.label)
        })
      )
      setTabPane(tabPanes.filter((_, i) => i !== index))
    }
  }
  useEffect(() => {
    const { current = {} } = wrapperRef
    setTimeout(() => setOverflow(current?.scrollWidth > current?.offsetWidth), 100)
  }, [wrapperRef])

  const handleScrollBack = () => {
    const { current = {} } = wrapperRef
    current.scrollLeft = current?.scrollLeft - 500
  }

  const handleScrollForward = () => {
    const { current = {} } = wrapperRef
    current.scrollLeft = current?.scrollLeft + 500
  }

  return (
    <MainStyledWrapper isVertical={isVertical}>
      <StyledWrapper isVertical={isVertical}>
        {overflow && (
          <Button size={size} outline context="secondary" onClick={handleScrollBack}>
            &lt;
          </Button>
        )}
        <StyledTabs
          centerTabs={centerTabs}
          className={className}
          gap={gap}
          isVertical={isVertical}
          grabbable={grabbable}
          activeBorders={activeBorders}
          borders={borders}
          ref={wrapperRef}
        >
          {tabPanes.map(({ props }, index) => {
            return (
              <Tab
                activeBorders={activeBorders}
                activeContext={activeContext}
                rightTabIcon={rightTabIcon}
                borders={borders}
                context={context}
                defaultContentComponent={defaultContentComponent}
                activeTab={activeTab}
                index={index}
                key={props.label}
                onClick={!props.disabled && onClickTabItem}
                size={size}
                scrollToActiveTab={scrollToActiveTab}
                gap={gap}
                indicatorSize={indicatorSize}
                onRemove={handleRemove}
                {...props}
              />
            )
          })}
        </StyledTabs>
        {overflow && (
          <Button outline size={size} context="secondary" onClick={handleScrollForward}>
            &gt;
          </Button>
        )}
        {overflow && (
          <Dropdown
            caret={false}
            position="right"
            onChange={({ id, name }) => setActiveTab({ index: id, label: slugify(name) })}
            items={tabPanes.map(({ props }, index) => ({
              id: index,
              name: props.label
            }))}
          >
            <Button
              startIcon="chevronDown"
              size={size}
              startIconProps={{ colour: 'white', iui: true, size: size }}
              context="secondary"
              onClick={handleScrollForward}
            />
          </Dropdown>
        )}
        {defaultContentComponent && !isVertical && (
          <Button size={size} context="light" onClick={handleAdd} size={size}>
            <Icon icon="plus" iui />
          </Button>
        )}
      </StyledWrapper>
      <StyledContent isVertical={isVertical}>
        {renderTabContent(defaultContentComponent)}
      </StyledContent>
    </MainStyledWrapper>
  )
}
const MainStyledWrapper = styled.div`
  ${({ isVertical }) =>
    isVertical &&
    css`
      display: flex;
      flex: 1;
      overflow-y: scroll;
      justify-content: space-between;
    `}
`
const StyledContent = styled.div`
  display: block;

  ${({ isVertical }) =>
    isVertical &&
    css`
      flex: 11;
    `}
`

const StyledWrapper = styled.div`
  display: flex;
`

const StyledTabs = styled.ol`
  scroll-behavior: smooth;
  border-bottom: 1px solid ${({ theme }) => theme.TABS.borderColour};
  display: flex;
  ${({ isVertical }) =>
    isVertical &&
    css`
      flex-direction: column;
      flex: 1;
    `}

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
  activeBorders: object,
  activeContext: string,
  borders: object,
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
  size: string,
  scrollToActiveTab: bool,
  rightTabIcon: string
}

Tabs.defaultProps = {
  centerTabs: false,
  gap: 0,
  grabbable: true,
  grabWalkSpeed: 25,
  grabTimeout: 100,
  handleChange: true,
  indicatorSize: 1,
  size: 'md',
  scrollToActiveTab: true,
  rightTabIcon: 'times-circle'
}
