/**
 * Router
 */

// React
import React from 'react'

// Next
import { RouterContext } from 'next/dist/next-server/lib/router-context'

const RouterWrap = Story => {
  return (
    <RouterContext.Provider
      value={{
        push: () => Promise.resolve(),
        replace: () => Promise.resolve(),
        prefetch: () => Promise.resolve()
      }}
    >
      <Story />
    </RouterContext.Provider>
  )
}


export default RouterWrap
