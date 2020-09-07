/**
 * Google - GeoCoder
 */

// Axios
import axios from 'axios'

export class GeoCoder {
  constructor ({ apiKey, debug = false, language, region }) {
    this.apiKey = apiKey
    this.debug = debug
    this.language = language
    this.region = region
    this.GOOGLE_API_URL = 'https://maps.google.com/maps/api/geocode/json'
  }

  log (message, warn = false) {
    if (this.debug) {
      if (warn) {
        console.warn(message)
      } else {
        console.info(message)
      }
    }
  }

  async handleUrl (url) {
    const response = await axios
      .get(url)
      .catch(() => Promise.reject(new Error('Error fetching data')))

    if (response.data.status === 'OK') {
      this.log(response.data)
      return response.data
    }

    this.log(`${response.statusText}.\nServer returned status code ${response.statusText}`, true)

    return Promise.reject(
      new Error(`${response.statusText}.\nServer returned status code ${response.statusText}`)
    )
  }

  async fromAddress ({ address, city = '' }) {
    if (!address) {
      this.log('Provided address is invalid', true)
      return Promise.reject(new Error('Provided address is invalid'))
    }

    const location = encodeURIComponent(city + ', ' + address)

    let url = `${this.GOOGLE_API_URL}?address=${location}`

    if (this.apiKey) {
      url += `&key=${this.apiKey}`
    }

    if (this.language) {
      url += `&language=${this.language}`
    }

    if (this.region) {
      url += `&region=${encodeURIComponent(this.region)}`
    }

    const {
      results: [result]
    } = await this.handleUrl(url)

    const {
      geometry: {
        location: { lat, lng }
      }
    } = result

    const coordinates = { lat, lng }
    return Promise.resolve(coordinates)
  }
}
