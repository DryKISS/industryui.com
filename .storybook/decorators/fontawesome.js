/**
 * IconSize selector
 */

// React
import React from 'react'

// UI
import ControlTypes from './controls/controlTypes'
import arrayOfValues from '../../components/utils/arrayOfValues/arrayOfValues'
import ICON_PULL from '../../components/atoms/icon/constants/pull'
import ICON_PREFIX from '../../components/atoms/icon/constants/prefix'
import ICON_SIZE from '../../components/atoms/icon/constants/size'

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
