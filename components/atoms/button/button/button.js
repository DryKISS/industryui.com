/**
 * Components - Atoms - Button
 */

// React
import React, { forwardRef } from 'react'

// Style
import styled, { css, useTheme } from 'styled-components'

// UI
import { Icon } from '../../../atoms/icon/icon/icon'
import { shadeLinearRgb } from '../../../utils/colour/colour'
import { SPACER } from '../../../theme/utils/spacer'
import { themeBackground } from '../../../theme/utils/background'
import { themeDimension } from '../../../theme/utils/dimension'
import { themeDisplay } from '../../../theme/utils/display'
import ButtonItemCount from './itemCount'

// Props
import { propTypes, defaultProps } from './props'

export const Button = forwardRef(
  (
    {
      block,
      centre,
      children,
      className,
      content,
      context,
      dashed,
      disabled,
      endIcon,
      endIconProps,
      form,
      itemCount,
      onClick,
      noPadding,
      outline,
      shadow,
      startIcon,
      startIconProps,
      size,
      style,
      type
    },
    ref
  ) => {
    const theme = useTheme()
    const textContext = getTextContext(context, outline, theme)
    const text = children || content

    return (
      <StyledButton
        block={block}
        centre={centre}
        className={className}
        context={context}
        dashed={dashed}
        disabled={disabled}
        form={form}
        noPadding={noPadding}
        onClick={onClick}
        outline={outline}
        ref={ref}
        role="button"
        shadow={shadow}
        size={size}
        style={style}
        textContext={textContext}
      >
        {startIcon && <Icon icon={startIcon} {...startIconProps} prefix={startIconProps?.prefix} />}

        {text && <StyledContent>{text}</StyledContent>}

        {endIcon && <Icon icon={endIcon} {...endIconProps} prefix={endIconProps?.prefix} />}
        {itemCount && <ButtonItemCount children={itemCount} context={context} />}
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
  ${(props) => themeBackground(props)}
  align-items: center;
  border: ${({ context, dashed, outline, theme: { COLOUR } }) =>
    outline ? `1px ${dashed ? 'dashed' : 'solid'} ${COLOUR[context]}` : 'none'};
  border-radius: 0.25rem;
  box-sizing: border-box;
  color: ${({ textContext, theme: { COLOUR } }) => COLOUR[textContext]};
  cursor: pointer;
  display: ${({ block, centre }) => (centre || block ? 'flex' : 'inline-flex')};
  font-size: 1rem;
  height: 2.5rem;
  justify-content: center;
  line-height: 100%;
  outline: none;
  overflow: visible;
  padding: ${({ theme }) => theme.SPACING(4, 4)};
  position: relative;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  margin: ${({ centre }) => (centre ? 'auto' : 0)};
  width: ${({ block }) => (block ? '100%' : 'initial')};

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
      font-size: 0.75rem;
      padding: ${theme.SPACING(2, 2)};
      height: 1.5rem;
    `}

  ${({ size }) =>
    size === 'sm' &&
    css`
      font-size: 0.75rem;
      padding: ${({ theme }) => theme.SPACING(3, 3)};
      height: 2rem;
    `}

  ${({ size }) =>
    size === 'lg' &&
    css`
      font-size: 1rem;
      padding: ${({ theme }) => theme.SPACING(5, 5)};
      height: 3rem;
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

  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.12), 0px 10px 24px 0px rgba(0, 0, 0, 0.12),
        0px 10px 24px 0px rgba(0, 0, 0, 0.12);
    `}

  ${(theme) => themeDimension(theme)}
  ${(theme) => themeDisplay(theme)}
  ${(theme) => SPACER(theme)}

   ${({ theme, noPadding }) =>
    noPadding &&
    css`
      padding: 0;
    `}
`

const StyledContent = styled.div`
  :not(:first-child) {
    margin-left: ${({ theme }) => theme.SPACING(2)};
  }

  :not(:last-child) {
    margin-right: ${({ theme }) => theme.SPACING(2)};
  }
`

Button.propTypes = propTypes
Button.defaultProps = defaultProps
