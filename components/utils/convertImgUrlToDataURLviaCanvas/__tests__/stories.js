/**
 * convert Img Url To Data URL via Canvas
 */

// React
import { useEffect, useState } from 'react'

// UI
import { convertImgUrlToDataURLviaCanvas } from '../../../'
import Readme from '../README.md'

// Style
import styled from 'styled-components'

export default {
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Utils/ConvertImgUrlToDataURLviaCanvas'
}

export const ConvertImgUrlToDataURLviaCanvas = () => {
  const [ImageSrc, setImageSrc] = useState('')

  useEffect(() => {
    const imageData = convertImgUrlToDataURLviaCanvas(
      'https://drykiss.com/static/services/services.jpg'
    )
    imageData.then(value => {
      setImageSrc(value)
    })
    return () => {}
  }, [])

  return <Img src={ImageSrc} />
}

const Img = styled.img`
  width: 30rem;
`
