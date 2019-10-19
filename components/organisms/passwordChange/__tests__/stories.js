// UI
import { PasswordChange } from '../'
import Readme from '../README.md'

export default {
  title: 'Organisms/Password Change',
  component: PasswordChange,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => (
  <PasswordChange
    change={() => {}}
    password=''
    passwordConfirm=''
    passwordOld=''
    submit={() => {}}
  />
)

defaultStory.story = {
  name: 'Default'
}
