/**
 * Size selector
 */

// Storybook
import { select } from '@storybook/addon-knobs'

// UI
import { SIZE } from '../../'

export const Size = (id, defaultValue = 'lg') => select('Size', SIZE, defaultValue, id)
