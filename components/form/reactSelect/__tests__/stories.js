/**
 * Form - React Select
 */

// React
import React, { useEffect, useState } from 'react'

// Storybook
import FormWrapperControl from '../../../../.storybook/decorators/wrapper/formControl'

// Yup
import { object, string } from 'yup'

// UI
import Error from '../../error/error'
import Label from '../../label/label'
import ReactSelect from '../reactSelect'
import Text from '../../../atoms/text/text'
import usePrevious from '../../../hooks/usePrevious'
import Readme from '../README.md'

// Data
import { UsersAvison, UsersHousing } from '../__mocks__/users'
import Customers from '../__mocks__/customers'
import Options from '../__mocks__/options'

const schema = object().shape({
  reactSelect: string().nullable().required(),
  user: string().nullable().required(),
  customer: string().nullable().required()
})

export default {
  args: {
    'aria-label': '',
    'aria-labelledby': '',
    async: false,
    autoFocus: false,
    backspaceRemovesValue: true,
    blurInputOnSelect: true,
    captureMenuScroll: true,
    cacheOptions: true,
    className: '',
    classNamePrefix: '',
    closeMenuOnSelect: true,
    closeMenuOnScroll: false,
    components: {},
    controlShouldRenderValue: true,
    defaultOptions: {},
    delimiter: '',
    escapeClearsValue: false,
    filterOption: null,
    formatGroupLabel: null,
    formatOptionLabel: null,
    isMulti: false,
    isLoading: false
  },
  component: ReactSelect,
  decorators: [FormWrapperControl],
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    },
    schema: schema
  },
  title: 'Form/ReactSelect'
}

export const Main = (args, { params: { control, formState } }) => {
  return (
    <Label label="React Select">
      <ReactSelect
        {...args}
        control={control}
        errors={formState.errors}
        isClearable={true}
        name="reactSelect"
        options={Options}
      />
    </Label>
  )
}

export const Async = (args, { params: { control, formState } }) => {
  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(Options.filter((o) => o.value.includes(inputValue)))
    }, 2000)
  }

  return (
    <Label label="React Select">
      <ReactSelect
        {...args}
        async
        control={control}
        defaultOptions
        errors={formState.errors}
        isClearable={true}
        loadOptions={loadOptions}
        name="reactSelect"
      />
    </Label>
  )
}

export const Chained = (args, { params: { control, formState, setValue, watch } }) => {
  const watchCustomer = watch('customer', Customers[0])

  const [users, setUsers] = useState(UsersAvison)
  const [user] = useState(UsersAvison[0])

  const prevCustomer = usePrevious(watchCustomer)

  const CustomerOptions = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(Customers)
      }, 1000)
    })

  const UserOptions = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(users)
      }, 2000)
    })

  useEffect(() => {
    if (watchCustomer !== prevCustomer) {
      if (watchCustomer === null) {
        setUsers(null)
      } else if (watchCustomer.value === '2') {
        setUsers(UsersAvison)
      } else {
        setUsers(UsersHousing)
      }

      setValue('user', null)
    }
  }, [watchCustomer])

  return (
    <>
      <Text>
        Load the async react select with a promise. we use the defaultValue prop to load any options
        already submitted. This should be part of the original GraphQL query. It must be in the form
        {'{'} value: '2', label: 'Avison Young' {'}'}
      </Text>

      <Text>
        Customers will never lose their options, but can change or remove the default value, they
        will return the account ID to get the Users/
        <br />
        Default Customer, Click X on customer it should unload default and options
        <br />
        It does not matter if the user changes their option
      </Text>

      <Label label="Customers">
        <ReactSelect
          async
          cacheOptions={false}
          control={control}
          defaultOptions
          defaultValue={Customers[0]}
          errors={formState.errors}
          isClearable={true}
          loadOptions={CustomerOptions}
          name="customer"
        />
      </Label>

      <Label label="React Select">
        <ReactSelect
          {...args}
          async
          cacheOptions={false}
          control={control}
          defaultOptions
          defaultValue={user}
          errors={formState.errors}
          isClearable={true}
          loadOptions={UserOptions}
          name="user"
        />
      </Label>

      {formState.errors.reactSelect && <Error message={formState.errors.reactSelect.message} />}
    </>
  )
}
