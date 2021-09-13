/**
 * Components - Atoms - Details - Components - Header
 */

// React
import React from 'react'
import { node } from 'prop-types'

// Style
import styled from 'styled-components'

const DetailsActions = ({ toolbar }) => {
  return (
    <Wrapper>
      <Toolbar>{toolbar}</Toolbar>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  align-items: center;
  display: flex;
`

const Toolbar = styled.div`
  align-items: center;
  display: flex;
`

DetailsActions.propTypes = {
  toolbar: node
}

export default DetailsActions
