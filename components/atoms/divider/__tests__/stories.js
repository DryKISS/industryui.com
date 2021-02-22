/**
 * Divider
 */

// React
import React from 'react'

// Storybook
import { ContextControl, SizeControl } from '../../../../.storybook/decorators'

// Style
import styled from 'styled-components'

// UI
import { Divider, Text } from '../../../'
import Readme from '../README.md'
import { defaultProps } from '../props'

export default {
  args: {
    context: defaultProps.context,
    size: defaultProps.size,
    thickness: defaultProps.thickness,
    dashed: false
  },
  argTypes: {
    context: ContextControl(),
    size: SizeControl()
  },
  component: Divider,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Divider'
}

const BaseComponent = (props) => {
  return (
    <StyledWrapper>
      <Text>Text</Text>

      <Divider {...props} />

      <Text>Text</Text>
    </StyledWrapper>
  )
}

export const main = (args) => <BaseComponent {...args} />
export const vertical = (args) => <BaseComponent {...args} flexItem vertical />

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`
