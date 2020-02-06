/**
 * Context selector
 */

// Storybook
import { select } from '@storybook/addon-knobs'

// UI
import { CONTEXT } from '../../'

export const Context = (id, context) => select('Context', CONTEXT, context || 'primary', id)
