/**
 * Location
 */

// React
import React, { useState } from 'react'

// Form
import { useForm } from 'react-hook-form'

import { GeoCoder } from '../'
import { Button, Column, FormForm, FormField, FormLabel, Row, useGeoCoder } from '../../../../'

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

  const { handleSubmit, register, watch } = useForm({
    defaultValues: geoState
  })

  const address = watch('address')
  const city = watch('city')
  const region = watch('region')
  const language = watch('language')

  const { lat, lng } = useGeoCoder({
    apiKey: 'AIzaSyAemr12bOOt2SLS_RiBh8o1UZhDTkE_SIU',
    address,
    city,
    region,
    language
  })

  const getCoordinates = async ({ address, city, language, region }) => {
    const geo = new GeoCoder({
      apiKey: 'AIzaSyAemr12bOOt2SLS_RiBh8o1UZhDTkE_SIU',
      language,
      region
    })

    const coordinates = await geo.fromAddress({ address, city })
    setCoordinates(coordinates)
  }

  const submitForm = data => {
    getCoordinates(data)
  }

  return (
    <Row>
      <Column md={8}>
        <FormForm handleSubmit={handleSubmit(submitForm)}>
          <FormLabel label='Address'>
            <FormField register={register} label='Address' name='address' />
          </FormLabel>

          <FormLabel label='Address'>
            <FormField register={register} label='City' name='city' />
          </FormLabel>

          <FormLabel label='Address'>
            <FormField register={register} label='Region' name='region' />
          </FormLabel>

          <FormLabel label='Address'>
            <FormField register={register} label='Language' name='language' />
          </FormLabel>
          <Button centre secondary type='submit'>
            Get Coordinates
          </Button>
        </FormForm>
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
