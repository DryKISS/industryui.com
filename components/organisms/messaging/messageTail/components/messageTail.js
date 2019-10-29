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
  background-image: ${props =>
    props.type === 'in'
      ? 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAMAAADp2asXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACQUExURUxpccPDw9ra2m9vbwAAAAAAADExMf///wAAABoaGk9PT7q6uqurqwsLCycnJz4+PtDQ0JycnIyMjPf3915eXvz8/E9PT/39/RMTE4CAgAAAAJqamv////////r6+u/v7yUlJeXl5f///5ycnOXl5XNzc/Hx8f///xUVFf///+zs7P///+bm5gAAAM7Ozv///2fVensAAAAvdFJOUwCow1cBCCnqAhNAnY0WIDW2f2/hSeo99g1lBYT87vDXG8/6d8oL4sgM5szrkgl660OiZwAAAHRJREFUKM/ty7cSggAABNFVUQFzwizmjPz/39k4YuFWtm55bw7eHR6ny63+alnswT3/rIDzUSC7CrAziPYCJCsB+gbVkgDtVIDh+DsE9OTBpCtAbSBAZSEQNgWIygJ0RgJMDWYNAdYbAeKtAHODlkHIv997AkLqIVOXVU84AAAAAElFTkSuQmCC)'
      : 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAMAAADp2asXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADAUExURUxpcXmHa4maet/4yA0aDRMTE8fhsgAAAAAAAMDXrCsxJeX/z1xzXIiYetPsvGBsVUdPPuH8zOH8zNDrvMvmtrrOpwAAAAAAABUVFRoaGtnyxLTMozQ+MMfftFBeSR8nH5aoh6q/mW9+ZN/4yMjhtRwlHAAAAIOWd+r/06C1kkNLOwsLC9z4xur/0+n/0t76x9v4xeL9y+b/z+j/0d/7yeH8yuX/zeD8ytz5xt76yOP/zeH+y+b/zuD8yd35xuf/0MY9jkkAAAAsdFJOUwBvd/ATDZIBAsMp/At/11c9yPbizHoICQwT4bY1ykkgjahl6s8bBYT6nUAWOLbtFAAAAIhJREFUKM/tzbUWwlAURNFBE9zdg0NecLf//yvKUJyUdDnl7HXXletXqmXl9wPbQ9JCcC+VJsOj2mDwovzj3osjHGNFEVxNRAj7UR1hlx+I4FbuC8HkZBE8OwnRxamdFsEmUxCCGdoI51RLBK9xVwTvjyMEbzlDMJMp7lqseNc8YNc6CGyF/a0vcmwhZbCG+kEAAAAASUVORK5CYII=)'};
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  ${props => (props.type === 'in' ? 'left: -12px' : 'right: -12px')};
  position: absolute;
  top: 0px;
  width: 12px;
  height: 19px;
`

Tail.propTypes = {
  type: oneOf(['in', 'out']).isRequired
}
