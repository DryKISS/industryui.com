/**
 * Components - Icons - Setting Icon
 */

import React from 'react'
import propTypes from '../props'
import IconWrapper from '../wrapper'

const SettingIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={20}>
      <path
        d="M17.7701 11.1629L16.1552 10.2702C16.3182 9.42822 16.3182 8.56452 16.1552 7.72259L17.7701 6.82985C17.9558 6.72823 18.0392 6.51775 17.9786 6.32178C17.5578 5.02985 16.8413 3.86131 15.905 2.88873C15.7609 2.73994 15.5259 2.70365 15.3439 2.80527L13.729 3.698C13.0504 3.13914 12.2695 2.70728 11.4241 2.42422V0.64237C11.4241 0.439145 11.2763 0.261323 11.0678 0.217775C9.67651 -0.0798044 8.25113 -0.0652883 6.92811 0.217775C6.71961 0.261323 6.57176 0.439145 6.57176 0.64237V2.42785C5.73018 2.71454 4.94926 3.14639 4.26689 3.70163L2.65576 2.80889C2.47001 2.70728 2.23876 2.73994 2.09471 2.89236C1.15835 3.86131 0.441872 5.02985 0.0210819 6.32541C-0.0433634 6.52138 0.0438274 6.73186 0.229582 6.83348L1.84451 7.72621C1.6815 8.56815 1.6815 9.43185 1.84451 10.2738L0.229582 11.1665C0.0438274 11.2681 -0.0395725 11.4786 0.0210819 11.6746C0.441872 12.9665 1.15835 14.1351 2.09471 15.1076C2.23876 15.2564 2.4738 15.2927 2.65576 15.1911L4.27068 14.2984C4.94926 14.8572 5.73018 15.2891 6.57555 15.5722V17.3576C6.57555 17.5609 6.7234 17.7387 6.9319 17.7822C8.32316 18.0798 9.74854 18.0653 11.0716 17.7822C11.2801 17.7387 11.4279 17.5609 11.4279 17.3576V15.5722C12.2695 15.2855 13.0504 14.8536 13.7328 14.2984L15.3477 15.1911C15.5335 15.2927 15.7647 15.2601 15.9088 15.1076C16.8451 14.1387 17.5616 12.9701 17.9824 11.6746C18.0392 11.475 17.9558 11.2645 17.7701 11.1629ZM8.99794 11.8996C7.32615 11.8996 5.96522 10.5968 5.96522 8.99637C5.96522 7.39597 7.32615 6.09316 8.99794 6.09316C10.6697 6.09316 12.0307 7.39597 12.0307 8.99637C12.0307 10.5968 10.6697 11.8996 8.99794 11.8996Z"
        fill="white"
      />
    </IconWrapper>
  )
}

SettingIcon.propTypes = propTypes

export default SettingIcon