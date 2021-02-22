import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * Use Script
 * This hook makes it easy to dynamically load an external script and know when
 * its loaded.
 *
 * @see https://usehooks.com/
 */
// React
import { useState, useEffect } from 'react'; // // Usage
// function App () {
//   const [loaded, error] = useScript(
//     'https://pm28k14qlj.codesandbox.io/test-external-script.js'
//   )
//   return (
//     <div>
//       <div>
//         Script loaded: <b>{loaded.toString()}</b>
//       </div>
//       {loaded && !error && (
//         <div>
//           Script function call response: <b>{TEST_SCRIPT.start()}</b>
//         </div>
//       )}
//     </div>
//   )
// }
// Hook

var cachedScripts = [];
export function useScript(src) {
  // Keeping track of script loaded and error state
  var _useState = useState({
    loaded: false,
    error: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  useEffect(function () {
    // If cachedScripts array already includes src that means another instance ...
    // ... of this hook already loaded this script, so no need to load again.
    if (cachedScripts.includes(src)) {
      setState({
        loaded: true,
        error: false
      });
    } else {
      cachedScripts.push(src); // Create script

      var script = document.createElement('script');
      script.src = src;
      script.async = true; // Script event listener callbacks for load and error

      var onScriptLoad = function onScriptLoad() {
        setState({
          loaded: true,
          error: false
        });
      };

      var onScriptError = function onScriptError() {
        // Remove from cachedScripts we can try loading again
        var index = cachedScripts.indexOf(src);
        if (index >= 0) cachedScripts.splice(index, 1);
        script.remove();
        setState({
          loaded: true,
          error: true
        });
      };

      script.addEventListener('load', onScriptLoad);
      script.addEventListener('error', onScriptError); // Add script to document body

      document.body.appendChild(script); // Remove event listeners on cleanup

      return function () {
        script.removeEventListener('load', onScriptLoad);
        script.removeEventListener('error', onScriptError);
      };
    }
  }, [src] // Only re-run effect if script src changes
  );
  return [state.loaded, state.error];
}
//# sourceMappingURL=useScript.js.map