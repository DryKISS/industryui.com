/**
 * Draft JS
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'
import Readme from '../README.md'

// UI
import { DraftJs } from '../draftJs'
import { Button, Form, useForm } from 'components'

export default {
  title: 'Organisms/Editor',
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => {
  const onSubmit = data => console.log(data)

  const { control, handleSubmit, setValue } = useForm()
  const name = 'draftjs'

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <DraftJs control={control} name={name} setValue={setValue} />
      <Button content='Submit' type='submit' />
    </Form>
  )
}
