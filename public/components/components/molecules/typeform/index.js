/**
 * Typeform
 *
 * @see https://stackoverflow.com/questions/42088122/how-to-detect-user-has-completed-embedded-typeform
 */

// React
import React, { Component } from 'react'
import { string } from 'prop-types'

// Style
import { withTheme } from 'styled-components'

// const styleDefault = {
//   // position: 'relative',
//   width: '100%',
//   height: '500px'
//   // overflow: 'hidden'
// }

export const Typeform = withTheme(
  class Typeform extends Component {
    static propTypes = {
      url: string.isRequired
    }

    // Default values taken from official Typeform docs
    // https://developer.typeform.com/embed/modes/
    static defaultProps = {
      style: {},
      url: '',
      popup: false,
      hideHeaders: false,
      hideFooter: false,
      onSubmit: () => { console.log('All done') },

      // Widget options
      opacity: 100,
      buttonText: 'Start',

      // Popup options
      mode: 'popup', // options: "popup", "drawer_left", "drawer_right"
      autoOpen: false
    }

    componentDidMount () {
      const typeformEmbed = require('@typeform/embed')

      const {
        autoClose,
        autoOpen,
        buttonText,
        hideFooter,
        hideHeaders,
        mode,
        onSubmit,
        opacity,
        url
      } = this.props

      const options = {
        autoClose,
        autoOpen,
        hideHeaders,
        hideFooter,
        opacity,
        buttonText,
        mode,
        onSubmit
      }

      const embedElement = this.typeformElm

      // Load Typeform embed widget
      typeformEmbed.makeWidget(embedElement, url, options)
    }

    render () {
      // const style = Object.assign({}, this.props.style)

      return (
        <div className='ReactTypeformEmbed' ref={tf => this.typeformElm = tf} />
      )
    }
  }
)
