/**
 * Draft JS
 */

// React
import React from 'react'
import { useForm } from 'react-hook-form'

// Storybook
import { Wrapper } from 'decorators'
import Readme from '../README.md'

// UI
import { DraftJs } from '../draftJs'
import { Button } from 'components'

export default {
  title: 'Organisms/Editor',
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const onSubmit = data => console.log(data)

export const main = () => {
  const { control, handleSubmit, setValue } = useForm()
  const name = 'draftjs'

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DraftJs control={control} name={name} setValue={setValue} />
      <Button content='Submit' type='submit' />
    </form>
  )
}
