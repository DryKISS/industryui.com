/**
 * Components - Form - Label
 */

// React
import React from 'react'
import { node, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import Space from '../../atoms/space/space'
import Text from '../../atoms/text/text'

const Label = ({ children, label, size }) => {
  return (
    <StyledLabel hasChild={children}>
      <Space marginBottom="xs">
        <Text content={label} size={size} />
      </Space>

      {children}
    </StyledLabel>
  )
}

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 1rem;

  .react-datepicker-wrapper {
    width: 100%;
  }
`

Label.propTypes = {
  children: node,
  label: string,
  size: string
}

Label.defaultProps = {
  size: 'md'
}

export default Label
