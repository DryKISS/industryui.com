/**
 * Form - Search
 */

// React
import React from 'react'

// Storybook
import FormWrapper from '../../../../.storybook/decorators/wrapper/form'

// Yup
import { object, string } from 'yup'

// UI
import Error from '../../error/error'
import Search from '../../search/search'
import Readme from '../README.md'

const schema = object().shape({
  query: string().required()
})

export default {
  args: {
    appendSearchButton: true,
    appendSearchIcon: false,
    label: 'Go',
    placeholder: 'Search...',
    prependSearchIcon: true,
    type: 'search'
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['search', 'text']
      }
    }
  },

  component: Search,
  decorators: [FormWrapper],
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    },
    schema: schema
  },
  title: 'Form/Search'
}

export const Main = (args, { params: { formState, register } }) => {
  return (
    <>
      <Search {...args} errors={formState.errors} register={register} />
      <Error message={formState.errors.query?.message || ''} />
    </>
  )
}
