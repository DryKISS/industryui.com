/**
 * Components - Molecules - Table - Utils
 */

const tableColumnCount = (columns) => columns.filter((c) => !c.hidden).length

export default tableColumnCount
