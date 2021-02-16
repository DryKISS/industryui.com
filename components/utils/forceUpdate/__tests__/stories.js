/**
 * Force Update
 */

// UI
import { Button, RandomColor, useForceUpdate } from '../../../'
import Readme from '../README.md'

export default {
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Utils/forceUpdate'
}

export const ForceUpdate = () => {
  const [forceUpdate] = useForceUpdate()

  return (
    <div style={{ background: RandomColor(), padding: '2rem' }}>
      <Button onClick={() => forceUpdate()}>force update the container</Button>
    </div>
  )
}
