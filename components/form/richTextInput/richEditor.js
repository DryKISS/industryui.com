/**
 * Components - Form - Rich Editor
 */

// React
import React, { useRef } from 'react'
import { object, string } from 'prop-types'

// Draft JS
import { ContentState, convertFromHTML, convertToRaw, EditorState } from 'draft-js'
import { Controller } from 'react-hook-form'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'

// Style
import styled, { css } from 'styled-components'

// UI
import formErrorStyle from '../variables/formErrorStyle'
import formStyle from '../variables/formStyle'

const RichTextInput = ({ control, errors, initialValue, name }) => {
  const editor = useRef(null)
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
          <Editor
            editorState={value.editorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            onEditorStateChange={(e) => onEditorStateChange(e, onChange)}
          />
        )}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${(props) => formStyle(props)}
  ${({ errors }) =>
    errors &&
    css`
      ${(props) => formErrorStyle(props)}
    `}
`

RichTextInput.propTypes = {
  control: object.isRequired,
  errors: object.isRequired,
  name: string.isRequired,
  initialValue: string
}

export default RichTextInput
