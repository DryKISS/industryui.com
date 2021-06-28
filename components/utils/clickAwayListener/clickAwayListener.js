import { createElement, useEffect, useRef } from 'react'

const ClickAwayListener = ({
  as = 'div',
  onClickAway,
  mouseEvent = 'click',
  touchEvent = 'touchend',
  ...props
}) => {
  const node = useRef(null)

  useEffect(() => {
    const handleEvents = (event) => {
      if (node.current && node.current.contains(event.target)) {
        return
      }

      onClickAway && onClickAway(event)
    }

    document.addEventListener(mouseEvent, handleEvents)
    document.addEventListener(touchEvent, handleEvents)

    return () => {
      document.removeEventListener(mouseEvent, handleEvents)
      document.removeEventListener(touchEvent, handleEvents)
    }
  }, [mouseEvent, onClickAway, touchEvent])

  return createElement(as, { ref: node, ...props })
}
export default ClickAwayListener
