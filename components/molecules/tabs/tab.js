/**
 * Components - Molecules - Tabs - Components - Tab
 */

// React
import React, { useEffect, useRef } from 'react'
import Icon from '../../atoms/icon/icon/icon'
import { bool, func, number, object, oneOfType, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI

import THEME_SIZE from '../../constants/size'

const Tab = ({
  activeTab,
  activeBackground,
  activeBorders,
  activeContext,
  background,
  borders,
  childClick,
  children,
  leftTabIcon,
  rightTabIcon,
  context,
  data,
  disabled,
  defaultContentComponent,
  renderTab,
  gap,
  key,
  index,
  tabKey,
  indicatorSize,
  label,
  onClick,
  onRemove,
  size,
  scrollToActiveTab
}) => {
  const tabRef = useRef(null)

  const isActive = activeTab.key === tabKey

  useEffect(() => {
    if (scrollToActiveTab && tabRef.current) {
      tabRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      })
    }
  }, [isActive])

  const handleClick = (e) => {
    if (isActive) {
      return
    }

    onClick && onClick({ key: tabKey, label })
    childClick && childClick()
  }

  // If no data then default to Cypress ID
  if (!data) {
    data = { 'data-cy': `${label}Tab` }
  }

  return (
    <StyledTab
      active={isActive}
      context={context}
      {...data}
      activeBorders={activeBorders}
      borders={borders}
      disabled={disabled}
      indicatorSize={indicatorSize}
      onClick={handleClick}
      ref={isActive && scrollToActiveTab ? tabRef : null}
      gap={gap}
      size={size}
    >
      <Icon icon={leftTabIcon} />
      <div>{renderTab ? renderTab() : label}</div>
      {defaultContentComponent && <Icon icon={rightTabIcon} onClick={(e) => onRemove(e, index)} />}
    </StyledTab>
  )
}
const renderTabSize = (size) => {
  switch (size) {
    case THEME_SIZE.LG:
      return css`
        height: 48px !important;
        padding: 13px 16px 13px 16px !important; ;
      `
    case THEME_SIZE.MD:
      return css`
        height: 38px !important;
        padding: 8px 16px 8px 16px !important; ;
      `
    case THEME_SIZE.SM:
      return css`
        height: 32px !important;
        padding: 5px 16px 5px 16px !important; ;
      `
  }
}
const StyledTab = styled.li`
  ${({ borders, context, gap, size, theme }) => css`
    background-color: ${theme.TABS.colour};
    border-left: ${borders?.left || '0'}px solid
      ${context ? theme.COLOUR[context] : theme.TABS.borderColour};
    border-bottom: ${borders?.bottom || '0'}px solid
      ${context ? theme.COLOUR[context] : theme.TABS.borderColour};
    border-top: ${borders?.top || '0'}px solid
      ${context ? theme.COLOUR[context] : theme.TABS.borderColour};
    color: ${theme.TABS.tabTextColour};
    ${gap !== 0 &&
    css`
      border-right: ${borders.right || '0'}px solid
        ${context ? theme.COLOUR[context] : theme.TABS.borderColour};
    `}
  `}

  ${({ size }) => renderTabSize(size)}

  ${({ active, activeBorders, activeContext, context, indicatorSize, theme }) =>
    active &&
    css`
      background-color: ${theme.TABS.activeColour};

      border-top: ${activeBorders?.top || '0'}px solid
        ${activeContext ? theme.COLOUR[activeContext] : theme.TABS.borderColour};

      border-right: ${activeBorders?.right || '0'}px solid
        ${activeContext ? theme.COLOUR[activeContext] : theme.TABS.borderColour};

      border-bottom: ${activeBorders?.bottom || indicatorSize || '0'}px solid
        ${activeContext ? theme.COLOUR[activeContext] : theme.TABS.borderColour};

      border-left: ${activeBorders?.left || '0'}px solid
        ${activeContext ? theme.COLOUR[activeContext] : theme.TABS.borderColour};

      color: ${theme.TABS.activeTabTextColour};
    `}

  ${({ active, theme }) =>
    !active &&
    css`
      cursor: pointer;
    `}

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: ${theme.TABS.disabledColour};
      cursor: not-allowed;
    `}

  &:hover {
    ${({ active, theme }) =>
      !active &&
      css`
        background-color: ${theme.TABS.hoverColour};
      `}

    ${({ disabled, theme }) =>
      disabled &&
      css`
        background-color: ${theme.TABS.disabledColour};
      `}
  }

  &:last-of-type {
    border-top-right-radius: ${({ theme }) => theme.TABS.borderRadius};
    border-top-left-radius: inherit;
    border-right: 1px solid ${({ theme }) => theme.TABS.borderColour};
  }

  &:first-child {
    border-top-left-radius: ${({ theme }) => theme.TABS.borderRadius};
    border-top-right-radius: inherit;
    border-right: 0px;
  }

  min-width: fit-content;
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;
  display: flex;
  justify-content: space-between;

  > svg {
    flex: 1;
    display: block;
    align-self: center;
  }

  > div {
    flex: 3;
    padding: 0px 5px;
  }
`

Tab.propTypes = {
  activeTab: string.isRequired,
  borders: object,
  childClick: func,
  context: oneOfType([bool, string]),
  data: object,
  disabled: bool,
  index: number,
  label: string.isRequired,
  onClick: oneOfType([bool, func]).isRequired,
  scrollToActiveTab: bool,
  rightTabIcon: string
}

Tab.defaultProps = {
  borders: {},
  context: false,
  scrollToActiveTab: true
}

export default Tab
