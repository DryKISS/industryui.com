/**
 * Hooks - Use Component Communication - Use Subscription
 */
// React
import { useEffect } from 'react';
import { array, func, instanceOf, string } from 'prop-types'; // RXJS

import { Subject } from 'rxjs';
export var useComponentCommunication = function useComponentCommunication(_ref) {
  var dependencies = _ref.dependencies,
      id = _ref.id,
      messageName = _ref.messageName,
      onRecieve = _ref.onRecieve,
      subscriber = _ref.subscriber;
  useEffect(function () {
    var Subscription = subscriber.subscribe(function (message) {
      if (message.name === messageName && (!id || id === message.id)) {
        onRecieve(message.payload);
      }
    });
    return function () {
      Subscription.unsubscribe();
    };
  }, dependencies !== null && dependencies !== void 0 ? dependencies : []);
};
useComponentCommunication.propTypes = {
  dependencies: array,
  id: string,
  messageName: string.isRequired,
  onRecieve: func.isRequired,
  subscriber: instanceOf(Subject).isRequired
};
//# sourceMappingURL=useSubscription.js.map