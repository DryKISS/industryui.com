/**
 * Form - Search
 */

// Storybook
import { Wrapper } from 'decorators'

// Yup
import { object, string } from 'yup'

// UI
import {
  arrayOfValues,
  Button,
  Column,
  ControlTypes,
  Form,
  Input,
  InputTypes,
  InputDecorationTypes,
  Row,
  SIZE,
  Space,
  useForm,
  yupResolver
} from 'components'
import Readme from '../README.md'

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

  const pattern = /[\w-]+@([\w-]+\.)+[\w-]+/

  const schema = object().shape({
    email: string()
      .required('This Field Is Required')
      .matches(pattern, 'Please Enter valid Field')
  })

  const { errors, handleSubmit, register } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    console.info(data)
  }

  console.log(errors)

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Column md={6}>
          <Input
            decoration={errors?.email ? InputDecorationTypes.Error : args.decoration}
            adornments={{
              ...(args.WithStartAdornment && { startAdornment: <>S</> }),
              ...(args.WithEndAdornment && { endAdornment: <>E</> })
            }}
            label='Label'
            type={args.inputType}
            message={errors?.email?.message ? errors.email.message : args.messageText}
            name='email'
            register={register}
            placeholder='Placeholder'
            size={args.size}
          />
          <Space />
          <Button type='submit'>submit</Button>
        </Column>
      </Row>
    </Form>
  )
}

export const InputTemplate = InputElement.bind({})

InputTemplate.args = {
  size: SIZE.MD,
  inputType: InputTypes.Text,
  decoration: InputDecorationTypes.Default,
  WithStartAdornment: false,
  WithEndAdornment: false,
  messageText: ''
}

InputTemplate.argTypes = {
  size: {
    name: 'Size',
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(SIZE).filter(
        item => item === SIZE.SM || item === SIZE.MD || item === SIZE.LG
      )
    }
  },
  inputType: {
    name: 'Input Type',
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(InputTypes)
    }
  },
  decoration: {
    name: 'Decoration',
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(InputDecorationTypes)
    }
  },
  WithStartAdornment: { name: 'with Start Adornment', control: { type: ControlTypes.Boolean } },
  WithEndAdornment: { name: 'with End Adornment', control: { type: ControlTypes.Boolean } }
}
