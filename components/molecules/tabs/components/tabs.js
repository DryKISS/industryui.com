/**
 * Tabs
 */

// React
import React, { useState } from 'react'
import { array, object, oneOfType, string } from 'prop-types'

// UI
import { Tab } from './tab'

// Style
import styled from 'styled-components'

export const Tabs = ({ children, className, onChange }) => {
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
    onChange && onChange(tab)
  }

  return (
    <>
      <StyledTabs className={className}>
        {children.map(({ props }) => {
          return (
            <Tab
              activeTab={activeTab}
              key={props.label}
              onClick={props.disabled ? () => {} : onClickTabItem}
              {...props}
            />
          )
        })}
      </StyledTabs>

      {children.map(child => {
        if (child.props.label !== activeTab) return undefined
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
`

Tabs.propTypes = {
  children: oneOfType([array, object]).isRequired,
  className: string
}
