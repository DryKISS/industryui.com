/**
 * Hubsport - Form
 */
import React from 'react'

// {/* <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js"></script>
// <script>
// hbspt.forms.create({
// portalId: "6190637",
// formId: "3a36aae9-8343-45f6-9268-15acd39190fe"
// });
// </script> */}

// const globalId = 0

export const HubspotForm = () => {
  // constructor(props) {
  // super(props)

  //   this.state = {
  // loaded: false
  //   }

  // this.id = globalId++

  // this.createForm = this.createForm.bind(this)
  // this.findFormElement = this.findFormElement.bind(this)
  // }

  // createForm() {
  // if (window.hbspt) {
  // // protect against component unmounting before window.hbspt is available
  // if (this.el === null) {
  // return
  // }

  // let props = {
  // ...this.props
  // }

  // delete props.loading
  // delete props.onSubmit
  // delete props.onReady

  // let options = {
  // ...props,
  // target: `#${this.el.getAttribute(`id`)}`,
  // onFormSubmit : ($form) => {
  // // ref: https://developers.hubspot.com/docs/methods/forms/advanced_form_options
  // var formData = $form.serializeArray();
  // this.props.onSubmit(formData);
  // }
  // }
  // window.hbspt.forms.create(options)
  // return true
  // }
  // else {
  // setTimeout(this.createForm, 1)
  // }
  // }

  // loadScript() {
  // let script = document.createElement(`script`)

  // script.defer = true

  // script.onload = () => {
  // this.createForm()
  // this.findFormElement()
  // }

  // script.src = `//js.hsforms.net/forms/shell.js`
  // document.head.appendChild(script)
  // }

  // findFormElement(){
  // // protect against component unmounting before form is added
  // if (this.el === null) {
  // return
  // }

  // let form = this.el.querySelector(`iframe`)

  // if (form){
  // this.setState({ loaded: true })
  // if (this.props.onReady) {
  // this.props.onReady(form);
  // }
  // }
  // else{
  // setTimeout(this.findFormElement, 1)
  // }
  // }

  // componentDidMount() {
  // if (!window.hbspt && !this.props.noScript) {
  // this.loadScript()
  // } else {
  // this.createForm()
  // this.findFormElement()
  // }
  // }

  return (
    <div>
      <div
        // ref={el => this.el = el}
        id={`reactHubspotForm${this.id}`}
        style={{ display: this.state.loaded ? 'block' : 'none' }}
      />

      {!this.state.loaded && this.props.loading}
    </div>
  )
}
