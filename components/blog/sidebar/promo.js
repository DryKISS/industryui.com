/**
 * Blog - Promo
 */

// React
import React from 'react'
import { string } from 'prop-types'

// UI
import { Image } from '../../'
import { BlogSection } from './components'

export const BlogPromo = ({ src, to }) => {
  return (
    <BlogSection heading="Promo">
      <Image alt="Image" src={src} />
    </BlogSection>
  )
}

BlogPromo.propTypes = {
  src: string.isRequired,
  to: string.isRequired,
}
