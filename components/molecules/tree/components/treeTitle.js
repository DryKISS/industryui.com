/**
 * Components - Molecules - Tree - TreeNode - TreeTitle
 */

// React
import React from 'react'
import { bool } from 'prop-types'

// UI
import SquarePlus from '../../../icons/components/plusSquare'
import SquareMinus from '../../../icons/components/minusSquare'

// Style
import styled from 'styled-components'

const TreeTitle = ({ isSubTreeOpen, title, child }) => {
  return (
    <StyledWrapper>
      {isSubTreeOpen ? <SquareMinus /> : <SquarePlus />}
      <span>{`${title} ${child?.length > 0 ? `(${child?.length})` : '(0)'}`}</span>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  span {
    position: relative;
    top: -8px;
  }
`
TreeTitle.propTypes = { isSubTreeOpen: bool }

export default TreeTitle
