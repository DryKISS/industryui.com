/**
 * Form - Field
 */

// React
import React from 'react'

// Storybook
import FormWrapper from '../../../../.storybook/decorators/wrapper/form'
import SizeControl from '../../../../.storybook/decorators/controls/size'

// Yup
import { object, string } from 'yup'

// UI
import Input from '../input'
import Label from '../../label/label'
import Readme from '../README.md'

const schema = object().shape({
  email: string().required('Please Enter a valid email').email()
})

export default {
  argTypes: {
    size: SizeControl()
  },
  component: Input,
  decorators: [FormWrapper],
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    },
    schema: schema
  },
  title: 'Form/Input'
}

// const BaseComponent = (props = {}) => {
//   const { errors, handleSubmit, register } = useForm({
//     resolver: yupResolver(schema)
//   })

//   const onSubmit = (data) => {}

//   const defaultProps = {
//     errors: errors,
//     register: register,
//     ...props
//   }

//   return (
//     <Form handleSubmit={handleSubmit(onSubmit)}>
//       <Label label="Email">
//         <Input {...defaultProps} name="email" />
//       </Label>

//       <Label label="Password">
//         <Input {...defaultProps} name="password" type="password" />
//       </Label>

//       <Button content="Submit" type="submit" />
//     </Form>
//   )
// }

// export const main = (args, { params: { register, errors } }) => {
//   console.log(register)
//   console.log(errors)

//   return (
//     <Label label="Email">
//       <Input {...args} errors={errors} register={register} name="email" />
//     </Label>
//   )
// }

export const main = (args, { params: { formState, register } }) => {
  return (
    <Label label="Email">
      <Input {...args} errors={formState.errors} name="email" register={register} />
    </Label>
  )
}
