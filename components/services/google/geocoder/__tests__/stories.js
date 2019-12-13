/**
 * Location
 */

// React
import React, { useState } from 'react'

import { GeoCoder } from '../'
import { Button, Column, Form, Input, Row, useForm, useGeoCoder } from '../../../../'

export default {
  title: 'Services/Google/GeoCoder',
  component: GeoCoder
}

export const main = () => {
  const [coordinates, setCoordinates] = useState({ lat: '', lng: '' })

  const geoState = {
    address: 'SW1P 3PA',
    city: 'london',
    region: 'uk',
    language: 'en'
  }

  const { change, form } = useForm(geoState)
  const { address, city, region, language } = form

  const { lat, lng } = useGeoCoder({
    apiKey: 'AIzaSyAemr12bOOt2SLS_RiBh8o1UZhDTkE_SIU',
    address,
    city,
    region,
    language
  })

  const getCoordinates = async () => {
    const geo = new GeoCoder({
      apiKey: 'AIzaSyAemr12bOOt2SLS_RiBh8o1UZhDTkE_SIU',
      language,
      region
    })

    const coordinates = await geo.fromAddress({ address, city })
    setCoordinates(coordinates)
  }

  const submitForm = () => {
    getCoordinates()
  }

  return (
    <Row>
      <Column md={8}>
        <Form submit={submitForm}>
          <Input change={change} label='Address' id='address' value={address} />
          <Input change={change} label='City' id='city' value={city} />
          <Input change={change} label='Region' id='region' value={region} />
          <Input change={change} label='Language' id='language' value={language} />
          <Button centre secondary type='submit'>
            Get Coordinates
          </Button>
        </Form>
      </Column>
      <Column md={4}>
        <br />
        Latitude: {coordinates.lat || lat}
        <br />
        <br />
        Longitude: {coordinates.lng || lng}
      </Column>
    </Row>
  )
}
