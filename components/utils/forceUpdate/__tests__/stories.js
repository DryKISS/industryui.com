/**
 * Force Update
 */

// Storybook
import { Wrapper } from 'decorators'

import Readme from '../README.md'
import { Button, RandomColor, useForceUpdate } from 'components'

export default {
  title: 'Utils/forceUpdate',
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const ForceUpdate = () => {
  const [forceUpdate] = useForceUpdate()
  return (
    <div style={{ background: RandomColor(), padding: '2rem' }}>
      <Button onClick={() => forceUpdate()}>force update the container</Button>
    </div>
  )
}
