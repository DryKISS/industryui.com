/**
 * Components - Organisms - Messaging - Draft Plugins - Components - Link
 */

// React
import React from 'react'

// Style
import styled from 'styled-components'

const LinkPluginComponent = (props) => {
  return <StyledA {...props} onClick={() => {}} />
}

const StyledA = styled.a`
  color: ${({ theme: { EDITOR } }) => EDITOR.linkColour};
`
export default LinkPluginComponent
