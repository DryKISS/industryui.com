/**
 * Molecules - OffCanvas - Header
 */

// React
import { oneOf } from 'prop-types'

// UI
import { Button, CONTEXT, Icon, Text } from '../../../'

// Style
import styled from 'styled-components'

export const OffCanvasHeader = ({ onClose, title, ...props }) => (
  <StyledHeader>
    <div>
      <StyledTitle content={title} />
    </div>

    <div>
      <Button content='Submit' mr={4} size='sm' />

      <Button context='light' size='sm'>
        <Icon aria-hidden='true' context='dark' icon='times' />
      </Button>
    </div>
  </StyledHeader>
)

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  /* background-image: linear-gradient(-303deg, #00a4bd, #00afb2 56%, #00bda5); */
  color: ${({ theme: { COLOUR } }) => COLOUR.black};
  letter-spacing: 0.5px;
  padding: 32px 24px;
`

export const StyledTitle = styled(Text)`
  font-size: 20px;
`

OffCanvasHeader.propTypes = {
  context: oneOf(Object.values(CONTEXT))
}
