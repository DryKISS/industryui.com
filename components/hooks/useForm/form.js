/**
 * Hooks - useForm
 *
 * Handle all input changes and allows the pushing in of toggle resets, this could be an array based
 * on one trigger
 *
 * @Usage
 * [{ trigger: 'councilToggle', reset: ['license'] }]
 */

import { useState } from 'react'

export const useForm = (initialState, reset) => {
  const [form, setForm] = useState(initialState)

  const clear = id => {
    setForm({ ...form, [id]: '' })
  }

  const change = e => {
    const { checked, id, type, value } = e.target

    let doReset = null

    if (reset) {
      doReset = reset.find(el => el.trigger === id)

      if (doReset) {
        doReset = { ...Object.assign(...doReset.reset.map(d => ({ [d]: '' }))) }
      }
    }

    setForm({ ...form, [id]: type === 'checkbox' ? checked : value, ...doReset })
  }

  return { change, form, setForm, clear }
}
