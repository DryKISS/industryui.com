/**
 * Google - GeoCoder
 */

// React
import React, { useState } from 'react'

// React Hook Form
import { useForm } from 'react-hook-form'

// UI
import Button from '../../../../atoms/button/button/button'
import Column from '../../../../atoms/grid/Column'
import Form from '../../../../form/form/form'
import Input from '../../../../form/input/input'
import Label from '../../../../form/label/label'
import GeoCoder from '../geocoder'
import Row from '../../../../atoms/grid/Row'
import useGeoCoder from '../../../../hooks/useGeoCoder'
import Readme from '../README.md'

export default {
  title: 'Services/Google/GeoCoder',
  component: GeoCoder,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const Main = () => {
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

  const submitForm = (data) => {
    getCoordinates(data)
  }

  return (
    <Row>
      <Column md={8}>
        <Form handleSubmit={handleSubmit(submitForm)}>
          <Label label="Address">
            <Input register={register} label="Address" name="address" />
          </Label>

          <Label label="Address">
            <Input register={register} label="City" name="city" />
          </Label>

          <Label label="Address">
            <Input register={register} label="Region" name="region" />
          </Label>

          <Label label="Address">
            <Input register={register} label="Language" name="language" />
          </Label>
          <Button centre secondary type="submit">
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
