/**
 * useDownloadCSVFile
 */

// React
import { string } from 'prop-types'
import { useEffect, useState } from 'react'

// Papa parse
import papa from 'papaparse'

const useDownloadCSVFile = (url) => {
  const [rows, setRows] = useState([])
  useEffect(() => {
    papa.parse(url, {
      download: true,
      header: true,
      complete: function (results) {
        setRows(results.data)
      }
    })
  }, [url])
  return rows
}

useDownloadCSVFile.propTypes = {
  url: string
}

useDownloadCSVFile.defaultProps = {
  url: ''
}

export default useDownloadCSVFile
