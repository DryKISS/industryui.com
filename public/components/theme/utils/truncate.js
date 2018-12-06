/**
 * Truncate
 */
export const TRUNCATE = (width) => {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}
