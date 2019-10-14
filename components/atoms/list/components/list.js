/**
 * List
 */

// React
import React from 'react'
import { bool, node, object, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

export const List = ({
  border,
  children,
  className,
  flush,
  inline,
  group,
  style,
  unstyled
}) => {
  const renderListItems = () =>
    React.Children.map(children, (child) => React.cloneElement(child, {
      border: border,
      flush: flush,
      group: group
    }))

  return (
    <StyledList
      border={border}
      className={className}
      flush={flush}
      group={group}
      inline={inline}
      role='list'
      style={style}
      unstyled={unstyled}
    >
      {renderListItems()}
    </StyledList>
  )
}

const groupStyles = css`
  margin: -1px;
`

const inlineStyles = css`
  align-items: center;
  display: inline-flex;
`

const unstyledStyles = css`
  list-style: none;
  padding-left: 0;
`

const StyledList = styled.ul`
  ${({ group }) => group ? groupStyles : ''}
  ${({ inline }) => inline ? inlineStyles : ''}
  ${({ unstyled, border, group, flush }) =>
  unstyled || border || flush || group ? unstyledStyles : ''}
`

List.propTypes = {
  border: bool,
  children: node.isRequired,
  className: string,
  inline: bool,
  flush: bool,
  group: bool,
  style: object,
  unstyled: bool
}

List.defaultProps = {
  className: '',
  inline: false,
  group: false,
  unstyled: false
}
