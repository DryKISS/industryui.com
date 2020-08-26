/**
 * Molecules - OffCanvas - Header
 */

// React
import { oneOf } from 'prop-types'

// UI
import { Avatar, Button, CONTEXT, Column, Divider, Row, Text } from '../../../'

// Style
import styled from 'styled-components'
import { lighten } from 'polished'

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
              onClick={onClose}
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
        <StyledText {...props} content={props.headerContent} />
      </StyledBodyContainer>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  position: fixed;
  display: flex;
  width: inherit;
  flex-direction: column;
  flex: 1;
  background-color: ${({ context, theme, variant }) =>
    variant === 'normal' ? '#fff' : lighten(0.1, theme.COLOUR[context])};

  color: ${({ theme: { COLOUR } }) => COLOUR.black};
  letter-spacing: 0.5px;
  padding: 32px 24.5px;
  border-top: 8px solid
    ${({ context, variant, theme }) =>
      variant === 'normal' && context !== 'primary' ? theme.COLOUR[context] : 'transparent'};

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
  min-width: 70px;
  min-height: 70px;
  margin-right: 24.5px;
  align-items: center;
  justify-content: center;
  background-color: ${({ context, theme }) => lighten(0.2, theme.COLOUR[context])};
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
