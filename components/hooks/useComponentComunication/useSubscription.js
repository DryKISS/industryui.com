import { useEffect } from 'react'
import { array, func, instanceOf, string } from 'prop-types'
import { Subject } from 'rxjs'

const useComponentComunication = props => {
  const { onRecieve, dependencies, id, messageName, subscriber } = props

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
export default useComponentComunication

useComponentComunication.propTypes = {
  onRecieve: func.isRequired,
  dependencies: array,
  id: string,
  messageName: string.isRequired,
  subscriber: instanceOf(Subject).isRequired
}
