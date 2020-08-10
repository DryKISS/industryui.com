/**
 * Truncate
 * Truncate the text to a single line
 */
export const Truncate = () => {
  return `
  display: inline-block;
  line-height: 1.4;
  max-height: 70px;
  overflow: hidden;
  width: 100%;
  word-wrap: break-word;
  text-overflow: ellipsis;
  `
}
