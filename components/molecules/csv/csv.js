/**
 * CSV Reader
 *
 * @see https://www.papaparse.com/
 * @see https://github.com/nzambello/react-csv-reader
 */

// React
import React from 'react'
import { func, object } from 'prop-types'

// UI
import FormField from '../../form/field/input'

// Papa parse
import PapaParse from 'papaparse'

const CSVReader = ({ onError, onFileLoaded, parserOptions }) => {
  const change = (e) => {
    const reader = new window.FileReader()
    const filename = e.target.files[0].name

    reader.onload = (event) => {
      const csvData = PapaParse.parse(
        event.target.result,
        Object.assign(parserOptions, {
          error: onError
        })
      )

      onFileLoaded(csvData.data, filename)
    }

    reader.readAsText(e.target.files[0])
  }

  return (
    <FormField
      accept=".csv, text/csv"
      id="inputId"
      label="CSV Upload"
      onChange={change}
      type="file"
    />
  )
}

CSVReader.propTypes = {
  onFileLoaded: func.isRequired,
  onError: func,
  parserOptions: object
}

export default CSVReader
