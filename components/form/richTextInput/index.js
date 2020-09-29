import { useRef } from 'react'
import { EditorState, convertToRaw, convertFromHTML, ContentState } from 'draft-js'
import { Controller } from 'react-hook-form'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import { object, string } from 'prop-types'

import styled, { css } from 'styled-components'

import { COMMON_INPUT_STYLES, ERROR_STYLE } from 'components'
export const RichTextInput = ({ control, errors, initialValue, name }) => {
  const content = EditorState.createWithContent(
    ContentState.createFromBlockArray(convertFromHTML(initialValue ?? ''))
  )
  console.log(content)
  const editor = useRef(null)
  // const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const onEditorStateChange = (editorState, onChange) => {
    console.log(editorState)
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    onChange(editorState)
    // onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    // setEditorState(editorState)
    // setValue(name, draftToHtml(convertToRaw(editorState.getCurrentContent())))
  }
  return (
    <Wrapper errors={errors[name]} onClick={editor.current?.focus()}>
      <Controller
        name={name}
        control={control}
        defaultValue={content}
        render={({ value, onChange }) => (
          <Editor
            editorState={value}
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
  /*height: 3rem;
  div {
    height: 100%;
  }*/
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
