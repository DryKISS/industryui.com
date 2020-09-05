import { bool, func, shape, string, number, object } from 'prop-types'

export const ImageLocationProps = {
  className: string,
  coordinatesChange: func,
  initialCoordinates: shape({
    x: number,
    y: number
  }),
  item: shape({
    filename: string,
    name: string,
    value: number
  }),
  markerStyles: object,
  show: bool,
  style: object
}
