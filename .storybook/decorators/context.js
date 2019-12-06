/**
 * Context selector
 */

// Storybook
import { select } from '@storybook/addon-knobs'

// UI
import { CONTEXT } from '../../'

export const Context = (id, initialValue) =>
  select('Context', CONTEXT, initialValue || 'primary', id)
