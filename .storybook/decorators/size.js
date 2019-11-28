/**
 * Size selector
 */

// Storybook
import { select } from '@storybook/addon-knobs'

// UI
import { SIZE } from '../../'

export const Size = id => select('Size', SIZE, 'lg', id)
