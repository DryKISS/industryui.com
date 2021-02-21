var key = {
  fullscreenEnabled: 0,
  fullscreenElement: 1,
  requestFullscreen: 2,
  exitFullscreen: 3,
  fullscreenchange: 4,
  fullscreenerror: 5,
  fullscreen: 6
};
var webkit = ['webkitFullscreenEnabled', 'webkitFullscreenElement', 'webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitfullscreenchange', 'webkitfullscreenerror', '-webkit-full-screen'];
var moz = ['mozFullScreenEnabled', 'mozFullScreenElement', 'mozRequestFullScreen', 'mozCancelFullScreen', 'mozfullscreenchange', 'mozfullscreenerror', '-moz-full-screen'];
var ms = ['msFullscreenEnabled', 'msFullscreenElement', 'msRequestFullscreen', 'msExitFullscreen', 'MSFullscreenChange', 'MSFullscreenError', '-ms-fullscreen']; // so it doesn't throw error if no window or document is present

var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
var vendor = 'fullscreenEnabled' in document && Object.keys(key) || webkit[0] in document && webkit || moz[0] in document && moz || ms[0] in document && ms || [];
export var fullScreen = {
  requestFullscreen: function requestFullscreen(element) {
    return element[vendor[key.requestFullscreen]]();
  },
  requestFullscreenFunction: function requestFullscreenFunction(element) {
    return element[vendor[key.requestFullscreen]];
  },

  get exitFullscreen() {
    return document[vendor[key.exitFullscreen]].bind(document);
  },

  get fullscreenPseudoClass() {
    return ":".concat(vendor[key.fullscreen]);
  },

  addEventListener: function addEventListener(type, handler, options) {
    return document.addEventListener(vendor[key[type]], handler, options);
  },
  removeEventListener: function removeEventListener(type, handler, options) {
    return document.removeEventListener(vendor[key[type]], handler, options);
  },

  get fullscreenEnabled() {
    return Boolean(document[vendor[key.fullscreenEnabled]]);
  },

  set fullscreenEnabled(val) {},

  get fullscreenElement() {
    return document[vendor[key.fullscreenElement]];
  },

  set fullscreenElement(val) {},

  get onfullscreenchange() {
    return document["on".concat(vendor[key.fullscreenchange]).toLowerCase()];
  },

  set onfullscreenchange(handler) {
    return document["on".concat(vendor[key.fullscreenchange]).toLowerCase()] = handler;
  },

  get onfullscreenerror() {
    return document["on".concat(vendor[key.fullscreenerror]).toLowerCase()];
  },

  set onfullscreenerror(handler) {
    return document["on".concat(vendor[key.fullscreenerror]).toLowerCase()] = handler;
  }

};
//# sourceMappingURL=index.js.map