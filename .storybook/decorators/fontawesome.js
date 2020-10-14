/**
 * IconSize selector
 */

import { ControlTypes } from 'decorators'

// UI
import { arrayOfValues, ICON_PULL, ICON_PREFIX, ICON_SIZE } from 'components'

const List_Icons = {
  Copy: 'copy',
  Copyright: 'copyright',
  Images: 'images',
  Smile: 'smile',
  UserCircle: 'user-circle'
}

export const ListIcons = id => select('Icon', List_Icons, 'images', id)

export const IconSizeControl = () => {
  return {
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(ICON_SIZE)
    }
  }
}

export const IconPrefixControl = () => {
  return {
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(ICON_PREFIX)
    }
  }
}
