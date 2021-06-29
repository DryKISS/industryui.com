/**
 * Components - Utils - View Port
 */

// React
import React, { useLayoutEffect, useRef, useState } from 'react'

// UI
import viewPort from '../viewPort'
import Text from '../../../atoms/text/text'
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

export const Main = (args) => {
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
