/**
 * Components - Utils - Unique Id
 */

const uniqueId = () => {
  // always start with a letter (for DOM friendliness)
  let idstr = String.fromCharCode(Math.floor(Math.random() * 25 + 65))
  do {
    // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
    const ascicode = Math.floor(Math.random() * 42 + 48)
    if (ascicode < 58 || ascicode > 64) {
      // exclude all chars between : (58) and @ (64)
      idstr += String.fromCharCode(ascicode)
    }
  } while (idstr.length < 32)

  return idstr
}

export default uniqueId
