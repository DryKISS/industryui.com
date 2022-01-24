import Table from '../table/table'

// Papa parse
import papa from 'papaparse'

const columns = [
  {
    text: 'Email'
  },
  {
    text: 'Task'
  }
]
const CSVPreview = ({ file, ...rest }) => {
  console.log('file :>> ', file)
  papa.parse(file, {
    download: true,
    worker: true, // Don't bog down the main thread if its a big file
    complete: function (results, file) {
      console.log('parsing complete read', results)
      console.log('file :>> ', file)
    }
  })
  console.log('rest :>> ', rest)
  return <Table rows={[]} columns={columns} />
}

export default CSVPreview
