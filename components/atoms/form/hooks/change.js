/**
 * Form - Hooks - Change
 *
 * Handle all input changes and allows the pushing in of toggle resets, this
 * could be an array based on one trigger
 *
 * @Usage
 * [{ trigger: 'councilToggle', reset: ['license'] }]
 */

import { useState } from 'react'

export const useChange = (initialState, reset) => {
  const [form, setForm] = useState(initialState)

  const change = e => {
    const { checked, id, type, value } = e.target
    let doReset = null
    let v = false

    if (reset) {
      doReset = reset.find(el => el.trigger === id)

      if (doReset) {
        doReset = { ...Object.assign(...doReset.reset.map(d => ({ [d]: '' }))) }
      }
    }

    v = type === 'checkbox' ? checked : value

    setForm({ ...form, [id]: v, ...doReset })
  }

  return [change, form, setForm]
}
