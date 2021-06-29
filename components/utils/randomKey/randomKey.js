/**
 * random key generator
 */

const RandomKey = () => ((Math.random() * 0xffffffff) << 0).toString(16)

export default RandomKey
