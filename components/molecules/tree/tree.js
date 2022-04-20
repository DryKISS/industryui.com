/**
 * Tree
 */

// React
import React from 'react'
import { func, object } from 'prop-types'

// UI
import TreeNode from './components/node'

// Style
import styled from 'styled-components'

const Tree = ({ data, onClick }) => {
  console.log('onClick', onClick)
  return (
    <StyledUl>
      {data.map((tree) => (
        <TreeNode node={tree} onClick={onClick} />
      ))}
    </StyledUl>
  )
}

const StyledUl = styled.ul`
  margin: 0px;
  padding: 0px;
  ul {
    margin: 0px;
    padding-left: 15px;
  }

  display: flex;
  flex-direction: column;
`

Tree.propTypes = {
  data: object,
  onClick: func
}

export default Tree
