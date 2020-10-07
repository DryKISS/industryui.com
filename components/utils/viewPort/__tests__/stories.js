/**
 * viewPort
 */
// React
import { useLayoutEffect, useRef, useState } from 'react'

import Readme from '../README.md'
import { Text, viewPort } from 'components'

export default {
  args: {
    WindowViewPort: false
  },
  title: 'Utils/ViewPort',
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
      <Text>
        {args.WindowViewPort ? 'window' : 'component'} Width: {Width}px
      </Text>
    </div>
  )
}
