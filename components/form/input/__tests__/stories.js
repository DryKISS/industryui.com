/**
 * Components - Form - Input - Story
 */

// Storybook
import { ControlTypes } from '../../../../.storybook/decorators'

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// UI
import {
  arrayOfValues,
  Button,
  Column,
  Form,
  Input,
  InputTypes,
  InputDecorationTypes,
  Row,
  Space
} from '../../../'

import { THEME_SIZE } from '../../../theme/constants/size'
import Readme from '../README.md'

export default {
  component: Input,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Form/Input'
}

const InputElement = args => {
  const schema = object().shape({
    email: string()
      .required('Please Enter an email')
      .email()
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
            decoration={errors?.email ? InputDecorationTypes.DANGER : args.decoration}
            adornments={{
              ...(args.WithStartAdornment && { startAdornment: <>S</> }),
              ...(args.WithEndAdornment && { endAdornment: <>E</> })
            }}
            label='Label'
            type={args.inputType}
            message={errors?.email?.message ? errors.email.message : args.messageText}
            errors={errors}
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
  decoration: InputDecorationTypes.DEFAULT,
  inputType: InputTypes.TEXT,
  messageText: '',
  size: THEME_SIZE.MD,
  WithStartAdornment: false,
  WithEndAdornment: false
}

InputTemplate.argTypes = {
  decoration: {
    name: 'Decoration',
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(InputDecorationTypes)
    }
  },

  inputType: {
    name: 'Input Type',
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(InputTypes)
    }
  },

  messageText: {
    name: 'Message Text'
  },

  size: {
    name: 'Size',
    control: {
      type: ControlTypes.Select,
      options: [THEME_SIZE.SM, THEME_SIZE.MD, THEME_SIZE.LG]
    }
  },

  WithStartAdornment: {
    name: 'with Start Adornment',
    control: {
      type: ControlTypes.Boolean
    }
  },

  WithEndAdornment: {
    name: 'with End Adornment',
    control: {
      type: ControlTypes.Boolean
    }
  }
}
