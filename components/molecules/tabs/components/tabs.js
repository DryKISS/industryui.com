/**
 * Tabs
 */

// React
import React, { useState } from 'react'
import { array, bool, object, oneOfType, string } from 'prop-types'

// Next
import Router, { useRouter } from 'next/router'

// UI
import { Tab } from './tab'

// Style
import styled from 'styled-components'

export const Tabs = ({ children, className, handleChange }) => {
  const router = useRouter()

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
`

Tabs.propTypes = {
  children: oneOfType([array, object]).isRequired,
  className: string,
  handleChange: bool
}

Tabs.defaultProps = {
  handleChange: true
}
