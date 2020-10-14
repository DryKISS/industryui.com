/**
 * Divider
 */

// Storybook
import { ContextControl, SizeControl } from 'decorators'

// Style
import styled from 'styled-components'

// UI
import { Divider, Text } from 'components'
import Readme from '../README.md'
import { DividerDefaultProps } from '../props'

export default {
  args: {
    context: DividerDefaultProps.context,
    size: DividerDefaultProps.size,
    thickness: DividerDefaultProps.thickness
  },
  argTypes: {
    context: ContextControl(),
    size: SizeControl()
  },
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const BaseComponent = props => {
  return (
    <StyledWrapper>
      <Text>Text</Text>

      <Divider {...props} />

      <Text>Text</Text>
    </StyledWrapper>
  )
}

export const main = args => <BaseComponent {...args} />
export const vertical = args => <BaseComponent {...args} flexItem vertical />

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
`
