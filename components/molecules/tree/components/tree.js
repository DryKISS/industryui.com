/**
 * Components - Molecules - Components - Tree
 */

// React
import React from 'react'
import styled from 'styled-components'

// UI
import TreeItem from './treeItem'

const Tree = ({ data, ...args }) => (
  <Wrapper className="tree-component">
    {data.map((item, index) => {
      const depthLevel = 0
      return <TreeItem depthLevel={depthLevel} items={item} key={index} {...args} />
    })}
  </Wrapper>
)

const Wrapper = styled.ul`
  margin-top: 80px;
  list-style: none;
  z-index: 100;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
`
export default Tree
