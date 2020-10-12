// React
import { useLayoutEffect, useRef } from 'react'
import { object, string } from 'prop-types'

import { ContentState, convertFromHTML, convertToRaw, EditorState } from 'draft-js'
import { Controller } from 'react-hook-form'
import draftToHtml from 'draftjs-to-html'

// UI
import styled, { css } from 'styled-components'
import { COMMON_INPUT_STYLES, ERROR_STYLE, useForceUpdate } from 'components'

let LazyEditor = () => <></>

export const RichTextInput = ({ control, errors, initialValue, name }) => {
  const editor = useRef(null)
  const [forceUpdate] = useForceUpdate()

  useLayoutEffect(() => {
    LazyEditor = require('react-draft-wysiwyg').Editor
    forceUpdate()
  }, [])

  const content = EditorState.createWithContent(
    ContentState.createFromBlockArray(convertFromHTML(initialValue ?? ''))
  )

  const defaultValue = {
    editorState: content,
    html: initialValue ?? ''
  }

  const onEditorStateChange = (editorState, onChange) => {
    const html = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    onChange({ editorState, html })
  }

  return (
    <Wrapper errors={errors[name]} onClick={editor.current?.focus()}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ value, onChange }) => (
          <LazyEditor
            editorState={value.editorState}
            wrapperClassName='wrapper-class'
            editorClassName='editor-class'
            onEditorStateChange={e => onEditorStateChange(e, onChange)}
          />
        )}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${props => COMMON_INPUT_STYLES(props)}
  ${({ errors }) =>
    errors &&
    css`
      ${props => ERROR_STYLE(props)}
    `}
`

RichTextInput.propTypes = {
  control: object.isRequired,
  errors: object.isRequired,
  name: string.isRequired,
  initialValue: string
}
