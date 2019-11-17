/**
 * Textarea
 */

// React
import { useEffect, useState } from 'react'
import { bool, func, number, string, oneOf } from 'prop-types'

// UI
import { Label } from '../'

// Style
import styled from 'styled-components'

export const Textarea = ({
  autoFocus,
  change,
  className,
  cols,
  dir,
  disabled,
  id,
  label,
  maxLength,
  placeholder,
  readOnly,
  required,
  rows,
  showCharsCount,
  spellCheck,
  tabIndex,
  value,
  wrap
}) => {
  const [counter, setCounter] = useState(maxLength)

  useEffect(() => {
    setCounter(value.length)
  })

  const _wordCount = e => {
    change(e)
    setCounter(e.target.value.length)
  }

  const InputItem = () => (
    <>
      <StyledTextarea
        autoFocus={autoFocus}
        aria-describedby={id}
        className={`${className} Form-control Textarea`}
        cols={cols}
        dir={dir}
        disabled={disabled}
        id={id}
        maxLength={maxLength}
        name={id}
        onChange={_wordCount}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        rows={rows}
        spellcheck={spellCheck}
        tabIndex={tabIndex}
        value={value}
        wrap={wrap}
      />

      {showCharsCount && (
        <CharCountSection>
          {counter}
          {maxLength && ` / ${maxLength}`}
        </CharCountSection>
      )}
    </>
  )

  return (
    <>
      {label ? (
        <Label text={label}>
          {InputItem()}
          <div className='Form-feedback' />
        </Label>
      ) : (
        InputItem()
      )}
    </>
  )
}

const StyledTextarea = styled.textarea`
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid ${props => props.theme.COLOUR.light};
  border-radius: 0.25rem;
  color: ${props => props.theme.COLOUR.dark};
  display: block;
  font-size: 1rem;
  line-height: 2rem;
  padding: 0.5rem;
  overflow: auto;
  width: 100%;

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

const CharCountSection = styled.p`
  float: right;
`

Textarea.propTypes = {
  autoFocus: bool,
  change: func.isRequired,
  cols: number,
  dir: oneOf(['ltr', 'rtl']),
  disabled: bool,
  id: string,
  label: string,
  maxLength: number,
  placeholder: string,
  readOnly: bool,
  required: bool,
  rows: number,
  showCharsCount: bool,
  spellCheck: bool,
  tabIndex: number,
  value: string,
  wrap: oneOf(['soft', 'hard'])
}

Textarea.defaultProps = {
  autoFocus: false,
  required: true,
  rows: 5,
  showCharsCount: false,
  value: ''
}
