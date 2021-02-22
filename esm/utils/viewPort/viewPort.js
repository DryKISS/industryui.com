/**
 * Components - Utils - View Port
 */
export var viewPort = function viewPort(source) {
  if (source && source.clientWidth) {
    return source.clientWidth;
  }

  if (typeof window !== 'undefined' && window.innerWidth) {
    return window.innerWidth;
  }

  return null;
};
//# sourceMappingURL=viewPort.js.map