/**
 * Dynamic Location
 * Showcases a dynamic map based on a location
 */

// React
import React from 'react'
import { array, node, string } from 'prop-types'

// React Google Maps
import {
  GoogleMap,
  InfoWindow as GoogleInfoWindow,
  withGoogleMap,
  withScriptjs
} from 'react-google-maps'

const DynamicLocationHOC = (Component) => {
  return (props) => {
    // concat the apiKey
    const googleMapURL = `${props.googleMapURL}&key=${props.apiKey}`

    const containerElement = props.containerElement || (
      <div style={{ height: props.containerHeight, width: props.containerWidth }} />
    )

    return <Component {...props} containerElement={containerElement} googleMapURL={googleMapURL} />
  }
}

const DynamicLocation = DynamicLocationHOC(
  withScriptjs(
    withGoogleMap((props) => {
      return props.defaultCenter.lat && props.defaultCenter.lng ? <GoogleMap {...props} /> : null
    })
  )
)

DynamicLocation.propTypes = {
  apiKey: string.isRequired,
  containerElement: node,
  containerHeight: string,
  containerWidth: string,
  loadingElement: node.isRequired,
  googleMapURL: string.isRequired,
  mapElement: node.isRequired,
  markers: array,
  ...GoogleMap.propTypes
}

DynamicLocation.defaultProps = {
  googleMapURL: 'https://maps.googleapis.com/maps/api/js?',
  loadingElement: <div style={{ height: '100%' }} />,
  containerHeight: '400px',
  containerWidth: '100%',
  mapElement: <div style={{ height: '100%' }} />,
  zoom: 15
}

export default DynamicLocation
