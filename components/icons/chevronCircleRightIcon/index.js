import { commonIconPropTypes } from '../propTypes'
import { IconWrapper } from '../wrapper'

export const ChevronCircleRightIcon = props => {
  return (
    <IconWrapper {...props} mainSize={18}>
      <path d='M9 0C13.9718 0 18 4.02823 18 9C18 13.9718 13.9718 18 9 18C4.02823 18 0 13.9718 0 9C0 4.02823 4.02823 0 9 0ZM13.1335 8.38306L8.21613 3.46573C7.875 3.1246 7.32339 3.1246 6.98589 3.46573L6.36895 4.08266C6.02782 4.42379 6.02782 4.9754 6.36895 5.3129L10.056 9L6.36895 12.6871C6.02782 13.0282 6.02782 13.5798 6.36895 13.9173L6.98589 14.5343C7.32702 14.8754 7.87863 14.8754 8.21613 14.5343L13.1335 9.61693C13.4746 9.27581 13.4746 8.72419 13.1335 8.38306Z' />
    </IconWrapper>
  )
}

ChevronCircleRightIcon.propTypes = commonIconPropTypes
