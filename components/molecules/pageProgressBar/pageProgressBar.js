/**
 * Molecules - Page Progress Bar
 */

// React
import React, { useEffect, useState } from 'react'
import { bool, object, oneOf, string } from 'prop-types'

// React NProgress
import { NProgress } from '@tanem/react-nprogress'

// UI
import Container from './container'
import Bar from './bar'
import THEME_CONTEXT from '../../constants/context'

const PageProgressBar = ({ context, isAnimating, instanceKey, router }) => {
  const [isRouteChanging, setIsRouteChanging] = useState(false)
  const [loadingKey, setLoadingKey] = useState(null)

  const routeChangeStartHandler = () => {
    setIsRouteChanging(true)
    setLoadingKey(new Date().getTime())
  }

  const routeChangeEndHandler = () => {
    setIsRouteChanging(false)
  }

  useEffect(() => {
    if (router) {
      router.events.on('routeChangeStart', routeChangeStartHandler)
      router.events.on('routeChangeComplete', routeChangeEndHandler)
      router.events.on('routeChangeError', routeChangeEndHandler)
    }
  }, [])

  return (
    <NProgress isAnimating={isRouteChanging || isAnimating} key={loadingKey || instanceKey}>
      {({ animationDuration, isFinished, progress }) => (
        <Container animationDuration={animationDuration} isFinished={isFinished}>
          <Bar animationDuration={animationDuration} context={context} progress={progress} />
        </Container>
      )}
    </NProgress>
  )
}

PageProgressBar.propTypes = {
  context: oneOf(Object.values(THEME_CONTEXT)),
  isAnimating: bool,
  instanceKey: string,
  router: object
}

PageProgressBar.defaultProps = {
  context: 'info',
  isAnimating: false,
  instanceKey: null
}

export default PageProgressBar
