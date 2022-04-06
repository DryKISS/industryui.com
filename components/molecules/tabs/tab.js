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
import slugify from '../../utils/slugify/slugify'

const Tab = ({
  activeTab,
  activeContext,
  activeBorders,
  activeBorderContext,
  activeBackgroundContext,
  backgroundContext,
  borders,
  borderContext,
  context,
  childClick,
  data,
  disabled,
  defaultContentComponent,
  gap,
  indicatorSize,
  index,
  leftTabIcon,
  label,
  onClick,
  onRemove,
  rightTabIcon,
  renderTab,
  size,
  scrollToActiveTab,
  tabKey
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
    data = { 'data-cy': `${slugify(label + index)}Tab` }
  }

  return (
    <StyledTab
      active={isActive}
      context={context}
      activeContext={activeContext}
      {...data}
      activeBorders={activeBorders}
      activeBorderContext={activeBorderContext}
      activeBackgroundContext={activeBackgroundContext}
      borderContext={borderContext}
      borders={borders}
      backgroundContext={backgroundContext}
      disabled={disabled}
      indicatorSize={indicatorSize}
      gap={gap}
      onClick={handleClick}
      ref={isActive && scrollToActiveTab ? tabRef : null}
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
    case THEME_SIZE.SM:
      return css`
        height: 32px !important;
        padding: 5px 16px 5px 16px !important; ;
      `
    // since MD is default size
    default:
      return css`
        height: 38px !important;
        padding: 8px 16px 8px 16px !important; ;
      `
  }
}
const StyledTab = styled.li`
  ${({ active, activeContext, backgroundContext, borders, borderContext, gap, size, theme }) => css`
    background-color: ${backgroundContext ? theme.COLOUR[backgroundContext] : theme.TABS.colour};
    border-left: ${borders?.left || '0'}px solid
      ${borderContext ? theme.COLOUR[borderContext] : theme.TABS.borderColour};
    border-bottom: ${borders?.bottom || '0'}px solid
      ${borderContext ? theme.COLOUR[borderContext] : theme.TABS.borderColour};
    border-top: ${borders?.top || '0'}px solid
      ${borderContext ? theme.COLOUR[borderContext] : theme.TABS.borderColour};
    > div {
      color: ${active ? activeContext : theme.TABS.tabTextColour};
    }
    ${gap !== 0 &&
    css`
      border-right: ${borders.right || '0'}px solid
        ${borderContext ? theme.COLOUR[borderContext] : theme.TABS.borderColour};
    `}
  `}

  ${({ size }) => renderTabSize(size)}

  ${({
    active,
    activeBorders,
    activeBorderContext,
    activeBackgroundContext,
    context,
    indicatorSize,
    theme
  }) =>
    active &&
    css`
      background-color: ${activeBackgroundContext
        ? theme.COLOUR[activeBackgroundContext]
        : theme.TABS.activeColour};

      border-top: ${activeBorders?.top || '0'}px solid
        ${activeBorderContext ? theme.COLOUR[activeBorderContext] : theme.TABS.borderColour};

      border-right: ${activeBorders?.right || '0'}px solid
        ${activeBorderContext ? theme.COLOUR[activeBorderContext] : theme.TABS.borderColour};

      border-bottom: ${activeBorders?.bottom || indicatorSize || '0'}px solid
        ${activeBorderContext ? theme.COLOUR[activeBorderContext] : theme.TABS.borderColour};

      border-left: ${activeBorders?.left || '0'}px solid
        ${activeBorderContext ? theme.COLOUR[activeBorderContext] : theme.TABS.borderColour};

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
    &:nth-child(1) {
      margin-right: 5px;
    }
  }

  > div {
    flex: 3;
    padding: 0px 5px;
  }
`

Tab.propTypes = {
  activeBackgroundContext: string,
  activeTab: string.isRequired,
  activeBorders: object,
  activeBorderContext: string,
  backgroundContext: string,
  borders: object,
  borderContext: string,
  childClick: func,
  context: oneOfType([bool, string]),
  data: object,
  defaultContentComponent: func,
  disabled: bool,
  gap: number,
  index: number,
  indicatorSize: number,
  label: string.isRequired,
  leftTabIcon: string,
  onClick: oneOfType([bool, func]).isRequired,
  onRemove: func,
  rightTabIcon: string,
  renderTab: func,
  size: string,
  scrollToActiveTab: bool,
  tabKey: string
}

Tab.defaultProps = {
  borders: {},
  context: false,
  label: 'New Tab',
  scrollToActiveTab: true
}

export default Tab
