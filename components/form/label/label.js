/**
 * Form - Label
 */

// React
import React from 'react'
import { bool, node, string } from 'prop-types'

// Style
import styled from 'styled-components'
import { Space, Text } from '../../'

export const FormLabel = ({ children, id, label, show, size }) => {
  return (
    <StyledLabel hasChild={children} htmlFor={id} show={show}>
      <Space marginBottom="xs">
        <Text size={size ?? 'md'} colour="darkText" content={label} />
      </Space>
      {children}
    </StyledLabel>
  )
}

const StyledLabel = styled.label`
  display: ${({ show }) => (show ? 'block' : 'none')};
  margin-bottom: ${({ hasChild }) => (!hasChild ? '0' : '1rem')};
  .react-datepicker-wrapper {
    width: 100%;
  }
`

FormLabel.propTypes = {
  children: node,
  id: string,
  label: string,
  show: bool
}

FormLabel.defaultProps = {
  show: true
}
