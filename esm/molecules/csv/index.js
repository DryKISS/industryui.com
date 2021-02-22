/**
 * CSV Reader
 *
 * @see https://www.papaparse.com/
 * @see https://github.com/nzambello/react-csv-reader
 */
// React
import React from 'react';
import { func, object } from 'prop-types'; // UI

import { FormField } from '../../'; // Papa parse

import PapaParse from 'papaparse';
export var CSVReader = function CSVReader(_ref) {
  var onError = _ref.onError,
      onFileLoaded = _ref.onFileLoaded,
      parserOptions = _ref.parserOptions;

  var change = function change(e) {
    var reader = new window.FileReader();
    var filename = e.target.files[0].name;

    reader.onload = function (event) {
      var csvData = PapaParse.parse(event.target.result, Object.assign(parserOptions, {
        error: onError
      }));
      onFileLoaded(csvData.data, filename);
    };

    reader.readAsText(e.target.files[0]);
  };

  return /*#__PURE__*/React.createElement(FormField, {
    accept: ".csv, text/csv",
    id: "inputId",
    label: "CSV Upload",
    onChange: change,
    type: "file"
  });
};
CSVReader.displayName = "CSVReader";
CSVReader.propTypes = {
  onFileLoaded: func.isRequired,
  onError: func,
  parserOptions: object
}; //   label,
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
//# sourceMappingURL=index.js.map