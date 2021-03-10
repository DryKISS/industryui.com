/**
 * Components - Icons - Lazy Icon
 */

// React
import dynamic from 'next/dynamic'

import { oneOf } from 'prop-types'
import React, { useEffect, useState } from 'react'
import { propTypes } from './props'
import { RawIcons } from './rawIcons'

// UI

export const LazyIcon = ({ iconName, ...props }) => {
  const [LoadedIcon, setLoadedIcon] = useState(null)
  const loadModule = async () => {
    if (LoadedIcon === null) {
      const Icon = await dynamic(() => import(`./components/${iconName}`))
      setLoadedIcon(Icon)
    }
  }

  useEffect(() => {
    loadModule()
    return () => {}
  }, [])

  return LoadedIcon ? <LoadedIcon {...props} /> : <></>
}

LazyIcon.propTypes = {
  iconName: oneOf(Object.keys(RawIcons)),
  ...propTypes
}
