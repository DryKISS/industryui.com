/**
 * Google Static Map Service Class
 * Description: Generates an url for the static map
 *
 * @param {Array} Obj.paths
 * [{ color: '0x003753', geodesic: true, weight: '5', points: ['WC2E 9DD', 'SW1A']}]
 */

// UI
import { encodeCircle } from './circle'

export class StaticMap {
  constructor ({
    apiKey,
    center,
    channel,
    client,
    format = 'png',
    language,
    location = '',
    maptype = 'roadmap',
    markers = [],
    paths = [],
    region,
    rootURL = 'https://maps.googleapis.com/maps/api/staticmap',
    scale = 1,
    signature,
    size = '400x200',
    style,
    visible,
    zoom = 15
  }) {
    this.apiKey = apiKey
    this.channel = channel
    this.center = center
    this.client = client
    this.format = format
    this.language = language
    this.location = location
    this.maptype = maptype
    this.markers = markers
    this.paths = paths
    this.region = region
    this.rootURL = rootURL
    this.scale = scale
    this.signature = signature
    this.size = size
    this.style = style
    this.visible = visible
    this.zoom = zoom
  }

  urlBuilder (property, value, separator) {
    if (value) {
      return `${property}${separator}${value}`
    }

    return null
  }

  renderBaseMap () {
    const urlParts = []
    urlParts.push(this.urlBuilder('key', this.apiKey, '='))
    urlParts.push(this.urlBuilder('center', this.center, '='))
    urlParts.push(this.urlBuilder('channel', this.channel, '='))
    urlParts.push(this.urlBuilder('client', this.client, '='))
    urlParts.push(this.urlBuilder('format', this.format, '='))
    urlParts.push(this.urlBuilder('language', this.language, '='))
    urlParts.push(this.urlBuilder('maptype', this.maptype, '='))
    urlParts.push(this.urlBuilder('region', this.region, '='))
    urlParts.push(this.urlBuilder('scale', this.scale, '='))
    urlParts.push(this.urlBuilder('signature', this.signature, '='))
    urlParts.push(this.urlBuilder('size', this.size, '='))
    urlParts.push(this.urlBuilder('style', this.style, '='))
    urlParts.push(this.urlBuilder('visible', this.visible, '='))
    urlParts.push(this.urlBuilder('zoom', this.zoom, '='))
    const parts = urlParts.filter(x => x).join('&')
    return `${this.rootURL}?${parts}`
  }

  locationBuilder (location) {
    const urlParts = []

    if (Array.isArray(location)) {
      const arrParts = location.map(val => this.locationBuilder(val))
      urlParts.push(...arrParts)
    }

    if (typeof location === 'string' || typeof location === 'number') {
      urlParts.push(encodeURI(location))
    }

    if (typeof location === 'object' && location.lat && location.lng) {
      urlParts.push(`${location.lat},${location.lng}`)
    }

    return urlParts.join('%7C')
  }

  // Create the URL segment for the Path
  renderPath ({ circle, color, fillcolor, geodesic, points, weight }) {
    const urlParts = []

    if (circle) {
      const enc = encodeCircle(circle.latitude, circle.longitude, circle.radius)
      urlParts.push(this.urlBuilder('', this.locationBuilder(`${enc}`), ''))
    }

    urlParts.push(this.urlBuilder('color', color, ':'))
    urlParts.push(this.urlBuilder('weight', weight, ':'))
    urlParts.push(this.urlBuilder('fillcolor', fillcolor, ':'))
    urlParts.push(this.urlBuilder('geodesic', geodesic, ':'))
    urlParts.push(this.urlBuilder('', this.locationBuilder(points), ''))

    const url = urlParts.filter(x => x).join('%7C')

    return `path=${url}`
  }

  renderParts () {
    return this.paths.map(path => {
      return this.renderPath(path)
    })
  }

  renderMarkers () {
    const { markers, locationBuilder, location } = this
    let urlParts = {}

    if (markers.length) {
      urlParts = markers.map(marker => {
        let markerUrl = 'markers='
        switch (typeof marker) {
          case 'string': {
            markerUrl += locationBuilder(marker)
            break
          }
          case 'object': {
            const { colour, label, location } = marker
            const markerColour = colour && `color:${colour}|`
            const markerLabel = label && `label:${label}|`
            const markerLocation = location && `${locationBuilder(location)}|`
            markerUrl += markerColour + markerLabel + markerLocation
            break
          }
        }

        return markerUrl
      })
    } else {
      urlParts = [`markers=${locationBuilder(location)}`]
    }

    return urlParts.join('&')
  }

  generateUrl () {
    const childrenUrlParts = this.renderParts() || []
    const mainUrlParts = this.renderBaseMap()
    const markerParts = this.renderMarkers()

    const url = `${mainUrlParts}&${childrenUrlParts}&${markerParts}`
    return url
  }
}
