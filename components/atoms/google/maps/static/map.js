/**
 * Google Static Map
 *
 * https://maps.googleapis.com/maps/api/staticmap?center=London&zoom=15&size=400x200&maptype=roadmap&key=AIzaSyBUzxbbHVhHG57UyGYrTG47eIQ8qF-yiuM'
 * "path=weight:6%7Cenc:_fisIp~u%7CU}%7Ca@pytA_~b@hhCyhS~hResU%7C%7Cx@oig@rwg@amUfbjA}f[roaAynd@%7CvXxiAt{ZwdUfbjAewYrqGchH~vXkqnAria@c_o@inc@k{g@i`]o%7CF}vXaj\h`]ovs@?yi_@rcAgtO%7Cj_AyaJren@nzQrst@zuYh`]v%7CGbldEuzd@%7C%7Cx@spD%7CtrAzwP%7Cd_@yiB~vXmlWhdPez\_{Km_`@~re@ew^rcAeu_@zhyByjPrst@ttGren@aeNhoFemKrvdAuvVidPwbVr~j@or@f_z@ftHr{ZlwBrvdAmtHrmT{rOt{Zz}E%7Cc%7C@o%7CLpn~AgfRpxqBfoVz_iAocAhrVjr@rh~@jzKhjp@``NrfQpcHrb^k%7CDh_z@nwB%7Ckb@a{R%7Cyh@uyZ%7CllByuZpzw@wbd@rh~@%7C%7CFhqs@teTztrAupHhyY}t]huf@e%7CFria@o}GfezAkdW%7C}[ocMt_Neq@ren@e~Ika@pgE%7Ci%7CAfiQ%7C`l@uoJrvdAgq@fppAsjGhg`@%7ChQpg{Ai_V%7C%7Cx@mkHhyYsdP%7CxeA~gF%7C}[mv`@t_NitSfjp@c}Mhg`@sbChyYq}e@rwg@atFff}@ghN~zKybk@fl}A}cPftcAite@tmT__Lha@u~DrfQi}MhkSqyWivIumCria@ciO_tHifm@fl}A{rc@fbjAqvg@rrqAcjCf%7Ci@mqJtb^s%7C@fbjA{wDfs`BmvEfqs@umWt_Nwn^pen@qiBr`xAcvMr{Zidg@dtjDkbM%7Cd_@"
 */

// React
import React from 'react'
import { func, element, number, oneOf, oneOfType, string } from 'prop-types'

// UI
import { encodeCircle } from '../circle'
import { GoogleMapsStaticPath } from './path'

export const GoogleMapsStatic = ({
  apiKey,
  as: Component,
  channel,
  children,
  center,
  client,
  format,
  language,
  maptype,
  onGenerate,
  region,
  rootURL,
  scale,
  signature,
  size,
  style,
  visible,
  zoom,
  ...componentProps
}) => {
  const urlBuilder = (property, value, separator) => {
    if (value) {
      return `${property}${separator}${value}`
    }

    return null
  }

  const locationBuilder = (location) => {
    const urlParts = []

    if (Array.isArray(location)) {
      const arrParts = location.map(val => locationBuilder(val))
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

  // Create the URL segment for the Path
  const renderPath = ({ props, type: { defaultProps } }) => {
    const { color, fillcolor, geodesic, points, weight, circle } = props
    const urlParts = []

    if (circle) {
      const enc = encodeCircle(circle.latitude, circle.longitude, circle.radius)
      urlParts.push(urlBuilder('', locationBuilder(`${enc}`), ''))
    }

    urlParts.push(urlBuilder('color', color, ':'))
    urlParts.push(urlBuilder('weight', weight, ':'))
    urlParts.push(urlBuilder('fillcolor', fillcolor, ':'))
    urlParts.push(urlBuilder('geodesic', geodesic, ':'))
    urlParts.push(urlBuilder('', locationBuilder(points), ''))

    const url = urlParts.filter(x => x).join('%7C')

    return `path=${url}`
  }

  // Render Children parts
  const renderParts = () => {
    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return null
      }

      switch (child.type) {
        case GoogleMapsStaticPath:
          return renderPath(child)
      }
    })
  }

  // Create the base map URL
  const renderBaseMap = () => {
    const urlParts = []
    urlParts.push(urlBuilder('key', apiKey, '='))
    urlParts.push(urlBuilder('center', center, '='))
    urlParts.push(urlBuilder('channel', channel, '='))
    urlParts.push(urlBuilder('client', client, '='))
    urlParts.push(urlBuilder('format', format, '='))
    urlParts.push(urlBuilder('language', language, '='))
    urlParts.push(urlBuilder('maptype', maptype, '='))
    urlParts.push(urlBuilder('region', region, '='))
    urlParts.push(urlBuilder('scale', scale, '='))
    urlParts.push(urlBuilder('signature', signature, '='))
    urlParts.push(urlBuilder('size', size, '='))
    urlParts.push(urlBuilder('style', style, '='))
    urlParts.push(urlBuilder('visible', visible, '='))
    urlParts.push(urlBuilder('zoom', zoom, '='))
    const parts = urlParts.filter(x => x).join('&')
    return `${rootURL}?${parts}`
  }

  // invariant(size, 'size property is not set')
  // invariant(
  //   children,
  //   'Component must have `Marker`, `Path` or `Direction` child'
  // )

  const childrenUrlParts = renderParts() || []
  const mainUrlParts = renderBaseMap()

  /**
   * All the parts should return a string if a component that does not return a promise isn't used
   * The Directions's component returns a promise and would instead use the Async component to render
   * This allows us render sync otherwise and partially support server side rendering.
   */
  // if (!childrenUrlParts.some(part => typeof part === 'object')) {
  //   const childURL = childrenUrlParts.filter(part => part).join('&')
  //   const url = `${mainUrlParts}&${childURL}`

  //   if (onGenerate) {
  //     onGenerate(url)
  //   }

  //   return <Component {...componentProps} src={url} />
  // }

  // const urlParts = Promise.all(childrenUrlParts).then(
  //   parts => `${mainUrlParts}&${parts.filter(part => part).join('&')}`
  // )

  return (
    <>
      <Component {...componentProps} src={`${mainUrlParts}&${childrenUrlParts}`} />
    </>

  // <Async
  //   promise={urlParts}
  //   then={URL => {
  //     if (onGenerate) {
  //       onGenerate(URL)
  //     }

  //     return <Component {...componentProps} src={URL} />
  //   }}
  //   catch={err => (
  //     console.error(err), <span>Image generation failed.</span>
  //   )}
  // />
  )
}

GoogleMapsStatic.propTypes = {
  apiKey: string.isRequired,
  as: oneOfType([element, string]),
  center: string,
  channel: string,
  client: string,
  format: oneOf([
    'png',
    'png8',
    'png32',
    'gif',
    'jpg',
    'jpg-baseline'
  ]),
  language: string,
  maptype: oneOf(['roadmap', 'satellite', 'terrain', 'hybrid']),
  onGenerate: func,
  region: string,
  rootURL: string,
  scale: oneOf([1, 2, 4, '1', '2', '4']),
  signature: string,
  size: string.isRequired,
  style: string,
  visible: string,
  zoom: number
}

GoogleMapsStatic.urlBuilderdefaultProps = {
  as: 'img',
  // center: 'London',
  format: 'png',
  maptype: 'roadmap',
  // region: 'uk',
  rootURL: 'https://maps.googleapis.com/maps/api/staticmap',
  scale: 1,
  size: '400x200',
  zoom: 15
}
