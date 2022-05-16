/**
 * Components - Form - Input Group - Addon
 */

// React
import React from 'react'
import { any, bool, node, oneOf } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import THEME_CONTEXT from '../../constants/context'
import THEME_SIZE from '../../constants/size'

const InputGroupAddon = ({ addonType, className, children, context, error, size, text, theme }) => {
  return (
    <StyledInputGroupAddon
      addonType={addonType}
      className={addonType}
      children={children}
      context={context}
      error={error}
      size={size}
      text={text}
      theme={theme}
    />
  )
}

const StyledInputGroupAddon = styled.div`
  align-items: center;
  display: flex;

  & > * {
    height: 100%;
  }

  ${({ theme: { COLOUR, FORM_ELEMENTS_STYLES }, error, text }) =>
    text &&
    css`
      background-color: ${error ? COLOUR.danger : COLOUR.light};
      border: 1px solid ${error ? COLOUR.danger : COLOUR.light};
      border-radius: ${FORM_ELEMENTS_STYLES.inputBorderRadius};
      color: ${error ? COLOUR.light : COLOUR.dark};
      display: flex;
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1;
      margin-bottom: 0;
      padding: 0.375rem 1rem;
      text-align: center;
      transition: background-color 0.15s linear;
      white-space: nowrap;
    `}

  ${({ size }) =>
    size === THEME_SIZE.SM &&
    css`
      font-size: 0.625rem;
      padding: 0 0.75rem;
    `}

  &,
  button {
    ${({ addonType }) =>
      addonType === 'prepend' &&
      css`
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        margin-right: -1px;
      `}

    ${({ addonType }) =>
      addonType === 'append' &&
      css`
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        margin-left: -1px;
      `}
  }
`

InputGroupAddon.propTypes = {
  addonType: oneOf(['prepend', 'append']),
  className: any,
  children: node,
  context: oneOf(Object.values(THEME_CONTEXT)),
  text: bool
}

InputGroupAddon.defaultProps = {
  addonType: 'append',
  context: 'light'
}

export default InputGroupAddon
