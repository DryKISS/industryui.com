/**
 * useTheme
 */
// React
import { useLayoutEffect } from 'react'; // Hook

export function useTheme(theme) {
  useLayoutEffect(function () {
    // Iterate through each value in theme object
    for (var key in theme) {
      // Update css variables in document's root element
      document.documentElement.style.setProperty("--".concat(key), theme[key]);
    }
  }, [theme] // Only call again if theme object reference changes
  );
}
//# sourceMappingURL=useTheme.js.map