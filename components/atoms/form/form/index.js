/**
 * Form
 * Validates each field based on HTML5 atttributes, then calls the submit method
 * of the calling class
 */

// React
import React, { Component } from 'react'
import { func } from 'prop-types'

// Style
import styled from 'styled-components'

export class Form extends Component {
  state = {
    isValidated: false
  }

  static propTypes = {
    submit: func.isRequired
  }

  /**
   * The main function that validates the form and fills in the error messages.
   *
   * @returns bool Returns a boolean showing if the form is valid for submission or not.
   */
  validate = () => {
    // this.formEl is a reference in the component to the form DOM element.
    const formEl = this.formEl
    const formLength = formEl.length

    /**
     * The checkValidity() method on a form runs the html5 form validation of
     * its elements and returns the result as a boolean.
     *
     * It returns 'false' if at least one of the form elements does not qualify,
     * and 'true', if all form elements are filled with valid values.
     */
    if (formEl.checkValidity() === false) {
      for (let i = 0; i < formLength; i++) {
        // the i-th child of the form corresponds to the forms i-th input element
        const elem = formEl[i]
        const parentNode = elem.parentNode
        let errorLabel = parentNode.querySelector('.Form-feedback')

        if (elem.type !== 'checkbox' && elem.parentNode.parentNode.nodeName.toLowerCase() === 'fieldset') {
          errorLabel = elem.parentNode.parentNode.querySelector('.Form-feedback')
        }

        // errorLabel placed next to an element is the container we want to use
        // for validation error message for that element
        // const errorLabel = parentNode.querySelector('.Form-feedback')

        // A form element contains also any buttuns contained in the form. There
        // is no need to validate a button, so, we'll skip that nodes.
        if (errorLabel && elem.nodeName.toLowerCase() !== 'button' && elem.nodeName.toLowerCase() !== 'fieldset') {
          // Each note in html5 form has a validity property. It contains the
          // validation state of that element. The elem.validity.valid property
          // indicates whether the element qualifies its validation rules or no.
          // If it does not qualify, the elem.validationMessage property will
          // contain the localized validation error message. We will show that
          // message in our error container if the element is invalid, and clear
          // the previous message, if it is valid.
          if (!elem.validity.valid) {
            errorLabel.textContent = elem.validationMessage
          } else {
            errorLabel.textContent = ''
          }
        }
      }

      // Return 'false', as the formEl.checkValidity() method said there are some invalid form inputs.
      return false
    } else {
      // The form is valid, so we clear all the error messages
      for (let i = 0; i < formLength; i++) {
        const elem = formEl[i]
        let parentNode = elem.parentNode

        if (parentNode.parentNode.nodeName.toLowerCase() === 'fieldset') {
          parentNode = elem.parentNode.parentNode
        }

        const errorLabel = parentNode.querySelector('.Form-feedback')

        if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
          errorLabel.textContent = ''
        }
      }

      // Return 'true', as the form is valid for submission
      return true
    }
  }

  /**
   * This is the method that is called on form submit.
   * It stops the default form submission process and proceeds with custom
   * validation.
   */
  submit = (e) => {
    e.preventDefault()

    const { submit } = this.props

    // If the call of the validate method was successful, we can proceed with
    // form submission. Otherwise we do nothing.
    if (this.validate()) {
      submit(e)
    }

    this.setState({ isValidated: true })
  }

  /**
   * Render the component as a regular form element with appended children from props.
   */
  render () {
    const { children, className } = this.props

    return (
      <StyledForm
        className={className}
        noValidate
        ref={form => (this.formEl = form)}
        onSubmit={this.submit}
      >
        {children}
      </StyledForm>
    )
  }
}

const StyledForm = styled.form`
  font-size: 1rem;
`
