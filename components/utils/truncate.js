/**
 * Truncate
 * Truncate the text to a single line
 */
export const Truncate = () => {
  return `
  display: inline-block;
  line-height: initial;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  word-break: break-all;
  word-wrap: break-word;
  text-overflow: ellipsis;
  `
}

// TODO: This will be deprecated when we manage it directly in JS.
export const TruncateByMaxHeight = (maxHeight) => {
  return `
    display: inline-block;
    line-height: 1.4;
    overflow: hidden;
    white-space: wrap;
    max-height: ${maxHeight};
    width: 100%;

  `
}
