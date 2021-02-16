/**
 * viewPort
 */
// React
import { useLayoutEffect, useRef, useState } from 'react'

// UI
import { Text, viewPort } from '../../../'
import Readme from '../README.md'

export default {
  args: {
    WindowViewPort: false
  },
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Utils/ViewPort'
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
      <Text>
        {args.WindowViewPort ? 'window' : 'component'} Width: {Width}px
      </Text>
    </div>
  )
}
