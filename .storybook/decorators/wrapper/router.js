/**
 * Router Wrapper
 */

// React
import React from 'react'

// Next
import { RouterContext } from 'next/dist/shared/lib/router-context'

const RouterWrapper = Story => {
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


export default RouterWrapper
