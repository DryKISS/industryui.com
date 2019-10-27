/**
 * Message
 */

// React
import { string } from 'prop-types'

// UI
import { Card, Column, Icon, Image, Row } from 'components'
import { Tail } from '../../'

// Style
import styled from 'styled-components'

export const Message = ({
  content,
  pictureId,
  prevType,
  statusText,
  time,
  type
}) => {
  const context = type === 'in' ? 'white' : 'light'

  return (
    <Column sm={11}>

      <StyledCard context={context} type={type}>

        {prevType !== type && <Tail type={type} />}

        <Row>
          <Column sm={12}>
            <StyledTime>{time}</StyledTime>
          </Column>
        </Row>

        <Row>
          {pictureId &&
            <Column sm={2}>
              <Image alt='Image' src={pictureId} />
            </Column>}

          <Column sm={pictureId ? 8 : !type ? 11 : 12}>
            {content}
          </Column>

          {!type &&
            <Column sm={1}>
              <Icon
                color={statusText === 'Delivered' ? 'green' : '#bbb'}
                icon='check-circle'
              />
            </Column>}
        </Row>

      </StyledCard>

    </Column>
  )
}

const StyledCard = styled(Card)`
  background-color: ${props => props.type === 'in' ? '#fff' : '#dcf8c6'};
  ${props => props.type === 'in'
    ? 'border-top-left-radius: 0'
    : 'border-top-right-radius: 0'
  };
  box-shadow: 0 1px .5px rgba(0, 0, 0, .2);
  margin: .1rem 0;
  padding: .5rem;
`

const StyledTime = styled.span`
  color: ${props => 'rgba(0, 0, 0, .4)'};
  font-size: 12px;
`

Message.propTypes = {
  content: string,
  pictureId: string,
  statusText: string,
  time: string,
  type: string
}
