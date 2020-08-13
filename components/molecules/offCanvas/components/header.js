/**
 * Molecules - OffCanvas - Header
 */

// React
import { oneOf } from 'prop-types'

// UI
import { Button, CONTEXT, Column, Divider, Row, Text } from '../../../'

// Style
import styled from 'styled-components'

export const OffCanvasHeader = ({ onClose, title, ...props }) => (
  <StyledHeader {...props}>
    <Row align='center' justify='between'>
      <Column md={6}>
        <StyledTitle content={title} />
      </Column>

      <Column md={6}>
        <ButtonsContainer>
          <Button content='Submit' size='sm' />

          <Divider flexItem size='sm' vertical />

          <Button
            context='light'
            startIcon='times'
            startIconProps={{ context: 'dark', size: 'lg' }}
            size='sm'
          />
        </ButtonsContainer>
      </Column>
    </Row>

    <Text
      content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
      mt={4}
    />
  </StyledHeader>
)

const StyledHeader = styled.div`
  background-color: #fff;
  /* background-image: linear-gradient(-303deg, #00a4bd, #00afb2 56%, #00bda5); */
  color: ${({ theme: { COLOUR } }) => COLOUR.black};
  letter-spacing: 0.5px;
  padding: 32px 24px;
  border-top: 8px solid ${({ context, theme }) => theme.COLOUR[context]};

  ${({ shadow }) => shadow && 'box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.11);'}
`

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const StyledTitle = styled(Text)`
  font-size: 20px;
`

OffCanvasHeader.propTypes = {
  context: oneOf(Object.values(CONTEXT))
}
