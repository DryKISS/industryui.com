/**
 * Components - Icons - Lazy Icon
 */

// React
import React, { useEffect, useState } from 'react'

// Next
import dynamic from 'next/dynamic'

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

export default LazyIcon
