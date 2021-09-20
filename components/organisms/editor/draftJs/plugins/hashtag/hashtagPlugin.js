// React
import React from 'react'

import Hashtag from './Hashtag'
import hashtagStrategy from './hashtagStrategy'
const hashtagPlugin = (config = {}) => {
  const DecoratedHashtag = (props) => <Hashtag {...props} />
  return {
    decorators: [
      {
        strategy: hashtagStrategy,
        component: DecoratedHashtag
      }
    ]
  }
}
export default hashtagPlugin
