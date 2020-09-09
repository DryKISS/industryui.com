/**
 * Form - Search
 */

// Storybook
import { Wrapper } from 'decorators'

// Yup
import { object, string } from 'yup'

// UI
import { arrayOfValues, ControlTypes, Form, Input, SIZE, useForm, yupResolver } from 'components'
import Readme from '../README.md'
import { InputDecorationTypes } from 'index'

export default {
  title: 'Form/Input',
  component: Input,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const InputElement = args => {
  console.log(args)
  const schema = object().shape({
    NewInput: string().required()
  })

  const { errors, handleSubmit, register } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    console.info(data)
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <Input
        name='NewInput'
        label='Label'
        placeholder='Placeholder'
        size={args.size}
        decoration={args.decoration}
        register={register}
        errors={errors}
      />
    </Form>
  )
}

export const InputTemplate = InputElement.bind({})

InputTemplate.args = {
  size: 'md',
  decoration: InputDecorationTypes.Default
}
InputTemplate.argTypes = {
  size: { name: 'Size', control: { type: ControlTypes.Select, options: arrayOfValues(SIZE) } },
  decoration: {
    name: 'Decoration',
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(InputDecorationTypes)
    }
  }
}
