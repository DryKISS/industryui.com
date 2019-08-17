/**
 * Location
 * Showcases a static map based on a location
 */

// React
import { string } from 'prop-types'

// UI
import { Card, CardBody } from '../../'

export const Location = ({ apiKey, location }) => {
  const url = 'https://maps.googleapis.com/maps/api/staticmap'

  return (
    <Card
      alt={location}
      bordered
      context='light'
      image={`${url}?center=${location}+uk&zoom=15&size=400x200&maptype=roadmap&key=${apiKey}`}
      shadow
    >
      <CardBody>
        {location}
      </CardBody>
    </Card>
  )
}

Location.propTypes = {
  apiKey: string.isRequired,
  location: string.isRequired
}
