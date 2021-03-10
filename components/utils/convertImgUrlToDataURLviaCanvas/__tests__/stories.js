/**
 * Components - Utils convert Img Url To Data URL via Canvas
 */

// React
import React, { useEffect, useState } from 'react'

// Style
import styled from 'styled-components'

// UI
import { convertImgUrlToDataURLviaCanvas } from '../index'
import Readme from '../README.md'

export default {
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  title: 'Utils/ConvertImgUrlToDataURLviaCanvas',
}

export const ConvertImgUrlToDataURLviaCanvas = () => {
  const [ImageSrc, setImageSrc] = useState('')

  useEffect(() => {
    const imageData = convertImgUrlToDataURLviaCanvas(
      'https://drykiss.com/static/services/services.jpg'
    )

    imageData.then((value) => {
      setImageSrc(value)
    })

    return () => {}
  }, [])

  return <Img src={ImageSrc} />
}

const Img = styled.img`
  width: 30rem;
`
