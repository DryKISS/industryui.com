import { string, number, func } from 'prop-types'

export const CloseIcon = ({ color, size, onClick }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      width={size}
      height={size}
      cursor='pointer'
      onClick={onClick}
    >
      <path
        fill={color}
        d='M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z'
      />
    </svg>
  )
}

CloseIcon.propTypes = {
  color: string,
  size: number,
  onClick: func
}

CloseIcon.defaultProps = {
  color: '#fff',
  size: 30
}
