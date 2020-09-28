/**
 * Table
 */

// Component
import { TableDogs } from '../'
import Readme from '../README.md'

const Rows = [
  {
    name: 'Dog',
    breedName: 'Cockapoo',
    price: 1000,
    applications: 0,
    approved: 'Yes',
    dogId: 100,
    gender: 'male'
  }
]

export default {
  title: 'Molecules/Dog/Table',
  component: TableDogs,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <TableDogs dogs={Rows} path='/' />
