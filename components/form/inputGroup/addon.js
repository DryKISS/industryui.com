/**
 * Input Group Addon
 * Allows the element to be positioned
 */

// React
import { any, bool, node, oneOf } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// Context
import { CONTEXT } from '../../'

export const InputGroupAddon = ({ addonType, className, children, context, error, text }) => {
  return (
    <StyledInputGroupAddon
      addonType={addonType}
      className={addonType}
      children={children}
      context={context}
      error={error}
      text={text}
    />
  )
}

const StyledInputGroupAddon = styled.div`
  align-items: center;
  display: flex;

  & > * {
    height: 100%;
  }

  ${({ text }) =>
    text &&
    css`
      background-color: ${({ theme, error }) => (error ? theme.COLOUR.error : theme.COLOUR.grey)};
      border: 1px solid ${({ theme, error }) => (error ? theme.COLOUR.error : theme.COLOUR.dark)};
      border-radius: 0.25rem;
      color: ${({ theme, error }) => (error ? theme.COLOUR.light : theme.COLOUR.dark)};
      display: flex;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1;
      margin-bottom: 0;
      padding: 0.375rem 0.75rem;
      text-align: center;
      white-space: nowrap;
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
  context: oneOf(Object.values(CONTEXT)),
  text: bool
}

InputGroupAddon.defaultProps = {
  addonType: 'append',
  context: 'light'
}
