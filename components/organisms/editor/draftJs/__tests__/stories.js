/**
 * Draft JS
 */

// DraftJS
import { DraftJs } from '../draftJs'

// UI
import { Button, Form, useForm } from 'components'
import Readme from '../README.md'

export default {
  title: 'Organisms/Editor',
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
