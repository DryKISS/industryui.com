/**
 * Align selector
 */

// Storybook
import { select } from '@storybook/addon-knobs'

// UI
import { ALIGN } from 'root'

export const Align = id => select('Align', ALIGN, 'start', id)
