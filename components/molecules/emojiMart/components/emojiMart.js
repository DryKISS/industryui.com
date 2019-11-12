/**
 * EmojiMart
 */

// React
import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { bool, func } from 'prop-types'

// Emoji
import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

export const EmojiMart = ({ closeOnClickOut, handleSelect, handleOpenPicker, open }) => {
  const node = useRef()

  const handleClickAway = e => {
    e.preventDefault()
    const domNode = ReactDOM.findDOMNode(node.current)

    if (domNode.contains(encodeURIComponent.target)) {
      handleOpenPicker(false)
    }
  }

  useEffect(() => {
    if (open && closeOnClickOut) {
      document.addEventListener('mousedown', handleClickAway)
    } else {
      document.removeEventListener('mousedown', handleClickAway)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickAway)
    }
  }, [open])

  const handlePickEmoji = (emoji, e) => {
    e.preventDefault()
    handleSelect(emoji.native)
    handleOpenPicker(false)
  }

  return (
    open && (
      <Picker
        emoji=''
        emojiSize={16}
        include={['foods', 'people', 'recent', 'nature']}
        onClick={handlePickEmoji}
        set='google'
        sheetSize={20}
        showSkinTones={false}
        showPreview={false}
        style={{ border: 'initial', borderRadius: 'initial', height: '100px', width: '100%' }}
        title='Pick your emoji...'
        ref={node}
      />
    )
  )
}

EmojiMart.propTypes = {
  closeOnClickOut: bool,
  handleOpenPicker: func.isRequired,
  handleSelect: func.isRequired,
  open: bool
}

EmojiMart.defaultProps = {
  closeOnClickOut: true,
  open: false
}
