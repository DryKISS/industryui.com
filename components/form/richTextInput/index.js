import { useRef } from 'react'
import { Controller } from 'react-hook-form'
import { Editor } from 'draft-js'
import styled, { css } from 'styled-components'

import { COMMON_INPUT_STYLES, ERROR_STYLE } from 'components'

export const RichTextInput = ({ control, errors, name, setValue }) => {
  const editor = useRef(null)

  return (
    <Wrapper errors={errors[name]} onClick={editor.current?.focus()}>
      <Controller
        name={name}
        control={control}
        render={({ value, onChange }) => (
          <Editor
            ref={editor}
            editorState={value}
            onChange={e => {
              // console.log(convertToRaw(e.getCurrentContent()).blocks[0].text)
              setValue(name, e)
            }}
          />
        )}
      />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  height: 3rem;
  div {
    height: 100%;
  }
  ${props => COMMON_INPUT_STYLES(props)}
  ${({ errors }) =>
    errors &&
    css`
      ${props => ERROR_STYLE(props)}
    `}
`
