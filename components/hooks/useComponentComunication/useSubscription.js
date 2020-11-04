/**
 * Hooks - Use Component Communication - Use Subscription
 */

// React
import { useEffect } from 'react'
import { array, func, instanceOf, string } from 'prop-types'

// RXJS
import { Subject } from 'rxjs'

export const useComponentComunication = ({
  dependencies,
  id,
  messageName,
  onRecieve,
  subscriber
}) => {
  useEffect(() => {
    const Subscription = subscriber.subscribe(message => {
      if (message.name === messageName && (!id || id === message.id)) {
        onRecieve(message.payload)
      }
    })
    return () => {
      Subscription.unsubscribe()
    }
  }, dependencies ?? [])
}

useComponentComunication.propTypes = {
  dependencies: array,
  id: string,
  messageName: string.isRequired,
  onRecieve: func.isRequired,
  subscriber: instanceOf(Subject).isRequired
}
