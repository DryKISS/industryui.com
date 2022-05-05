/**
 * Components - Molecules - Components - SubTree
 */

// React
import React from 'react'
import { array, bool, func, number, string } from 'prop-types'

// UI
import TreeItem from './treeItem'

// Style
import styled, { css } from 'styled-components'

const SubTree = ({ child, depthLevel, isSubTree, onClick, subItemActive, parent }) => {
  depthLevel = depthLevel + 1

  return (
    <Wrapper className={`${isSubTree ? 'show' : ''}`}>
      {child.map((childItem, index) => (
        <TreeItem
          parent={parent}
          depthLevel={depthLevel}
          items={childItem}
          key={index}
          onClick={onClick}
          subItemActive={subItemActive}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  z-index: 9999;
  padding: 0.5rem 0;
  list-style: none;
  display: none;

  &.show {
    display: block;
  }
`

SubTree.propTypes = {
  child: array.isRequired,
  dropdown: bool.isRequired,
  depthLevel: number.isRequired,
  isSubTree: bool,
  onClick: func,
  subItemActive: string,
  parent: string
}

export default SubTree
