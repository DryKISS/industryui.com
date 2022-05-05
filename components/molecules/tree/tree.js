/**
 * Components - Molecules - TreeTwo
 */

// React
import React, { useState } from 'react'
import { array, func } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import MainTree from './components/tree'

const Tree = ({ data, mainItemActive, subItemActive, onClick }) => (
  <MainTree
    data={data}
    mainItemActive={mainItemActive}
    subItemActive={subItemActive}
    onClick={(data) => console.log('data :>> ', data)}
  />
)

Tree.propTypes = {
  data: array.isRequired
}

export default Tree
