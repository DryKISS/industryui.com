/**
 * Messaging/Message
 */

// React
import { string } from 'prop-types'

// UI
import { Card, Column, Icon, Image, Row, Truncate } from '../../../../'
// import { Tail } from '../../'

// Style
import styled from 'styled-components'

export const Message = ({
  content,
  from,
  icon,
  more,
  pictureId,
  prevType,
  reply,
  statusText,
  time,
  to,
  type
}) => {
  const IconSelect = () => {
    let useIcon = ''

    switch (icon) {
      case 'comment':
        useIcon = 'comment-dots'
        break
      case 'notification':
        useIcon = 'bell'
        break

      default:
        useIcon = 'envelope'
        break
    }

    return <StyledIcon fixedWidth={false} icon={useIcon} prefix='fad' />
  }

  return (
    <Column sm={11}>
      <StyledCard type={type}>
        {/* {prevType !== type && <Tail type={type} />} */}

        <Row>
          <Column sm={6}>
            <IconSelect />
            {to && (
              <>
                <StyledImage alt='customer' src='/messaging/customer.svg' />
                <StyledImage alt='supplier' src='/messaging/supplier.svg' />
              </>
            )}
            <StyledTime>{time}</StyledTime>
          </Column>

          <Column sm={6}>
            <StyledFrom>{from}</StyledFrom>
          </Column>
        </Row>

        <Row>
          {pictureId && (
            <Column sm={2}>
              <Image alt='Image' src={pictureId} />
            </Column>
          )}

          <Column sm={pictureId ? 8 : !type ? 11 : 12}>
            <StyledReply>{reply}</StyledReply>
            <StyledContent>{content}</StyledContent>

            {more && (
              <StyledCollapse>
                See more
                <Icon icon='chevron-down' />
              </StyledCollapse>
            )}
          </Column>

          {!type && (
            <Column sm={1}>
              <Icon color={statusText === 'Delivered' ? 'green' : '#bbb'} icon='check-circle' />
            </Column>
          )}
        </Row>
      </StyledCard>
    </Column>
  )
}

// /* ${props =>
//     props.type === 'in' ? 'border-top-left-radius: 0' : 'border-top-right-radius: 0'}; */
// /* box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.2); */

const StyledCard = styled(Card)`
  background-color: ${({ type }) => (type === 'in' ? '#fff' : '#F7F7F7')};
  border-radius: 1rem;
  margin-bottom: 0.5rem;
  padding: 0.75rem 1rem;
`

const StyledContent = styled.div`
  color: #000;
  ${props => Truncate()}
`

const StyledReply = styled.div`
  color: #696969;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
`

const StyledCollapse = styled.div`
  color: #faac46;
  font-size: 0.75rem;
  text-transform: uppercase;
`

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.COLOUR.primary};
  margin-right: 0.5rem;
  vertical-align: middle !important;
`

const StyledImage = styled(Image)`
  margin-right: 0.5rem;
  vertical-align: middle !important;
`

const StyledTime = styled.span`
  color: ${({ theme }) => theme.COLOUR.primary};
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
`

const StyledFrom = styled(StyledTime)`
  display: block;
  text-align: right;
`

Message.propTypes = {
  content: string,
  pictureId: string,
  statusText: string,
  time: string,
  type: string
}
