/**
 * Image Location
 */

// React
import React, { useEffect, useRef, useState } from 'react'
import { func, object } from 'prop-types'
import { renderToString } from 'react-dom/server'

// Style
import styled from 'styled-components'

// UI
import { RawIcons, Image, ImageMarker } from '../../../'
import { ClusterIcon } from './clusterIcon'

let imageHeight = 0
let imageWidth = 0

export const ImageWrapper = ({
  autoCloseMarkerPopup,
  coordinates,
  customIcon,
  item,
  initialZoomLevel,
  markers,
  markerStyles,
  maxZoomLevel,
  onMarkerClick,
  setCoordinates
}) => {
  const [Leaflet, setLeaflet] = useState(null)

  const createClusterCustomIcon = (cluster) => {
    return Leaflet.L.divIcon({
      html: renderToString(<ClusterIcon cluster={cluster} />),
      className: 'marker-cluster'
      // iconSize: L.point(38, 38, true)
    })
  }

  const loadModules = async () => {
    const { ImageOverlay, MapConsumer, MapContainer, Marker, Popup } = await import('react-leaflet')
    const L = (await import('leaflet')).default
    const MarkerClusterGroup = (await import('react-leaflet-markercluster')).default

    setLeaflet({
      ImageOverlay,
      MapConsumer,
      MapContainer,
      Marker,
      Popup,
      L,
      MarkerClusterGroup
    })
  }

  useEffect(() => {
    loadModules()
    return () => {}
  }, [])

  const imageRef = useRef()
  const markersArray = useRef([])
  const mapRef = useRef()

  const [MarkerCoordinates, setMarkerCoordinates] = useState(coordinates)
  const [imageDimentions, setImageDimentions] = useState({
    height: 0,
    width: 0
  })
  const bounds = [
    [imageDimentions.height, 0],
    [0, imageDimentions.width]
  ]

  const handleImageClick = (event) => {
    const { current: image } = imageRef

    imageWidth = image.clientWidth

    imageHeight = image.clientHeight

    const coordinates = {
      x: (event.nativeEvent.offsetX * 100) / imageWidth,
      y: (event.nativeEvent.offsetY * 100) / imageHeight
    }

    setCoordinates(coordinates)

    setMarkerCoordinates((co) => coordinates)
  }

  const handleLoad = () => {
    const { current: image } = imageRef

    imageWidth = image.clientWidth
    imageHeight = image.clientHeight

    markersArray.current = markers.map((item, i) => {
      let { colour, context, icon, iui, popupComponent, x, y } = item

      const tmpX = imageHeight - (y * imageHeight) / 100
      const tmpY = (x * imageWidth) / 100

      if (iui !== false) {
        iui = true
      }

      if (!colour) {
        colour = 'red'
      }

      const RawIcon = RawIcons[icon] ?? RawIcons.circle
      const iconToRender = <RawIcon {...{ icon, colour, context }} />

      const leafletIcon = Leaflet.L.divIcon({
        className: 'marker-icon',
        html: renderToString(iconToRender)
      })

      return (
        <Leaflet.Marker
          eventHandlers={{
            click: (e) => {
              const markerProps = { ...item }
              delete markerProps.popupComponent
              onMarkerClick(markerProps)
            },
            mouseover: (e) => {
              popupComponent && e.target.openPopup()
            },
            mouseout: (e) => {
              popupComponent && autoCloseMarkerPopup && e.target.closePopup()
            }
          }}
          key={i}
          position={[tmpX, tmpY]}
          icon={leafletIcon}
        >
          {popupComponent && (
            <Leaflet.Popup closeButton={!autoCloseMarkerPopup}>{popupComponent}</Leaflet.Popup>
          )}
        </Leaflet.Marker>
      )
    })

    setImageDimentions({ height: imageHeight, width: imageWidth })
    setTimeout(() => {
      initialZoomLevel && mapRef.current.setZoom(initialZoomLevel)
    }, 0)
  }

  if (Leaflet && markers) {
    return (
      <Wrapper>
        <HiddenMapImage
          ref={imageRef}
          alt={item.name}
          fluid
          src={item.filename}
          onLoad={handleLoad}
        />

        {imageDimentions.width !== 0 && (
          <Leaflet.MapContainer
            crs={Leaflet.L.CRS.Simple}
            bounds={bounds}
            maxZoom={maxZoomLevel ?? 12}
            attributionControl={false}
          >
            <Leaflet.MapConsumer>
              {(map) => {
                mapRef.current = map
                return null
              }}
            </Leaflet.MapConsumer>
            <Leaflet.MarkerClusterGroup iconCreateFunction={createClusterCustomIcon}>
              {markersArray.current}
            </Leaflet.MarkerClusterGroup>
            <Leaflet.ImageOverlay url={item.filename} bounds={bounds} />
          </Leaflet.MapContainer>
        )}
      </Wrapper>
    )
  }

  return (
    <StyledImageWrapper>
      <Image ref={imageRef} onClick={handleImageClick} alt={item.name} fluid src={item.filename} />
      {MarkerCoordinates?.x && (
        <ImageMarker
          {...{ customIcon }}
          coordinates={MarkerCoordinates}
          key={item.id}
          styles={markerStyles}
        />
      )}
    </StyledImageWrapper>
  )
}

const Wrapper = styled.div`
  .leaflet-container {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`

const HiddenMapImage = styled(Image)`
  opacity: 0;
  pointer-events: none;
`

const StyledImageWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  ${Image} {
    width: 100%;
  }
`

ImageWrapper.propTypes = {
  coordinates: object,
  item: object.isRequired,
  setCoordinates: func.isRequired
}
