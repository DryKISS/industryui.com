/**
 * random key generator
 */
export var RandomKey = function RandomKey() {
  return (Math.random() * 0xffffffff << 0).toString(16);
};
//# sourceMappingURL=index.js.map