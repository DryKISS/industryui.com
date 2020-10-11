/**
 * Intercom
 */

// React
import { memo, useEffect } from 'react'
import { string } from 'prop-types'

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

export const IntercomAPI = (...args) => {
  if (canUseDOM && window.Intercom) {
    window.Intercom.apply(null, args)
  }
}

export const Intercom = memo(({ appID }) => {
  useEffect(() => {
    if (!appID || !canUseDOM) {
      return
    }

    if (!window.Intercom) {
      ;((w, d, id, s, x) => {
        function i () {
          i.c(arguments)
        }
        i.q = []
        i.c = args => {
          i.q.push(args)
        }
        w.Intercom = i
        s = d.createElement('script')
        s.async = 1
        s.src = 'https://widget.intercom.io/widget/' + id
        d.head.appendChild(s)
      })(window, document, appID)
    }

    window.intercomSettings = {
      app_id: appID,
      custom_launcher_selector: '#openIntercom'
    }

    if (window.Intercom) {
      window.Intercom('boot')
    }

    return () => {
      if (!canUseDOM || !window.Intercom) return false
      window.Intercom('shutdown')
      delete window.Intercom
      delete window.intercomSettings
    }
  }, [])

  return false
})

Intercom.propTypes = {
  appID: string.isRequired
}
