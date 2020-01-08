/**
 * Input Group Addon
 * Allows the element to be positioned
 */

// React
import { any, bool, node, oneOf } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

export const InputGroupAddon = ({ addonType, className, children, text }) => {
  return (
    <StyledInputGroupAddon
      addonType={addonType}
      className={addonType}
      children={children}
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
      background-color: #e9ecef;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      color: #495057;
      display: flex;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      margin-bottom: 0;
      padding: 0.375rem 0.75rem;
      text-align: center;
      white-space: nowrap;
    `}



  ${({ addonType }) =>
    addonType === 'prepend' &&
    css`
      &,
      button {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        margin-right: -1px;
      }
    `}

  ${({ addonType }) =>
    addonType === 'append' &&
    css`
      &,
      button {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        margin-left: -1px;
      }
    `}
`

InputGroupAddon.propTypes = {
  addonType: oneOf(['prepend', 'append']),
  className: any,
  children: node,
  text: bool
}

InputGroupAddon.defaultProps = {
  addonType: 'append'
}
