/**
 * Context selector
 */

// Storybook
import { select } from '@storybook/addon-knobs'

// UI
import { CONTEXT } from '../../'

export const Context = (id, context = 'primary', label = 'Context') =>
  select(label, CONTEXT, context, id)
