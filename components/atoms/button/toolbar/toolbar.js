/**
 * Components - Atoms - Button - Toolbar
 */

// React
import React from 'react'
import { node, string } from 'prop-types'

// Style
import styled from 'styled-components'

const ButtonToolbar = ({ align, children }) => {
  return (
    <StyledToolbar align={align} aria-label="Toolbar with button groups" role="toolbar">
      <StyledGroup role="group" aria-label="First group">
        {children}
      </StyledGroup>
    </StyledToolbar>
  )
}

const StyledToolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ align }) => align};
`

const StyledGroup = styled.div`
  display: inline-flex;
  position: relative;
  vertical-align: middle;

  a:hover {
    color: white;
  }

  &:last-child > div:last-of-type button {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    border-right: 0;
  }

  a:not(:last-child),
  button:not(:last-child) {
    border-bottom-right-radius: 0;
    border-right: 1px solid ${({ theme: { COLOUR } }) => COLOUR.light};
    border-top-right-radius: 0;
  }

  a:not(:first-child),
  button:not(:first-child),
  a:not(:first-child) button,
  div:not(:first-child) button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: 0;
  }

  a:not(:last-child) button,
  div:not(:last-child) button {
    border-bottom-right-radius: 0;
    border-right: 1px solid ${({ theme: { COLOUR } }) => COLOUR.light};
    border-top-right-radius: 0;
  }
`

ButtonToolbar.propTypes = {
  align: string,
  children: node.isRequired
}

ButtonToolbar.defaultProps = {
  align: 'center'
}

export default ButtonToolbar
