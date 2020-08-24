/**
 * Molecules - OffCanvas - Header
 */

// React
import { oneOf } from 'prop-types'

// UI
import { Avatar, Button, CONTEXT, Column, Divider, Row, Text } from '../../../'

// Style
import styled from 'styled-components'
import { transparentize } from 'polished'

export const OffCanvasHeader = ({ onClose, title, ...props }) => {
  return (
    <StyledHeader {...props}>
      <Row align='center' justify='between'>
        <Column md={6}>
          <StyledTitle {...props} content={title} />
        </Column>
        <Column md={6}>
          <ButtonsContainer>
            <StyledButton
              variant={props.variant}
              context={props.context}
              content='Submit'
              size='sm'
              outline={props.variant !== 'normal'}
            />

            <Divider flexItem size='sm' vertical />

            <StyledButton
              {...props}
              context='darkGrey'
              startIcon='times'
              startIconProps={{
                context: props.variant !== 'normal' ? props.context : 'white',
                size: 'lg'
              }}
              size='sm'
            />
          </ButtonsContainer>
        </Column>
      </Row>
      <StyledBodyContainer>
        {props.hasAvatar && (
          <StyledAvatarContainer context={props.context}>
            <Avatar content='Avatar' context={props.context} size='lg' {...props} />
          </StyledAvatarContainer>
        )}
        <StyledText
          {...props}
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
        />
      </StyledBodyContainer>
    </StyledHeader>
  )
}
const StyledHeader = styled.div`
  background-color: ${({ context, theme, variant }) =>
    variant === 'normal' ? '#fff' : transparentize(0.3, theme.COLOUR[context])};

  /* background-image: linear-gradient(-303deg, #00a4bd, #00afb2 56%, #00bda5); */
  color: ${({ theme: { COLOUR } }) => COLOUR.black};
  letter-spacing: 0.5px;
  padding: 32px 24.5px;
  border-top: 8px solid
    ${({ context, theme }) => (context !== 'primary' ? theme.COLOUR[context] : 'transparent')};

  ${({ shadow }) => shadow && 'box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.11);'}
`
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const StyledBodyContainer = styled.div`
  display: flex;
  margin-top: 22px;
`
const StyledAvatarContainer = styled.div`
  display: flex;
  min-width: 80px;
  min-height: 80px;
  margin-right: 24.5px;
  align-items: center;
  justify-content: center;
  background-color: ${({ context, theme }) => transparentize(0.7, theme.COLOUR[context])};
  border-radius: 4px;
`

export const StyledTitle = styled(Text)`
  font-size: 20px;
  color: ${({ context, theme: { COLOUR }, variant }) =>
    variant === 'normal' ? COLOUR.black : COLOUR.white};
`
const StyledButton = styled(Button)`
  background-color: ${({ context, theme: { COLOUR }, variant }) =>
    variant === 'normal' ? COLOUR[context] : COLOUR.grey};
  border-style: none;
`

const StyledText = styled(Text)`
  color: ${({ context, theme, variant }) =>
    variant === 'normal' ? theme.COLOUR.black : theme.COLOUR.white};
  display: flex;
  align-items: center;
`

OffCanvasHeader.propTypes = {
  context: oneOf(Object.values(CONTEXT))
}
