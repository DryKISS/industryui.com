/**
 * getAcronym
 */
// React
import { useEffect, useState } from 'react'

// Storybook
import { Wrapper } from 'decorators'
import Readme from '../README.md'
import { convertImgUrlToDataURLviaCanvas } from 'components'
// Ui
import styled from 'styled-components'

export default {
  title: 'Utils/ConvertImgUrlToDataURLviaCanvas',
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
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
