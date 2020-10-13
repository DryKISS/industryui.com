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
    thickness: DividerDefaultProps.thickness,
    size: DividerDefaultProps.size,
    context: DividerDefaultProps.context
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
  const defaultProps = {
    ...props.args
  }

  return (
    <StyledWrapper>
      <Text>Text</Text>

      <Divider {...defaultProps} />

      <Text>Text</Text>
    </StyledWrapper>
  )
}

export const main = () => <BaseComponent />
export const vertical = () => <BaseComponent flexItem vertical />

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px;
`
