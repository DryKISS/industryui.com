/**
 * Typeform
 *
 * @see https://stackoverflow.com/questions/42088122/how-to-detect-user-has-completed-embedded-typeform
 */

// React
import { useEffect, useRef } from 'react'
import { string, shape, number, func, bool, object } from 'prop-types'

export const Typeform = ({ options, style, url }) => {
  const typeformRef = useRef()
  useEffect(() => {
    const typeformEmbed = require('@typeform/embed')
    // Load Typeform embed widget
    typeformEmbed.makeWidget(typeformRef.current, url, options)
  }, [])

  return <div className='ReactTypeformEmbed' ref={typeformRef} style={style} />
}

Typeform.propTypes = {
  url: string.isRequired,
  options: shape({
    autoClose: bool,
    autoOpen: bool,
    buttonText: string,
    hideHeaders: bool,
    hideFooter: bool,
    mode: string,
    onSubmit: func,
    opacity: number,
    popup: bool
  }),
  style: object
}

// Default values taken from official Typeform docs
// https://developer.typeform.com/embed/modes/
Typeform.defaultProps = {
  url: '',
  options: {
    popup: false,
    hideHeaders: false,
    hideFooter: false,
    onSubmit: () => {},
    // Widget options
    opacity: 100,
    buttonText: 'Start',
    // Popup options
    mode: 'popup', // options: "popup", "drawer_left", "drawer_right"
    autoOpen: false
  }
}
