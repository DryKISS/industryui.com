/**
 * Google Maps Path and Path Group
 */
import React from 'react'
import { any, bool, number, oneOfType, string } from 'prop-types'

const propTypes = {
  circle: any,
  color: string,
  fillcolor: string,
  geodesic: bool,
  points: any,
  weight: oneOfType([string, number])
}

const groupPropTypes = {
  color: string,
  fillcolor: string,
  geodesic: bool,
  weight: oneOfType([string, number])
}

const defaultProps = {
  geodesic: false,
  weight: 5
}

const GoogleMapsStaticPath = props => null
GoogleMapsStaticPath.propTypes = propTypes
GoogleMapsStaticPath.defaultProps = defaultProps

const GoogleMapsStaticPathGroup = props => null
GoogleMapsStaticPathGroup.propsTypes = groupPropTypes
GoogleMapsStaticPathGroup.defaultProps = defaultProps

GoogleMapsStaticPath.Group = GoogleMapsStaticPathGroup

export { GoogleMapsStaticPath }
