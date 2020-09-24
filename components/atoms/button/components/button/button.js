/**
 * Button
 */

// React
import { forwardRef } from 'react'

// UI
import { BACKGROUND, DIMENSION, DISPLAY, Icon, shadeLinearRgb, SPACER } from '../../../../'
import { ButtonPropTypes, ButtonDefaultProps } from './props'

// Style
import styled, { css, useTheme } from 'styled-components'

export const Button = forwardRef(
  (
    {
      children,
      content,
      context,
      endIcon,
      endIconProps,
      startIcon,
      startIconProps,
      outline,
      ...props
    },
    ref
  ) => {
    const theme = useTheme()
    const textContext = getTextContext(context, outline, theme)
    const text = children || content

    return (
      <StyledButton
        context={context}
        outline={outline}
        textContext={textContext}
        ref={ref}
        role='button'
        {...props}
      >
        {startIcon && <Icon icon={startIcon} {...startIconProps} />}

        {text && <StyledContent>{text}</StyledContent>}

        {endIcon && <Icon icon={endIcon} {...endIconProps} />}
      </StyledButton>
    )
  }
)

const getTextContext = (context, outline, theme) => {
  if (context === 'white') {
    return 'primary'
  }

  if (outline) {
    return context
  }

  return 'white'
}

const StyledButton = styled.button`
  ${props => BACKGROUND(props)}

  color: ${({ textContext, theme: { COLOUR } }) => COLOUR[textContext]};

  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: ${({ block, centre }) => (centre || block ? 'flex' : 'inline-flex')};
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.font};
  outline: none;
  overflow: visible;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  margin: ${({ centre }) => (centre ? 'auto' : 0)};
  padding: ${({ theme }) => theme.SPACING(3, 6)};
  width: ${({ block }) => (block ? '100%' : 'initial')};
  height: 48px;
  font-size: 14px;
  line-height: 100%;

  border: ${({ context, dashed, outline, theme: { COLOUR } }) =>
    outline ? `1px ${dashed ? 'dashed' : 'solid'} ${COLOUR[context]}` : 'none'};

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.2;
      pointer-events: none;
    `}

  ${({ size, theme }) =>
    size === 'xs' &&
    css`
      font-size: 12px;
      padding: ${theme.SPACING(1, 2)};
      height: 24px;
    `}

  ${({ size }) =>
    size === 'sm' &&
    css`
      font-size: 12px;
      padding: ${({ theme }) => theme.SPACING(2, 4)};
      height: 32px;
    `}

  ${({ size }) =>
    size === 'lg' &&
    css`
      font-size: 16px;
      padding: ${({ theme }) => theme.SPACING(4, 8)};
      height: 56px;
    `}

  /* If two buttons are next to each other */
  & + & {
    margin-top: ${({ block }) => (block ? '1rem' : 'initial')};
  }

  &:hover {
    background-color: ${({ context, theme: { COLOUR } }) => shadeLinearRgb(-0.1, COLOUR[context])};
    border-color: ${({ context, theme: { COLOUR } }) => shadeLinearRgb(-0.12, COLOUR[context])};
    color: ${({ theme: { COLOUR } }) => COLOUR.white};
  }

  transition: all 0.1s ease-in-out;

  ${props =>
    props.shadow &&
    'box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, .12), 0px 10px 24px 0px rgba(0, 0, 0, .12), 0px 10px 24px 0px rgba(0, 0, 0, .12);'}

  ${theme => DIMENSION(theme)}
  ${theme => DISPLAY(theme)}
  ${theme => SPACER(theme)}
`

const StyledContent = styled.div`
  :not(:first-child) {
    margin-left: ${({ theme }) => theme.SPACING(2)};
  }

  :not(:last-child) {
    margin-right: ${({ theme }) => theme.SPACING(2)};
  }
`

Button.propTypes = ButtonPropTypes
Button.defaultProps = ButtonDefaultProps
