/**
 * Slugify
 */

// React
import React, { useState } from 'react'

// UI
import { slugify } from '../../../'
import Readme from '../README.md'

export default {
  title: 'Utils/Slugify',
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
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
