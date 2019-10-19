// UI
import { InputTags } from '../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Form/InputTags',
  component: InputTags,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => (
  <>
    (not implemented yet)
    <InputTags change={() => {}} />
  </>
)

defaultStory.story = {
  name: 'Default'
}
