/**
 * Components - Utils - Validator - Post Code String
 */

const r1 = `^([Gg][Ii][Rr] 0[Aa]{2})`
const r2 = '|((([A-Za-z][0-9]{1,2})'
const r3 = '|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])'
const r4 = '|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\\s?[0-9][A-Za-z]{2})$'

const postCodeString = r1 + r2 + r3 + r4

export default postCodeString
