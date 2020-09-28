import { Controller } from 'react-hook-form'
import { Editor } from 'draft-js'

export const RichTextInput = ({ control, name, setValue }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ value, onChange }) => (
        <Editor
          editorState={value}
          onChange={e => {
            // console.log(convertToRaw(e.getCurrentContent()).blocks[0].text)
            setValue(name, e)
          }}
        />
      )}
    />
  )
}
