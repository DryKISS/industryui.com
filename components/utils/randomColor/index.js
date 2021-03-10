/**
 * random hex color generator
 */
export const RandomColor = () => '#' + ((Math.random() * 0xffffff) << 0).toString(16)
