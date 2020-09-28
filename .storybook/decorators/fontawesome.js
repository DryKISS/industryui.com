/**
 * IconSize selector
 */

// Storybook
import { select } from '@storybook/addon-knobs'
import { ICON_PULL, ICON_PREFIX, ICON_SIZE } from '../../components/atoms/icon/constants'

export const IconSize = id => select('Size', ICON_SIZE, '3x', id)
export const IconPull = id => select('Pull', ICON_PULL, 'left', id)

export const IconPrefix = id => select('Prefix', ICON_PREFIX, 'fas', id)

const List_Icons = {
  Copy: 'copy',
  Copyright: 'copyright',
  Images: 'images',
  Smile: 'smile',
  UserCircle: 'user-circle'
}

export const ListIcons = id => select('Icon', List_Icons, 'images', id)
