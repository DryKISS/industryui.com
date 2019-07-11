/**
 * Location
 * Showcases a static map based on a location in the UK
 */

// UI
import { Card, CardBody } from 'industry-ui'

export const Location = ({ location }) =>
  <Card
    alt={location}
    bordered
    context='light'
    image={`https://maps.googleapis.com/maps/api/staticmap?center=${location}+uk&zoom=15&size=400x200&maptype=roadmap&key=AIzaSyBUzxbbHVhHG57UyGYrTG47eIQ8qF-yiuM`}
    shadow
  >
    <CardBody>
      {location}
    </CardBody>
  </Card>
