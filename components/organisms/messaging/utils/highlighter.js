// React
import React from 'react'

import { CompositeDecorator } from 'draft-js'

const SearchHighlight = (props) => (
  <span className="search-and-replace-highlight">{props.children}</span>
)

const findWithRegex = (regex, contentBlock, callback) => {
  const text = contentBlock.getText()
  let matchArr, start, end
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index
    end = start + matchArr[0].length
    callback(start, end)
  }
}

export const generateDecorator = (highlightTerm) => {
  const regex = new RegExp(highlightTerm, 'g')
  return new CompositeDecorator([
    {
      strategy: (contentBlock, callback) => {
        if (highlightTerm !== '') {
          findWithRegex(regex, contentBlock, callback)
        }
      },
      component: SearchHighlight
    }
  ])
}
