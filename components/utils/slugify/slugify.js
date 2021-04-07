/**
 * Components - Utils - Slugify
 *
 * Normalization Form Compatibility Decomposition
 * Replace spaces replacer
 * Remove all non-word chars
 * Replace multiple spaces with replacer
 * Replace the replacer in the last occurence
 */
const slugify = (string) => {
  const replacer = '-'

  const slug = string
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFKD')
    .replace(/\s+/g, replacer)
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, replacer)
    .replace(new RegExp(replacer + '$'), '')

  return slug
}

export default slugify
