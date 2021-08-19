/**
 * Truncate
 * Truncate the text to a single line
 */
const Truncate = () => {
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

export default Truncate
