/**
 * viewPort
 */
// React
import { useLayoutEffect, useRef, useState } from 'react'

import Readme from '../README.md'
import { Text, viewPort } from 'components'

// Storybook
import { Wrapper } from 'decorators'

export default {
  args: {
    WindowViewPort: false
  },
  title: 'Utils/ViewPort',
  decorators: [Wrapper],
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const ViewPort = args => {
  const ref = useRef(null)
  const [Width, setWidth] = useState(0)
  useLayoutEffect(() => {
    setWidth(viewPort(args.WindowViewPort ? null : ref.current))
    return () => {}
  }, [])

  return (
    <div ref={ref}>
      <Text>viewport Width: {Width}px</Text>
    </div>
  )
}
