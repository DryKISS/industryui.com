/**
 * Size selector
 */


// UI
import arrayOfValues from '../../components/utils/arrayOfValues/arrayOfValues'
import { ControlTypes } from './controlTypes'
import THEME_SIZE  from '../../components/constants/size'

export const SizeControl = () => {
  return {
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(THEME_SIZE)
    }
  }
}
