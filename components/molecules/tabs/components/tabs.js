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

export const handleScroll = (el, grabWalkSpeed) => {
  const slider = el
  let isDown = false
  let startX
  let sl

  slider.addEventListener('mousedown', e => {
    isDown = true
    startX = e.pageX - slider.offsetLeft
    sl = slider.scrollLeft
  })
  slider.addEventListener('mouseleave', () => {
    isDown = false
    slider.classList.remove('active')
  })
  slider.addEventListener('mouseup', () => {
    isDown = false
    slider.classList.remove('active')
  })
  slider.addEventListener('mousemove', e => {
    if (!isDown) return
    e.preventDefault()
    slider.classList.add('active')
    const x = e.pageX - slider.offsetLeft
    const walk = x - startX
    slider.scrollLeft = sl - walk + grabWalkSpeed
  })
}

export const Tabs = ({
  children,
  className,
  grabbable,
  grabWalkSpeed,
  handleChange,
  scrollToActiveTab
}) => {
  const router = useRouter()
  const wrapperRef = createRef()

  useEffect(() => {
    if (grabbable) handleScroll(wrapperRef.current, grabWalkSpeed)
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
      <StyledTabs className={className} grabbable={grabbable} ref={wrapperRef}>
        {children.map(({ props }) => {
          return (
            <Tab
              activeTab={activeTab}
              key={props.label}
              onClick={props.disabled ? () => {} : onClickTabItem}
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
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid ${({ theme }) => theme.TABS.borderColour};
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
  children: oneOfType([array, object]).isRequired,
  className: string,
  grabbable: bool,
  grabWalkSpeed: number,
  handleChange: bool,
  scrollToActiveTab: bool
}

Tabs.defaultProps = {
  grabbable: true,
  grabWalkSpeed: 25,
  handleChange: true,
  scrollToActiveTab: true
}
