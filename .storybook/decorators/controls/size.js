/**
 * Size selector
 */

// UI
import ControlTypes from './controlTypes'
import THEME_SIZE  from '../../../components/constants/size'

const SizeControl = () => {
  return {
    control: {
      type: ControlTypes.Select
    },
    options: Object.values(THEME_SIZE),
  }
}

export default SizeControl
