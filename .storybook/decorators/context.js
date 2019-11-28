/**
 * Context selector
 */

// Storybook
import { select } from '@storybook/addon-knobs'

// UI
import { CONTEXT } from '../../'

export const Context = id => select('Context', CONTEXT, 'primary', id)
