/**
 * Components - Atoms - Details2 - Components - Header
 */

// React
import React from 'react'
import { node } from 'prop-types'

// Style
import styled from 'styled-components'

const Details2Actions = ({ toolbar }) => {
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

Details2Actions.propTypes = {
  toolbar: node
}

export default Details2Actions
