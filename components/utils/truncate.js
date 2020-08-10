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
    max-height: 70px;
    width: 100%;
    word-break: break-all;
    word-wrap: break-word;
    text-overflow: ellipsis;
  `
}
