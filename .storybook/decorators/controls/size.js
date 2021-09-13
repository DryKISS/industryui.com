/**
 * Size selector
 */

// UI
import ControlTypes from './controlTypes'
import THEME_SIZE  from '../../../components/constants/size'

const SizeControl = () => {
  return {
    options: Object.values(THEME_SIZE),
    control: {
      type: ControlTypes.Select
    }
  }
}

export default SizeControl
