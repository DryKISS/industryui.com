/**
 * Hooks - Use Component Communication - Use Subscription
 */

// React
import { useEffect } from 'react'
import { array, func, instanceOf, string } from 'prop-types'

// RXJS
import { Subject } from 'rxjs'

const useComponentCommunication = ({ dependencies, id, messageName, onRecieve, subscriber }) => {
  useEffect(() => {
    const Subscription = subscriber.subscribe((message) => {
      if (message.name === messageName && (!id || id === message.id)) {
        onRecieve(message.payload)
      }
    })

    return () => {
      Subscription.unsubscribe()
    }
  }, dependencies ?? [])
}

useComponentCommunication.propTypes = {
  dependencies: array,
  id: string,
  messageName: string.isRequired,
  onRecieve: func.isRequired,
  subscriber: instanceOf(Subject).isRequired
}

export default useComponentCommunication
