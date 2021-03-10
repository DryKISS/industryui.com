/**
 * Form - React Select
 */

// React
import React, { memo, useEffect, useState } from 'react'

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// UI
import {
  Button,
  Divider,
  Form,
  FormError,
  FormLabel,
  ReactSelectField,
  Text,
  usePrevious,
} from '../../../'

import Readme from '../README.md'

// Data
import { Customers, Options, UsersAvison, UsersHousing } from '../__mocks__/reactSelect'

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
    isLoading: false,
  },
  component: ReactSelectField,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  title: 'Form/ReactSelect',
}

const schema = object().shape({
  reactSelect: string().nullable().required(),
})

const BaseComponent = memo(
  (args) => {
    const { control, errors, handleSubmit } = useForm({
      resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
      console.info('data: ', data)
    }

    const defaultProps = {
      control,
      errors: errors,
      isClearable: true,
      name: 'reactSelect',
      options: Options,
      ...args,
    }

    return (
      <Form handleSubmit={handleSubmit(onSubmit)}>
        <FormLabel label="React Select">
          <ReactSelectField {...defaultProps} />
        </FormLabel>

        {errors.reactSelect && <FormError message={errors.reactSelect.message} />}
        <Divider size="sm" />

        <Button content="Submit" size="sm" type="submit" />
      </Form>
    )
  },
  (prevProps, nextProps) => {
    return true
  }
)

export const main = (args) => {
  return <BaseComponent {...args} />
}

export const withDefaultValue = (args) => {
  return <BaseComponent {...args} defaultValue={Options[0]} />
}

export const async = () => {
  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(Options.filter((o) => o.value.includes(inputValue)))
    }, 2000)
  }

  return <BaseComponent async defaultOptions name="asyncSelect" loadOptions={loadOptions} />
}

export const Chained = () => {
  const { control, errors, handleSubmit, setValue, watch } = useForm()

  // GraphQL happens before this and sets the defaults
  const watchCustomer = watch('customer', Customers[0])

  const [data, setData] = useState()

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

  const onSubmit = (data) => {
    setData(data)
  }

  const defaultProps = {
    async: true,
    cacheOptions: false,
    control,
    defaultOptions: true,
    errors: errors,
    isClearable: true,
  }

  return (
    <>
      <Text>
        Initially load the async react select with a promise. we use the defaultValue prop to load
        any options already submitted. This should be part of the original GraphQL query. It must be
        in the form {'{'} value: '2', label: 'Avison Young' {'}'}
      </Text>

      <Text>
        Customers will never lose their options, but can change or remove the default value, they
        will return the account ID to get the Users/
        <br />
        Default Customer, Click X on customer it should unload default and options
        <br />
        It does not matter if the user changes their option
      </Text>

      <Form handleSubmit={handleSubmit(onSubmit)}>
        <FormLabel label="Customers">
          <ReactSelectField
            defaultValue={Customers[0]}
            loadOptions={CustomerOptions}
            name="customer"
            {...defaultProps}
          />
        </FormLabel>

        <FormLabel label="Users">
          <ReactSelectField
            defaultValue={user}
            loadOptions={UserOptions}
            name="user"
            {...defaultProps}
          />
        </FormLabel>

        {errors.reactSelect && <FormError message={errors.reactSelect.message} />}

        {data && (
          <>
            <Text>
              Submitted and valid
              <br />
              Customer: {data.customer.value} - {data.customer.label}
              <br />
              User: {data.user.value} - {data.user.label}
            </Text>
          </>
        )}

        <Button size="sm" type="submit" />
      </Form>
    </>
  )
}

export const ChainedNoDefault = () => {
  const { control, errors, handleSubmit, setValue, watch } = useForm()

  // GraphQL happens before this and sets the defaults
  const watchCustomer = watch('customer', null)

  const [data, setData] = useState()

  const [users, setUsers] = useState(UsersAvison)
  const [user] = useState(null)

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

  const onSubmit = (data) => {
    setData(data)
  }

  const defaultProps = {
    async: true,
    cacheOptions: false,
    control,
    defaultOptions: true,
    errors: errors,
    isClearable: true,
  }

  return (
    <>
      <Text>
        Initially load the async react select with a promise. we use the defaultValue prop to load
        any options already submitted. This should be part of the original GraphQL query. It must be
        in the form {'{'} value: '2', label: 'Avison Young' {'}'}
      </Text>

      <Text>
        Customers will never lose their options, but can change or remove the default value, they
        will return the account ID to get the Users/
        <br />
        Default Customer, Click X on customer it should unload default and options
        <br />
        It does not matter if the user changes their option
      </Text>

      <Form handleSubmit={handleSubmit(onSubmit)}>
        <FormLabel label="Customers">
          <ReactSelectField
            defaultValue={null}
            loadOptions={CustomerOptions}
            name="customer"
            {...defaultProps}
          />
        </FormLabel>

        <FormLabel label="Users">
          <ReactSelectField
            defaultValue={user}
            loadOptions={UserOptions}
            name="user"
            {...defaultProps}
          />
        </FormLabel>

        {errors.reactSelect && <FormError message={errors.reactSelect.message} />}

        {data && (
          <>
            <Text>
              Submitted and valid
              <br />
              Customer: {data.customer.value} - {data.customer.label}
              <br />
              User: {data.user.value} - {data.user.label}
            </Text>
          </>
        )}

        <Button content="Submit" secondary type="submit" />
      </Form>
    </>
  )
}
