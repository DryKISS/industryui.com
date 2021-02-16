/**
 * Components - Utils - Slugify
 */

// React
import { useState } from 'react'

// UI
import { slugify } from '../../../'
import Readme from '../README.md'

export default {
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Utils/Slugify'
}

export const main = () => {
  const [url, setURL] = useState('Hi #@$%& ółźćę 🙂 20!!')

  return (
    <>
      <p>URL: {slugify(url)}</p>
      <input type='text' value={url} onChange={e => setURL(e.target.value)} />
    </>
  )
}
