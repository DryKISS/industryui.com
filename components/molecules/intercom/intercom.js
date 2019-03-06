/**
 * Intercom
 */

// React
import React, { useEffect } from 'react'
import { string } from 'prop-types'

const canUseDOM = !!(
  (typeof window !== 'undefined' &&
  window.document && window.document.createElement)
)

export const IntercomAPI = (...args) => {
  if (canUseDOM && window.Intercom) {
    window.Intercom.apply(null, args)
  }
}

export const Intercom = React.memo(({ appID }) => {
  useEffect(() => {
    if (!appID || !canUseDOM) {
      return
    }

    if (!window.Intercom) {
      ((w, d, id, s, x) => {
        function i () {
          i.c(arguments)
        }
        i.q = []
        i.c = (args) => {
          i.q.push(args)
        }
        w.Intercom = i
        s = d.createElement('script')
        s.async = 1
        s.src = 'https://widget.intercom.io/widget/' + id
        d.head.appendChild(s)
      })(window, document, appID)
    }

    window.intercomSettings = { app_id: appID }

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

//   componentWillReceiveProps(nextProps) {
//     const {
//       appID,
//       ...otherProps,
//     } = nextProps;

//     if (!canUseDOM) return;

//     window.intercomSettings = { ...otherProps, app_id: appID };

//     if (window.Intercom) {
//       if (this.loggedIn(this.props) && !this.loggedIn(nextProps)) {
//         // Shutdown and boot each time the user logs out to clear conversations
//         window.Intercom('shutdown');
//         window.Intercom('boot', otherProps);
//       } else {
//         window.Intercom('update', otherProps);
//       }
//     }
//   }

//   loggedIn(props) {
//     return props.email || props.user_id;
//   }
