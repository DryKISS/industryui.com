// React
import React from 'react'

import clsx from 'clsx'

// Style
import styled from 'styled-components'

// UI
import handleHashtagClick from './utils/handleHashtagClick'

const Hashtag = (props) => {
  const {
    theme = {},
    className,
    decoratedText,
    dir,
    entityKey,
    getEditorState,
    offsetKey,
    setEditorState,
    contentState,
    blockKey,
    ...otherProps
  } = props
  const combinedClassName = clsx(theme.hashtag, className)

  return (
    <StyledHashtag
      onClick={() => handleHashtagClick(props.decoratedText)}
      {...otherProps}
      className={combinedClassName}
    />
  )
}

const StyledHashtag = styled.span`
  color: ${({ theme: { MESSAGING } }) => MESSAGING.hashtagColour};
  cursor: pointer;
`
export default Hashtag
