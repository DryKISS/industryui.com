/**
 * Components - Molecules - Tree - TreeNode
 */

// React
import React, { useState } from 'react'

import { func, object } from 'prop-types'

// UI
import Icon from '../../../atoms/icon/icon/icon'
import Tree from '../tree'
import Expand from './Expand'

// Style
import styled, { css } from 'styled-components'

const TreeNode = ({ node, label, onClick }) => {
  const [childVisible, setChildVisiblity] = useState(false)

  const hasChild = node.children ? true : false

  const onNodeClick = () => {
    if (hasChild) {
      setChildVisiblity(!childVisible)
    }

    onClick(node, label)
  }

  return (
    <StyledLi hasChild={hasChild}>
      <StylesContainer onClick={onNodeClick}>
        {hasChild && <Expand childVisible={childVisible} />}
        <StyledLabel>
          <Icon icon={node.icon}> </Icon>
          {node.label}
          {hasChild && <span>{`  (${node?.children?.length || 0})`}</span>}
        </StyledLabel>
      </StylesContainer>

      {hasChild && childVisible && (
        <StyledUl>
          <Tree data={node.children} label={node.label} onClick={onClick} />
        </StyledUl>
      )}
    </StyledLi>
  )
}

const StyledLi = styled.li`
  list-style: none;
  padding-top: 10px;
  position: relative;

  ${({ hasChild }) =>
    !hasChild &&
    css`
      &:before {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        left: -15px;
        top: 17px;
        background-color: ${({ theme }) => theme.COLOUR.gray};
        border-radius: 50% 50%;
      }
    `}
`

const StylesContainer = styled.div`
  display: flex;
`
const StyledIcon = styled(Icon)`
  cursor: pointer;
`

const StyledLabel = styled.div`
  cursor: pointer;
`

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: -10px !important;
`

TreeNode.propTypes = {
  node: object,
  onClick: func
}

export default TreeNode
