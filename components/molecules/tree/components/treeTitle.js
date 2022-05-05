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

const TreeTitle = ({ isSubTreeOpen, title, submenu }) => {
  return (
    <StyledWrapper>
      {isSubTreeOpen ? <SquareMinus /> : <SquarePlus />}
      <span>{`${title} ${submenu?.length > 0 ? `(${submenu?.length})` : ''}`}</span>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  span {
    position: relative;
    top: -5px;
  }
`
TreeTitle.propTypes = { isSubTreeOpen: bool }

export default TreeTitle
