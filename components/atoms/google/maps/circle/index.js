/**
 * Google Maps Circle
 * Creates or encodes a Circle for use on a Google Map
 *
 * @see https://developers.google.com/maps/documentation/javascript/shapes#circles
 * @see https://developers.google.com/maps/documentation/javascript/examples/circle-simple
 *
 * @see https://stackoverflow.com/questions/36506668/google-static-map-draw-a-circle
 * @see https://stackoverflow.com/questions/7316963/drawing-a-circle-google-static-maps
 */

function locationBuilder (location) {
  const urlParts = []

  if (Array.isArray(location)) {
    const arrParts = location.map(val => this.locationBuilder(val))
    urlParts.push(...arrParts)
  }

  if (typeof location === 'string' || typeof location === 'number') {
    urlParts.push(location)
  }

  if (typeof location === 'object' && location.lat && location.lng) {
    urlParts.push(`${location.lat},${location.lng}`)
  }

  return urlParts.join('%7C')
}

function GMapCircle (lat, lng, rad, detail = 8) {
  const r = 6371
  const pi = Math.PI
  let staticMapSrc = ''

  const _lat = (lat * pi) / 180
  const _lng = (lng * pi) / 180
  const d = rad / 1000 / r

  let i = 0

  for (i = 0; i <= 360; i += detail) {
    const brng = (i * pi) / 180

    let pLat = Math.asin(
      Math.sin(_lat) * Math.cos(d) + Math.cos(_lat) * Math.sin(d) * Math.cos(brng)
    )
    const pLng =
      ((_lng +
        Math.atan2(
          Math.sin(brng) * Math.sin(d) * Math.cos(_lat),
          Math.cos(d) - Math.sin(_lat) * Math.sin(pLat)
        )) *
        180) /
      pi
    pLat = (pLat * 180) / pi

    staticMapSrc += locationBuilder(pLat + ',' + pLng)
    // staticMapSrc += '|' + pLat + ',' + pLng
  }

  return encodeURI(staticMapSrc)
}

export function encodeCircle (latitude, longitude, radius) {
  const circle = GMapCircle(latitude, longitude, radius)
  return circle
}
