/**
 * Components - Molecules - Table - Utils - Table Column Count
 */

const tableColumnCount = (columns) => columns.filter((c) => !c.hidden).length

export default tableColumnCount
