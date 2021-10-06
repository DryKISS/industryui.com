/**
 * Components - Form - Radio - Story
 */

// React
import React from 'react'

// Storybook
import FormWrapper from '../../../../.storybook/decorators/wrapper/form'

// Yup
import { object, string } from 'yup'

// UI
import Fieldset from '../../feildset/fieldset'
import Legend from '../../legend/legend'
import Radio from '../radio'
import Readme from '../README.md'

const schema = object().shape({
  decission: string().required()
})

export default {
  component: Radio,
  decorators: [FormWrapper],
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    },
    schema: schema
  },
  title: 'Form/Radio'
}

export const Main = (args, { params: { formState, register } }) => {
  return (
    <>
      <Fieldset>
        <Legend>Legend</Legend>
        <Radio
          {...args}
          errors={formState.errors}
          label="Yes"
          name="decission"
          register={register}
          value="yes"
        />

        <Radio
          {...args}
          errors={formState.errors}
          label="No"
          name="decission"
          register={register}
          value="no"
        />
      </Fieldset>
    </>
  )
}
