import { commonIconPropTypes } from '../propTypes'
import { IconWrapper } from '../wrapper'

export const DeleteIcon = props => {
  return (
    <IconWrapper {...props} mainSize={18}>
      <path d='M15.4286 1.12501H11.1429L10.8071 0.467584C10.736 0.327034 10.6265 0.208807 10.4908 0.126202C10.3552 0.0435979 10.1988 -0.000106452 10.0393 6.16384e-06H5.95714C5.79799 -0.000596081 5.64189 0.0429453 5.50672 0.125642C5.37154 0.208338 5.26277 0.326845 5.19286 0.467584L4.85714 1.12501H0.571429C0.419876 1.12501 0.274531 1.18427 0.167368 1.28976C0.0602039 1.39525 0 1.53832 0 1.68751L0 2.81251C0 2.96169 0.0602039 3.10476 0.167368 3.21025C0.274531 3.31574 0.419876 3.37501 0.571429 3.37501H15.4286C15.5801 3.37501 15.7255 3.31574 15.8326 3.21025C15.9398 3.10476 16 2.96169 16 2.81251V1.68751C16 1.53832 15.9398 1.39525 15.8326 1.28976C15.7255 1.18427 15.5801 1.12501 15.4286 1.12501ZM1.9 16.418C1.92725 16.8464 2.11934 17.2485 2.43716 17.5424C2.75498 17.8363 3.17464 17.9999 3.61071 18H12.3893C12.8254 17.9999 13.245 17.8363 13.5628 17.5424C13.8807 17.2485 14.0727 16.8464 14.1 16.418L14.8571 4.5H1.14286L1.9 16.418Z' />
    </IconWrapper>
  )
}
DeleteIcon.propTypes = commonIconPropTypes
