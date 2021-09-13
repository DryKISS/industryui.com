/**
 * Form - Dropzone - Controller
 */

// React
import React from 'react'
import { bool, object, string } from 'prop-types'

// React Hook Form
import { Controller } from 'react-hook-form'

// UI
import Dropzone from './react-dropzone/dropzone'

const DropzoneController = ({ control, name, ...props }) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field: { onChange } }) => {
        return (
          <>
            {console.log(onChange)}
            <Dropzone onChange={(e) => onChange(e.target.files[0])} {...props} />
          </>
        )
      }}
      // {...props}
    />
  )
}

// https://github.com/react-hook-form/react-hook-form/discussions/2146
// https://dev.to/vibhanshu909/how-to-use-react-dropzone-with-react-hook-form-1omc

// have you tried with custom register? useEffect(() => register('input') }) and use setValue to
// set the input value. –

// const Dropzone = ({ onChange, ...rest }: { onChange: (...event: any[]) => void }) => {
//   const onDrop = useCallback((acceptedFiles) => {
//     // Do something with the files
//     console.log({ acceptedFiles });
//   }, []);
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
//   return (
//     <div {...getRootProps()}>
//       <input {...getInputProps({ onChange })} />
//       {isDragActive ? (
//         <p>Drop the files here ...</p>
//       ) : (
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       )}
//     </div>
//   );
// };

DropzoneController.propTypes = {
  accept: string,
  control: object,
  disabled: bool,
  errors: object,
  multiple: bool,
  name: string
}

DropzoneController.defaultProps = {
  accept: 'image/*',
  disabled: false,
  multiple: false,
  name: 'dropzone'
}

export default DropzoneController
