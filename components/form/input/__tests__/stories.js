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
  Column,
  ControlTypes,
  Form,
  Input,
  Row,
  SIZE,
  useForm,
  yupResolver
} from 'components'
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
      <Row>
        <Column md={6}>
          <Input
            decoration={args.decoration}
            errors={errors}
            adornments={{
              ...(args.WithStartAdornment && { startAdornment: <>S</> }),
              ...(args.WithEndAdornment && { endAdornment: <>E</> })
            }}
            label='Label'
            message={args.messageText}
            name='NewInput'
            register={register}
            placeholder='Placeholder'
            size={args.size}
          />
        </Column>
      </Row>
    </Form>
  )
}

export const InputTemplate = InputElement.bind({})

InputTemplate.args = {
  size: 'md',
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
