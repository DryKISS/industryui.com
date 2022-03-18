/**
 * Components - Molecules - Tree - TreeNode
 */

// React
import React, { useState } from 'react'

import { func, object } from 'prop-types'

// UI
import Icon from '../../../atoms/icon/icon/icon'
import Tree from '../tree'

// Style
import styled from 'styled-components'

const TreeNode = ({ node, onClick }) => {
  const [childVisible, setChildVisiblity] = useState(false)

  const hasChild = node.children ? true : false

  const onNodeClick = () => {
    if (hasChild) {
      setChildVisiblity(!childVisible)
    } else {
      onClick(node)
    }
  }

  return (
    <StyledLi>
      <StylesContainer onClick={onNodeClick}>
        {hasChild && (
          <StyledIcon prefix="fa" icon={`${childVisible ? 'angle-down' : 'angle-right'}`} />
        )}

        <StyledLabel>
          <Icon icon={node.icon}> </Icon>
          {node.label}
        </StyledLabel>
      </StylesContainer>

      {hasChild && childVisible && (
        <StyledUl>
          <Tree data={node.children} onClick={onClick} />
        </StyledUl>
      )}
    </StyledLi>
  )
}

const StyledLi = styled.li`
  list-style: none;
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
`

TreeNode.propTypes = {
  node: object,
  onClick: func
}

export default TreeNode
