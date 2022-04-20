/**
 * Components - Molecules - Tree - TreeNode - Expand
 */

// React
import React from 'react'
import { bool } from 'prop-types'

// UI
import SquarePlus from '../../../icons/components/plusSquare'
import SquareMinus from '../../../icons/components/minusSquare'

// Style
import styled from 'styled-components'

const Expand = ({ childVisible }) => {
  return <StyledWrapper>{childVisible ? <SquareMinus /> : <SquarePlus />}</StyledWrapper>
}

const StyledWrapper = styled.div`
  padding-top: 6px;
  padding-right: 5px;
  cursor: pointer;
`
Expand.propTypes = { childVisible: bool }

export default Expand
