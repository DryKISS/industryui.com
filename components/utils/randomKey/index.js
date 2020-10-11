/**
 * random key generator
 */
export const RandomKey = () => ((Math.random() * 0xffffffff) << 0).toString(16)
