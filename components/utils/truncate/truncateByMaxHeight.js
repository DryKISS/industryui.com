/**
 * Truncate
 */

// TODO: This will be deprecated when we manage it directly in JS.
const TruncateByMaxHeight = (maxHeight) => {
  return `
    display: inline-block;
    line-height: 1.4;
    overflow: hidden;
    white-space: wrap;
    max-height: ${maxHeight};
    width: 100%;
  `
}

export default TruncateByMaxHeight
