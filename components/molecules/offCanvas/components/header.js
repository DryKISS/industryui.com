/**
 * Molecules - OffCanvas - Header
 */

// React
import { oneOf } from 'prop-types'

// UI
import {
  Avatar,
  Button,
  Close,
  CONTEXT,
  Column,
  Divider,
  Heading,
  Icon,
  Row,
  Space,
  Text
} from '../../../'

// Style
import styled from 'styled-components'
import { lighten } from 'polished'

export const OffCanvasHeader = ({ context, hasAvatar, headerContent, onClose, title, variant }) => {
  return (
    <StyledHeader context={context} variant={variant}>
      <Row>
        <Column md={6}>
          <Icon context={variant === 'extended' ? 'white' : context} icon='expand' prefix='fas' />
          <StyledHeading content={title} context={context} tag='h4' variant={variant} />
        </Column>

        <Column md={6}>
          <StyledContainer>
            <StyledButton
              content='Submit'
              context={context}
              form='offCanvasForm'
              outline={variant !== 'normal'}
              size='sm'
              variant={variant}
              type='submit'
            />

            <Divider flexItem size='sm' vertical />

            <Close click={onClose} context={variant === 'normal' ? context : 'white'} />
          </StyledContainer>
        </Column>
      </Row>

      <Space />

      <StyledBodyContainer>
        {hasAvatar && (
          <StyledAvatarContainer context={context}>
            <Avatar content='Avatar' context={context} size='lg' />
          </StyledAvatarContainer>
        )}

        <StyledText content={headerContent} context={context} size='xs' variant={variant} />
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
  padding: 1rem;
  position: fixed;
  width: inherit;
  z-index: 1;
`

const StyledHeading = styled(Heading)`
  color: ${({ context, theme: { COLOUR }, variant }) =>
    variant === 'normal' ? COLOUR.black : COLOUR.white};
  display: inline;
  margin: 0;
  padding-left: 0.25rem;
`

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`

const StyledButton = styled(Button)`
  background-color: ${({ context, theme: { COLOUR }, variant }) =>
    variant === 'normal' ? COLOUR[context] : COLOUR.grey};
`

const StyledBodyContainer = styled.div`
  display: flex;
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

const StyledText = styled(Text)`
  /* align-items: center; */
  color: ${({ context, theme, variant }) =>
    variant === 'normal' ? theme.COLOUR.black : theme.COLOUR.white};
  /* display: flex; */
`

OffCanvasHeader.propTypes = {
  context: oneOf(Object.values(CONTEXT))
}
