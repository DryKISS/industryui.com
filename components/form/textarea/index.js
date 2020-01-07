/**
 * Textarea
 */

// React
import { bool, number, string, oneOf } from 'prop-types'

// UI
import { FieldHOC } from '../'

// Style
import styled, { css } from 'styled-components'

export const TextareaField = ({
  autoFocus,
  className,
  cols,
  dir,
  disabled,
  maxLength,
  placeholder,
  readOnly,
  rows,
  spellCheck,
  tabIndex,
  wrap,
  ...props
}) => {
  return (
    <FieldHOC
      component={StyledTextarea}
      autoFocus={autoFocus}
      className={`${className} Form-control Textarea`}
      cols={cols}
      dir={dir}
      disabled={disabled}
      maxLength={maxLength}
      placeholder={placeholder}
      readOnly={readOnly}
      rows={rows}
      spellcheck={spellCheck}
      tabIndex={tabIndex}
      wrap={wrap}
      {...props}
    />
  )
}

const StyledTextarea = styled.textarea`
  background-clip: padding-box;
  background-color: ${({ disabled }) => (disabled ? '#e9ecef' : '#fff')};
  border: 1px solid ${props => props.theme.COLOUR.light};
  border-radius: 0.25rem;
  color: ${props => props.theme.COLOUR.dark};
  cursor: ${({ disabled }) => (disabled ? 'no-drop' : 'auto')};
  direction: ${({ dir }) => dir};
  display: block;
  font-size: 1rem;
  line-height: 2rem;
  padding: 0.5rem;
  overflow: auto;
  width: 100%;
  ${({ disabled }) =>
    disabled &&
    css`
      -webkit-user-select: none; /* Safari 3.1+ */
      -moz-user-select: none; /* Firefox 2+ */
      -ms-user-select: none; /* IE 10+ */
      user-select: none; /* Standard syntax */
    `}

  &:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline: 0;
  }

  ::-webkit-input-placeholder {
    color: #c0c0c0;
  }
  :-ms-input-placeholder {
    color: #c0c0c0;
  }
  :-moz-placeholder {
    color: #c0c0c0;
    opacity: 1;
  }
`

TextareaField.propTypes = {
  autoFocus: bool,
  cols: number,
  dir: oneOf(['ltr', 'rtl']),
  disabled: bool,
  maxLength: number,
  placeholder: string,
  readOnly: bool,
  rows: number,
  spellCheck: bool,
  tabIndex: number,
  wrap: oneOf(['soft', 'hard'])
}

TextareaField.defaultProps = {
  autoFocus: false,
  dir: 'ltr',
  rows: 5
}
