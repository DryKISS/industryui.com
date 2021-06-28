/**
 * Components - Utils - Slugify
 */

// React
import React, { useState } from 'react'

// UI
import slugify from '../slugify'
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

export const Main = () => {
  const [url, setURL] = useState('Hi #@$%& ółźćę 🙂 20!!')

  return (
    <>
      <p>URL: {slugify(url)}</p>
      <input type="text" value={url} onChange={(e) => setURL(e.target.value)} />
    </>
  )
}
