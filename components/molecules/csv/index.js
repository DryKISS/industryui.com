/**
 * CSV Reader
 *
 * @see https://www.papaparse.com/
 * @see https://github.com/nzambello/react-csv-reader
 */

// React
import { element, func, object, oneOfType, string } from 'prop-types'

// UI
import { Input } from '../../'

// Papa parse
const PapaParse = require('papaparse/papaparse.min.js')

export const CSVReader = ({ onError, onFileLoaded, parserOptions }) => {
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
    <Input
      accept='.csv, text/csv'
      id='inputId'
      label='CSV Upload'
      change={change}
      type='file'
    />
  )
}

CSVReader.propTypes = {
  label: oneOfType([string, element]),
  onFileLoaded: func.isRequired,
  onError: func,
  inputId: string,
  parserOptions: object
}

//   label,
//   inputId = null,
//   inputStyle = {},
//   parserOptions = {}
// }) => {
//   let fileContent

//   const change = e => {
//     let reader = new FileReader()
//     const filename = e.target.files[0].name

//     reader.onload = event => {
//       const csvData = PapaParse.parse(
//         event.target.result,
//         Object.assign(parserOptions, {
//           error: onError
//         })
//       )
//       onFileLoaded(csvData.data, filename)
//     }

//     reader.readAsText(e.target.files[0])
//   }

//   return (
//     <div className={cssClass}>
//       {label && <label htmlFor={inputId}>{label}</label>}
//       <input
//         className={cssInputClass}
//         type='file'
//         id={inputId}
//         style={inputStyle}
//         accept='.csv, text/csv'
//         onChange={e => change(e)}
//       />
//     </div>
//   )
// }
