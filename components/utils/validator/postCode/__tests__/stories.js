/**
 * Components - Utils - Validator - Post Code
 */

// React
import React from 'react'

// Storybook
import FormWrapper from '../../../../../.storybook/decorators/wrapper/form'

// Yup
import { object, string } from 'yup'

// UI
import postCodeValidate from '../validate'
import postCodeString from '../string'
import Text from '../../../../atoms/text/text'
import Input from '../../../../form/input/input'
import Label from '../../../../form/label/label'
import Readme from '../README.md'

const schema = object().shape({
  postCode: string()
    .min(3)
    .matches(postCodeString, {
      excludeEmptyStrings: true
    })
    .required()
})

export default {
  component: postCodeValidate,
  decorators: [FormWrapper],
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    },
    schema: schema
  },
  title: 'Utils/Validator/PostCode'
}

export const Main = (args, { params: { formState, register } }) => {
  return (
    <>
      <Text>A valid UK postcode will look something like `SW192EZ`</Text>

      <Label label="Post code">
        <Input errors={formState.errors} name="postCode" register={register} />
      </Label>
    </>
  )
}
