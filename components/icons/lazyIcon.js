/**
 * Components - Icons - Lazy Icon
 */

// React
import React, { useEffect, useState } from 'react'
import { oneOf } from 'prop-types'

// Next
import dynamic from 'next/dynamic'

// UI
import { propTypes } from './props'
import { RawIcons } from './rawIcons'

const LazyIcon = ({ iconName, ...props }) => {
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

export default LazyIcon
