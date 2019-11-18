/**
 * Typeform
 *
 * @see https://stackoverflow.com/questions/42088122/how-to-detect-user-has-completed-embedded-typeform
 */

// React
import { string } from 'prop-types'

export const Typeform = () => {
  // componentDidMount = () => {
  //   const typeformEmbed = require('@typeform/embed')

  //   const {
  //     autoClose,
  //     autoOpen,
  //     buttonText,
  //     hideFooter,
  //     hideHeaders,
  //     mode,
  //     onSubmit,
  //     opacity,
  //     url
  //   } = this.props

  //   const options = {
  //     autoClose,
  //     autoOpen,
  //     hideHeaders,
  //     hideFooter,
  //     opacity,
  //     buttonText,
  //     mode,
  //     onSubmit
  //   }

  //   const embedElement = this.typeformElm

  //   // Load Typeform embed widget
  //   typeformEmbed.makeWidget(embedElement, url, options)
  // }

  // return (
  //   <div className='ReactTypeformEmbed' ref={tf => this.typeformElm = tf} />
  // )
  return false
}

Typeform.propTypes = {
  url: string.isRequired
}

// Default values taken from official Typeform docs
// https://developer.typeform.com/embed/modes/
Typeform.defaultProps = {
  style: {},
  url: '',
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
