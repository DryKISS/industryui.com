/**
 * Hooks - useRenderCount
 */
// React
import { useRef } from 'react';
export var useRenderCount = function useRenderCount(componentName) {
  var renderCounter = useRef(1);
  console.info((componentName !== null && componentName !== void 0 ? componentName : 'Name Not Defined') + ' rendered: ' + renderCounter.current++, renderCounter.current === 2 ? 'time' : 'times');
};
//# sourceMappingURL=index.js.map