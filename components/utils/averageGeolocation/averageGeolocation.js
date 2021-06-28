/**
 * average geolocation center
 * @param {Array<{lat:number,lng:number}>} coords
 */

export const averageGeolocation = (coords) => {
  if (coords.length === 1) {
    return coords[0]
  }

  let x = 0.0
  let y = 0.0
  let z = 0.0

  for (const coord of coords) {
    const latitude = (coord.lat * Math.PI) / 180
    const longitude = (coord.lng * Math.PI) / 180

    x += Math.cos(latitude) * Math.cos(longitude)
    y += Math.cos(latitude) * Math.sin(longitude)
    z += Math.sin(latitude)
  }

  const total = coords.length

  x = x / total
  y = y / total
  z = z / total

  const centralLongitude = Math.atan2(y, x)
  const centralSquareRoot = Math.sqrt(x * x + y * y)
  const centralLatitude = Math.atan2(z, centralSquareRoot)

  return {
    lat: (centralLatitude * 180) / Math.PI,
    lng: (centralLongitude * 180) / Math.PI
  }
}
export default averageGeolocation
