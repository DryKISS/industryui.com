/**
 * Slugify a string
 */
export const slugify = string => {
  const replacer = '-'
  const slug = string
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFKD') // Normalization Form Compatibility Decomposition
    .replace(/\s+/g, replacer) // Replace spaces replacer
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, replacer) // Replace multiple spaces with replacer
    .replace(new RegExp(replacer + '$'), '') // Replace the replacer in the last occurence

  return slug
}
