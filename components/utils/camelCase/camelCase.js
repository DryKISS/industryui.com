/**
 * Utils - Camel Case
 */

// Utils

export const camelCase = {
  camelize: (str) =>
    str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase()
      })
      .replace(/\s+/g, ''),
  decamelize: (str) => str.split(/(?=[A-Z])/).join(' ')
}
export default camelCase
