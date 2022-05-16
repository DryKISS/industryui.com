/**
 * Components - Molecules - Tabs - Components - Tabs
 */

// React
import React, { createRef, useEffect, useState } from 'react'
import { array, bool, func, number, object, oneOfType, string } from 'prop-types'

// Next
import Router, { useRouter } from 'next/router'

// Style
import styled, { css } from 'styled-components'

// UI
import Button from '../../atoms/button/button/button'
import Dropdown from '../../molecules/dropdown/dropdown'
import Icon from '../../atoms/icon/icon/icon'
import Tab from './tab'
import uniqueId from '../../utils/uniqueId/uniqueId'
import slugify from '../../utils/slugify/slugify'

const handleScroll = ({ el, grabWalkSpeed, grabTimeout }) => {
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

const initializeTab = (initialTabs, children) => {
  if (initialTabs) {
    return children.map(({ props }) => (
      <TabItem key={uniqueId()} label={props.label} {...props}>
        <> {props?.children}</>
      </TabItem>
    ))
  } else {
    return React.Children.toArray(children).map((item) => ({ ...item, key: uniqueId() }))
  }
}

// Active
let active = ''

export const Tabs = ({
  activeBorders,
  activeBorderContext,
  activeBackgroundContext,
  activeContext,
  backgroundContext,
  borders,
  borderContext,
  centerTabs,
  children,
  className,
  defaultContentComponent,
  indicatorSize,
  isVertical,
  handleChange,
  gap,
  grabbable,
  grabWalkSpeed,
  grabTimeout,
  rightTabIcon,
  onTabChange,
  size,
  scrollToActiveTab
}) => {
  const router = useRouter()
  const wrapperRef = createRef()

  const [overflow, setOverflow] = useState(false)
  const [tabPanes, setTabPane] = useState(initializeTab(defaultContentComponent, children))

  useEffect(() => {
    if (grabbable) {
      handleScroll({ el: wrapperRef.current, grabWalkSpeed, grabTimeout })
    }
  }, [])

  if (!Array.isArray(children)) {
    children = React.Children.toArray(children)
  }

  // Find active in children if more than one tab or make first active
  if (tabPanes?.length) {
    if (tabPanes.length > 1) {
      tabPanes.forEach((child) => {
        if (child.props.active === true) {
          active = {
            key: child.key,
            label: child.props.label
          }
        }
      })
    } else {
      active = {
        key: tabPanes[0].key,
        label: tabPanes[0].props.label
      }
    }
  }

  const [activeTab, setActiveTab] = useState(active)

  useEffect(() => {
    if (grabbable) {
      handleScroll({ el: wrapperRef.current, grabWalkSpeed, grabTimeout })
    }
  }, [])

  useEffect(() => {
    const { current = {} } = wrapperRef
    setOverflow(current?.scrollWidth > current?.offsetWidth)
  }, [wrapperRef])

  // Review it
  const onClickTabItem = ({ key, label }) => {
    setActiveTab({ key, label })

    if (handleChange) {
      handleRoute(slugify(label))
    }

    if (onTabChange) {
      onTabChange(slugify(label))
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

  const renderDefaultComponent = (current) => {
    if (typeof current?.props?.children !== 'object') {
      return defaultContentComponent()
    } else {
      return current.props.children
    }
  }

  const renderTabContent = (defaultContentComponent) => {
    return React.Children.map(tabPanes, (child, index) => {
      const { children: item, label } = tabPanes[index]?.props

      const isDynamicTab = !!defaultContentComponent
      const renderCondition = () =>
        isDynamicTab
          ? activeTab.key === tabPanes[index].key
          : slugify(label) === slugify(activeTab.label)
      return (
        renderCondition() && (
          <>{defaultContentComponent ? renderDefaultComponent(tabPanes[index]) : item}</>
        )
      )
    })
  }

  const handleAdd = () => {
    const nextChild = uniqueId()
    const newTabTitle = 'New Tab'
    const data = (
      <TabItem label={newTabTitle} key={nextChild} active={true} rightTabIcon={rightTabIcon}>
        {newTabTitle}
      </TabItem>
    )

    setTabPane([...tabPanes, data])
    setActiveTab({ key: nextChild, label: newTabTitle })
  }

  const handleRemove = (e, index) => {
    e.stopPropagation()
    if (tabPanes.length > 1) {
      let newIndex = tabPanes.length - 1

      if (index === newIndex) newIndex = newIndex - 1 < 0 ? 0 : newIndex - 1

      setActiveTab(
        Object.assign(activeTab, {
          key: tabPanes[newIndex]?.key,
          label: tabPanes[newIndex]?.props?.label
        })
      )

      setTabPane(tabPanes.filter((_, i) => i !== index))
    }
  }

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
          borders={borders}
          centerTabs={centerTabs}
          className={className}
          isVertical={isVertical}
          gap={gap}
          grabbable={grabbable}
          ref={wrapperRef}
        >
          {tabPanes.length &&
            tabPanes?.map(({ key, props, ...rest }, index) => {
              return (
                <Tab
                  activeTab={activeTab}
                  activeContext={activeContext}
                  activeBorders={activeBorders}
                  activeBorderContext={activeBorderContext}
                  activeBackgroundContext={activeBackgroundContext}
                  backgroundContext={backgroundContext}
                  borders={borders}
                  borderContext={borderContext}
                  defaultContentComponent={defaultContentComponent}
                  gap={gap}
                  index={index}
                  indicatorSize={indicatorSize}
                  key={key}
                  onClick={!props.disabled && onClickTabItem}
                  onRemove={handleRemove}
                  size={size}
                  scrollToActiveTab={scrollToActiveTab}
                  rightTabIcon={rightTabIcon}
                  tabKey={key}
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
            onChange={({ id, name }) => setActiveTab({ key: id, label: name })}
            items={tabPanes.map(({ props, key }, index) => ({
              id: key,
              name: props.label
            }))}
          >
            <Button
              startIcon="chevronDown"
              size={size}
              startIconProps={{ colour: 'white', iui: true, size: size }}
              context="secondary"
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
        {tabPanes.length && renderTabContent(defaultContentComponent)}
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

  ${({ isVertical, centerTabs }) => {
    if (!isVertical && centerTabs)
      return css`
        justify-content: center;
        width: 100%;
      `

    if (isVertical && centerTabs)
      return css`
        justify-content: center;
        height: 100%;
      `
  }}

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
  activeBorderContext: string,
  activeBackgroundContext: string,
  activeContext: string,
  backgroundContext: string,
  borders: object,
  borderContext: string,
  centerTabs: bool,
  children: oneOfType([array, object]).isRequired,
  className: string,
  defaultContentComponent: string,
  gap: number,
  grabbable: bool,
  grabWalkSpeed: number,
  grabTimeout: number,
  handleChange: bool,
  indicatorSize: number,
  icon: string,
  isVertical: bool,
  size: string,
  scrollToActiveTab: bool,
  rightTabIcon: string,
  onTabChange: func
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
