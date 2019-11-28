/**
 * Notification
 */

// React
import { func, number, object, oneOfType, string } from 'prop-types'

// UI
import { Alert, formatRelativeTime, Link } from '../../../'

// Style
import styled from 'styled-components'

export const Notification = ({ close, content, date, link, priority, title }) => {
  const context = priority === 1 ? 'warning' : 'info'

  let body = (
    <>
      <StyledNotificationBody>{content}</StyledNotificationBody>
      {date && <StyledDate>{formatRelativeTime(date)}</StyledDate>}
    </>
  )

  if (link) {
    body = (
      <Link to={{ href: link }}>
        <a onClick={() => close()}>{body}</a>
      </Link>
    )
  }

  return (
    <StyledNotificationWrapper>
      <Alert
        close={close}
        content={body}
        context={context}
        header={title}
        style={{ border: 0, margin: 0 }}
      />
    </StyledNotificationWrapper>
  )
}

const StyledNotificationWrapper = styled.div`
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  max-width: 100%;
  width: 350px;
`

const StyledNotificationBody = styled.div`
  color: #fff;
`

const StyledDate = styled.time`
  border-top: 1px solid #eaeaea;
  color: #eaeaea;
  display: block;
  font-size: 0.9rem;
  margin-top: 15px;
  padding-top: 0.25rem;
`

Notification.propTypes = {
  close: func,
  content: oneOfType([object, string]).isRequired,
  date: string,
  link: string,
  priority: number,
  title: string
}
