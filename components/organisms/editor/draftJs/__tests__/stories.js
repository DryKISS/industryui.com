/**
 * Draft JS
 */

// React
import React from 'react'

// DraftJS
import { DraftJs } from '../draftJs'

// React Hook Form
import { useForm } from 'react-hook-form'

// UI
import Button from '../../../../atoms/button/button/button'
import Form from '../../../../form/form/form'
import Readme from '../README.md'

export default {
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Editor'
}

export const Main = () => {
  const onSubmit = (data) => {
    console.info(data)
  }

  const { control, handleSubmit, setValue } = useForm()
  const name = 'draftjs'

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <DraftJs control={control} name={name} setValue={setValue} />
      <Button content="Submit" type="submit" />
    </Form>
  )
}
