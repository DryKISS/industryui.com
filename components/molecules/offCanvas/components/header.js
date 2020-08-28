/**
 * Molecules - OffCanvas - Header
 */

// React
import { oneOf } from 'prop-types'

// UI
import { Avatar, Button, CONTEXT, Column, Divider, Heading, Row, Text } from '../../../'

// Style
import styled from 'styled-components'
import { lighten } from 'polished'

export const OffCanvasHeader = ({
  context,
  hasAvatar,
  headerContent,
  onClose,
  title,
  variant,
  ...props
}) => {
  return (
    <StyledHeader context={context} variant={variant}>
      <Row align='center' justify='between'>
        <Column md={6}>
          <StyledHeading content={title} context={context} tag='h4' variant={variant} />
        </Column>

        <Column md={6}>
          <ButtonsContainer>
            <StyledButton
              variant={variant}
              context={context}
              content='Submit'
              size='sm'
              outline={variant !== 'normal'}
            />

            <Divider flexItem size='sm' vertical />

            <StyledButton
              {...props}
              context='darkGrey'
              startIcon='times'
              startIconProps={{
                context: variant !== 'normal' ? context : 'white',
                size: 'lg'
              }}
              onClick={onClose}
              size='sm'
            />
          </ButtonsContainer>
        </Column>
      </Row>

      <StyledBodyContainer>
        {hasAvatar && (
          <StyledAvatarContainer context={context}>
            <Avatar content='Avatar' context={context} size='lg' {...props} />
          </StyledAvatarContainer>
        )}

        <StyledText {...props} content={headerContent} />
      </StyledBodyContainer>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  background-color: ${({ context, theme, variant }) =>
    variant === 'normal' ? '#fff' : lighten(0.1, theme.COLOUR[context])};
  border-top: 8px solid
    ${({ context, variant, theme }) =>
      variant === 'normal' && context !== 'primary' ? theme.COLOUR[context] : 'transparent'};
  ${({ shadow }) => shadow && 'box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.11);'}
  color: ${({ theme: { COLOUR } }) => COLOUR.black};
  display: flex;
  flex: 1;
  flex-direction: column;
  letter-spacing: 0.5px;
  padding: 32px 24.5px;
  position: fixed;
  width: inherit;
`

const StyledHeading = styled(Heading)`
  color: ${({ context, theme: { COLOUR }, variant }) =>
    variant === 'normal' ? COLOUR.black : COLOUR.white};
  font-size: 20px;
  margin: 0;
`

const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`

const StyledBodyContainer = styled.div`
  display: flex;
  margin-top: 22px;
`

const StyledAvatarContainer = styled.div`
  align-items: center;
  background-color: ${({ context, theme }) => lighten(0.2, theme.COLOUR[context])};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  margin-right: 24.5px;
  min-height: 70px;
  min-width: 70px;
`

const StyledButton = styled(Button)`
  background-color: ${({ context, theme: { COLOUR }, variant }) =>
    variant === 'normal' ? COLOUR[context] : COLOUR.grey};
  border-style: none;
`

const StyledText = styled(Text)`
  align-items: center;
  color: ${({ context, theme, variant }) =>
    variant === 'normal' ? theme.COLOUR.black : theme.COLOUR.white};
  display: flex;
`

OffCanvasHeader.propTypes = {
  context: oneOf(Object.values(CONTEXT))
}
