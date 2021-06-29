/**
 * random hex color generator
 */

const RandomColor = () => '#' + ((Math.random() * 0xffffff) << 0).toString(16)

export default RandomColor
