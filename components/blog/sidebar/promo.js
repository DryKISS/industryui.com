/**
 * Blog - Promo
 */

// React
import React from 'react'
import { string } from 'prop-types'

// UI
import Image from '../../atoms/image/image'
import BlogSection from './components/section'

const BlogPromo = ({ src, to }) => {
  return (
    <BlogSection heading="Promo">
      <Image alt="Image" src={src} />
    </BlogSection>
  )
}

BlogPromo.propTypes = {
  src: string.isRequired,
  to: string.isRequired
}

export default BlogPromo
