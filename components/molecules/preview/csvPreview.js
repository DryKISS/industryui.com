/**
 * CSVPreview
 */

// React
import React from 'react'

// UI
import Table from '../table/table'
import useDownloadCSVFile from './useDownloadCSVFile'

// Style
import styled from 'styled-components'

const CSVPreview = ({ file, ...rest }) => {
  const downloadedCSV = useDownloadCSVFile(file)

  const generateTableColumn = () => {
    const column = Object.keys(downloadedCSV[0])?.length || 0
    const result = []

    for (let item = 0; item < column; item++) {
      result.push({ text: `Col#${item + 1}` })
    }
    return result
  }

  const generateTableRows = () => {
    const temp = downloadedCSV
    temp.pop()
    const newRow = {}
    Object.keys(temp[0]).forEach((i) => {
      newRow[i] = i
    })
    temp.unshift(newRow)

    return temp
  }

  return downloadedCSV.length > 0 ? (
    <Wrapper>
      <Table rows={generateTableRows()} columns={generateTableColumn()} />
    </Wrapper>
  ) : (
    <></>
  )
}

const Wrapper = styled.div`
  width: 90%;
`
export default CSVPreview
