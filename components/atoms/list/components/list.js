/**
 * List
 */

// React
import React from 'react'
import { bool, node, object, string } from 'prop-types'

// UI
import { ListItem } from '../../'

// Style
import styled from 'styled-components'

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
    React.Children.map(children, (child, index) =>
      <ListItem key={index} border={border} flush={flush} group={group} {...child.props} />
    )

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

const groupStyles = `
  margin: -1px;
`

const inlineStyles = `
  align-items: center;
  display: inline-flex;
`

const unstyledStyles = `
  list-style: none;
  padding-left: 0;
`

const StyledList = styled.ul`
  ${({ group }) => group ? groupStyles : ''}
  ${({ inline }) => inline ? inlineStyles : ''}
  ${({ unstyled, border, group, flush }) => unstyled || border || flush || group ? unstyledStyles : ''}
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
