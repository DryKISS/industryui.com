/**
 * Capitalise the first letter in a string
 */
export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// category.substr(0, 1).toUpperCase() + category.substr(1).toLowerCase()}
