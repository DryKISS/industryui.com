/**
 * IconSize selector
 */

// Storybook
import { select } from '@storybook/addon-knobs'
import { ICON_SIZE, ICON_PULL } from '../../components/atoms/icon/constants'

export const IconSize = id => select('Size', ICON_SIZE, '3x', id)

export const IconPull = id => select('Pull', ICON_PULL, 'left', id)

const Icon_Prefix = {
  Solid: 'fas',
  Regular: 'far'
}
export const IconPrefix = id => select('Prefix', Icon_Prefix, 'fas', id)

const List_Icons = {
  Copy: 'copy',
  Copyright: 'copyright',
  Images: 'images',
  Smile: 'smile',
  UserCircle: 'user-circle'
}
export const ListIcons = id => select('Icon', List_Icons, 'images', id)
