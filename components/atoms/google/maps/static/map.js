/**
 * Google Static Map
 *
 * https://maps.googleapis.com/maps/api/staticmap?center=London&zoom=15&size=400x200&maptype=roadmap&key=AIzaSyBUzxbbHVhHG57UyGYrTG47eIQ8qF-yiuM'
 * "path=weight:6%7Cenc:_fisIp~u%7CU}%7Ca@pytA_~b@hhCyhS~hResU%7C%7Cx@oig@rwg@amUfbjA}f[roaAynd@%7CvXxiAt{ZwdUfbjAewYrqGchH~vXkqnAria@c_o@inc@k{g@i`]o%7CF}vXaj\h`]ovs@?yi_@rcAgtO%7Cj_AyaJren@nzQrst@zuYh`]v%7CGbldEuzd@%7C%7Cx@spD%7CtrAzwP%7Cd_@yiB~vXmlWhdPez\_{Km_`@~re@ew^rcAeu_@zhyByjPrst@ttGren@aeNhoFemKrvdAuvVidPwbVr~j@or@f_z@ftHr{ZlwBrvdAmtHrmT{rOt{Zz}E%7Cc%7C@o%7CLpn~AgfRpxqBfoVz_iAocAhrVjr@rh~@jzKhjp@``NrfQpcHrb^k%7CDh_z@nwB%7Ckb@a{R%7Cyh@uyZ%7CllByuZpzw@wbd@rh~@%7C%7CFhqs@teTztrAupHhyY}t]huf@e%7CFria@o}GfezAkdW%7C}[ocMt_Neq@ren@e~Ika@pgE%7Ci%7CAfiQ%7C`l@uoJrvdAgq@fppAsjGhg`@%7ChQpg{Ai_V%7C%7Cx@mkHhyYsdP%7CxeA~gF%7C}[mv`@t_NitSfjp@c}Mhg`@sbChyYq}e@rwg@atFff}@ghN~zKybk@fl}A}cPftcAite@tmT__Lha@u~DrfQi}MhkSqyWivIumCria@ciO_tHifm@fl}A{rc@fbjAqvg@rrqAcjCf%7Ci@mqJtb^s%7C@fbjA{wDfs`BmvEfqs@umWt_Nwn^pen@qiBr`xAcvMr{Zidg@dtjDkbM%7Cd_@"
 */
import React, { Component, Fragment } from 'react'
import { func, element, number, oneOf, oneOfType, string } from 'prop-types'

// UI
import { encodeCircle } from '../circle'
import { GoogleMapsStaticPath } from './path'

// Style
import { withTheme } from 'styled-components'

export const GoogleMapsStatic = withTheme(
  class GoogleMapsStatic extends Component {
    static propTypes = {
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
    };

    static defaultProps = {
      as: 'img',
      // center: 'London',
      format: 'png',
      maptype: 'roadmap',
      // region: 'uk',
      rootURL: 'https://maps.googleapis.com/maps/api/staticmap',
      scale: 1,
      size: '400x200',
      zoom: 15
    };

    //
    urlBuilder = (property, value, separator) => {
      if (value) {
        return `${property}${separator}${value}`
      }

      return null
    }

    //
    locationBuilder = (location) => {
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

    // Create the URL segment for the Path
    renderPath = ({ props, type: { defaultProps } }, parentProps) => {
      const { color, fillcolor, geodesic, points, weight, circle } = props
      const urlParts = []

      if (circle) {
        const enc = encodeCircle(circle.latitude, circle.longitude, circle.radius)
        // console.log('renderPath', encodeCircle(circle.latitude, circle.longitude, circle.radius), circle)
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

    // Render Children parts
    renderParts (children, props) {
      return React.Children.map(children, child => {
        if (!React.isValidElement(child)) {
          return null
        }

        switch (child.type) {
          case GoogleMapsStaticPath:
            return this.renderPath(child, props)
        }
      })
    }

    // Create the base map URL
    renderBaseMap = (props) => {
      const {
        apiKey,
        center,
        channel,
        client,
        format,
        language,
        maptype,
        region,
        rootURL,
        scale,
        size,
        style,
        signature,
        visible,
        zoom
      } = props

      const urlParts = []
      urlParts.push(this.urlBuilder('key', apiKey, '='))
      urlParts.push(this.urlBuilder('center', center, '='))
      urlParts.push(this.urlBuilder('channel', channel, '='))
      urlParts.push(this.urlBuilder('client', client, '='))
      urlParts.push(this.urlBuilder('format', format, '='))
      urlParts.push(this.urlBuilder('language', language, '='))
      urlParts.push(this.urlBuilder('maptype', maptype, '='))
      urlParts.push(this.urlBuilder('region', region, '='))
      urlParts.push(this.urlBuilder('scale', scale, '='))
      urlParts.push(this.urlBuilder('signature', signature, '='))
      urlParts.push(this.urlBuilder('size', size, '='))
      urlParts.push(this.urlBuilder('style', style, '='))
      urlParts.push(this.urlBuilder('visible', visible, '='))
      urlParts.push(this.urlBuilder('zoom', zoom, '='))
      const parts = urlParts.filter(x => x).join('&')

      return `${rootURL}?${parts}`
    }

    render () {
      const { children, onGenerate, as: Component, ...props } = this.props
      const {
        apiKey,
        channel,
        center,
        client,
        format,
        language,
        maptype,
        region,
        rootURL,
        scale,
        signature,
        size,
        style,
        visible,
        zoom,
        ...componentProps
      } = props

      // invariant(size, 'size property is not set')
      // invariant(
      //   children,
      //   'Component must have `Marker`, `Path` or `Direction` child'
      // )

      const childrenUrlParts = this.renderParts(children, props) || []
      const mainUrlParts = this.renderBaseMap(props)

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
        <Fragment>
          <Component {...componentProps} src={`${mainUrlParts}&${childrenUrlParts}`} />
        </Fragment>

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
  }
)
