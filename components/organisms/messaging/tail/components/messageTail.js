/**
 * MessageTail
 */

// React
import { oneOf } from 'prop-types'

// Style
import styled from 'styled-components'

export const Tail = ({ type }) => {
  return <StyledTail type={type} />
}

const StyledTail = styled.span`
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAMAAADp2asXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACQUExURUxpccPDw9ra2m9vbwAAAAAAADExMf///wAAABoaGk9PT7q6uqurqwsLCycnJz4+PtDQ0JycnIyMjPf3915eXvz8/E9PT/39/RMTE4CAgAAAAJqamv////////r6+u/v7yUlJeXl5f///5ycnOXl5XNzc/Hx8f///xUVFf///+zs7P///+bm5gAAAM7Ozv///2fVensAAAAvdFJOUwCow1cBCCnqAhNAnY0WIDW2f2/hSeo99g1lBYT87vDXG8/6d8oL4sgM5szrkgl660OiZwAAAHRJREFUKM/ty7cSggAABNFVUQFzwizmjPz/39k4YuFWtm55bw7eHR6ny63+alnswT3/rIDzUSC7CrAziPYCJCsB+gbVkgDtVIDh+DsE9OTBpCtAbSBAZSEQNgWIygJ0RgJMDWYNAdYbAeKtAHODlkHIv997AkLqIVOXVU84AAAAAElFTkSuQmCC);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  bottom: ${({ type }) => (type === 'in' ? '4px' : '-2px')};
  height: 19px;
  position: absolute;
  transform: ${({ type }) => (type === 'in' ? 'rotate(55deg)' : 'rotate(-12deg)')};
  ${({ type }) => (type === 'in' ? 'left: 4px' : 'right: 14px')};
  width: 12px;
`

Tail.propTypes = {
  type: oneOf(['in', 'out']).isRequired
}
