/**
 * Core
 */

// React
import { string } from 'prop-types'

export const Core = ({ author, canonical, description, title }) => {
  return (
    <>
      <title className='next-head'>
        {title} - {author}
      </title>
      <meta name='description' content={description} key='description' />
      <meta name='author' content={author} key='author' />
      <meta rel='canonical' href={canonical} key='canonical' />
      <meta name='viewport' content='width=device-width, initial-scale=1' key='viewport' />
      <meta charSet='UTF-8' key='charset' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' key='edge' />
      <meta name='format-detection' content='telephone=no' key='format' />
    </>
  )
}

Core.propTypes = {
  author: string,
  canonical: string.isRequired,
  description: string.isRequired,
  title: string.isRequired
}

Core.defaultProps = {
  author: 'DryKISS'
}
