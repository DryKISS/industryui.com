import { commonIconPropTypes } from '../propTypes'
import { IconWrapper } from '../wrapper'

export const DesktopIcon = props => {
  return (
    <IconWrapper {...props} mainSize={512}>
      <g>
        <path d='m474.5 18.5h-437c-20.678 0-37.5 16.822-37.5 37.5v330c0 20.678 16.822 37.5 37.5 37.5h160.057l-9.027 31.594c-3.625 12.688-17.835 23.406-31.03 23.406h-56.5c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h310c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-56.5c-13.195 0-27.405-10.719-31.03-23.406l-9.027-31.594h160.057c20.678 0 37.5-16.822 37.5-37.5v-330c0-20.678-16.822-37.5-37.5-37.5zm-437 15h437c12.407 0 22.5 10.094 22.5 22.5v262.5h-482v-262.5c0-12.406 10.093-22.5 22.5-22.5zm271.547 425.715c2.058 7.205 6.149 13.824 11.512 19.285h-129.118c5.363-5.461 9.454-12.081 11.512-19.285l10.204-35.715h85.685zm165.453-50.715h-437c-12.407 0-22.5-10.094-22.5-22.5v-52.5h482v52.5c0 12.406-10.093 22.5-22.5 22.5z' />
        <path d='m37.5 303.5h437c4.142 0 7.5-3.357 7.5-7.5v-240c0-4.143-3.358-7.5-7.5-7.5h-437c-4.142 0-7.5 3.357-7.5 7.5v105c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-97.5h422v225h-422v-97.5c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v105c0 4.143 3.358 7.5 7.5 7.5z' />
        <path d='m256 348.5c-12.407 0-22.5 10.094-22.5 22.5s10.093 22.5 22.5 22.5 22.5-10.094 22.5-22.5-10.093-22.5-22.5-22.5zm0 30c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5z' />
      </g>
    </IconWrapper>
  )
}

DesktopIcon.propTypes = commonIconPropTypes
