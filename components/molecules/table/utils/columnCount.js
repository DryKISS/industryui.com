/**
 * Components - Molecules - Table - Utils
 */

export const tableColumnCount = (columns) => columns.filter((c) => !c.hidden).length
