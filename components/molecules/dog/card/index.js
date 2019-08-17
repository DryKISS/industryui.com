/**
 * Dog Card
 * Card used to display a dog on Tailwise
 *
 * Usage
 * <DogCard {...dog} />
 */

// React
import { bool, number, string } from 'prop-types'

// UI
import {
  Card,
  CardBody,
  DogName,
  formatPrice,
  slugify
} from '../../../'

export const DogCard = ({
  breed,
  breedName,
  breeder,
  dogId,
  gender,
  image,
  name,
  price,
  sell
}) => {
  const breederSlug = slugify(breeder)
  const nameSlug = slugify(name)

  return (
    <Card
      alt={breed}
      bordered
      context='light'
      footer={breedName}
      image={image}
      to={{
        as: `/breeders/${breederSlug}/dogs/${nameSlug}/${dogId}`,
        href: {
          pathname: `/breeders/dogs/profile`,
          query: {
            breederSlug: breederSlug,
            dogId: dogId,
            dogSlug: nameSlug
          }
        }
      }}
    >
      <CardBody>
        <DogName row={{ gender: gender, name: name }} />

        {sell &&
          <div className='float-right'>
            {formatPrice(price)}
          </div>
        }
      </CardBody>

    </Card>
  )
}

DogCard.propTypes = {
  breed: string.isRequired,
  breedName: string,
  breeder: string.isRequired,
  dogId: string.isRequired,
  gender: string.isRequired,
  image: string.isRequired,
  name: string.isRequired,
  price: number.isRequired,
  sell: bool
}
