/**
 * Molecules - Notification
 */

// React
import { func, object, oneOf, oneOfType, string } from 'prop-types'

// UI
import { Alert, CONTEXT, formatRelativeTime, Link } from '../../'

// Style
import styled from 'styled-components'

export const Notification = ({ close, content, context, date, icon, link, title }) => {
  let body = (
    <>
      <StyledNotificationBody>{content}</StyledNotificationBody>
      {date && <StyledDate>{formatRelativeTime(date)}</StyledDate>}
    </>
  )

  if (link) {
    body = (
      <Link border={false} to={{ href: link }} onClick={() => close()}>
        {body}
      </Link>
    )
  }

  return (
    <StyledNotificationWrapper>
      <Alert close={close} content={body} context={context} header={title} icon={icon} />
    </StyledNotificationWrapper>
  )
}

const StyledNotificationWrapper = styled.div`
  border-radius: 0.25rem;
  box-shadow: rgba(45, 62, 80, 0.12) 0 1px 5px 0;
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
  close: func.isRequired,
  content: oneOfType([object, string]).isRequired,
  context: oneOf(Object.values(CONTEXT)),
  date: string,
  icon: string,
  link: string,
  title: string
}
