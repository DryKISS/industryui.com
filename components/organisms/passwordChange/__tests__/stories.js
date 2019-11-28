/**
 * Password Change
 */

// Storybook
import { Wrapper } from 'decorators'

// UI
import { PasswordChange } from '../'
import Readme from '../README.md'

export default {
  title: 'Organisms/Password Change',
  component: PasswordChange,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <PasswordChange
    change={() => {}}
    password=''
    passwordConfirm=''
    passwordOld=''
    submit={() => {}}
  />
)
