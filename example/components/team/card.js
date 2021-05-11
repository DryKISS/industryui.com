/**
 * Team - Card
 */

// Style
import styled from 'styled-components'

// UI
import { Card, CardBody, Icon, Image } from '@drykiss/industry-ui'

export const TeamCard = ({ data }) => {
  return (
    <Card center bordered to={data.link}>
      <StyledImage alt={data.name} src={`/images/team/${data.id}.jpg`} />

      <CardBody>
        {data.name}

        <Icon
          context="primary"
          icon={data.icon || 'linkedin'}
          prefix="fab"
          size="lg"
          pull="right"
        />
      </CardBody>
    </Card>
  )
}

const StyledImage = styled(Image)`
  filter: grayscale(100%);
`
