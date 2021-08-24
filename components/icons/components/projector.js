// React
import React from 'react'

import { propTypes } from '../props'
import IconWrapper from '../wrapper'

const ProjectorIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={512}>
      <path d="M456,132h-8v-16c0-4.418-3.582-8-8-8h-48c-4.418,0-8,3.582-8,8v16h-16v-16c0-4.418-3.582-8-8-8h-48c-4.418,0-8,3.582-8,8v16H24c-13.255,0-24,10.745-24,24v160c0,13.255,10.745,24,24,24h16v32h80v-32h240v32h80v-32h16c13.255,0,24-10.745,24-24V156C480,142.745,469.255,132,456,132z M400,124h32v8h-32V124z M320,124h32v8h-32V124z M104,356H56v-16h48V356z M424,356h-48v-16h48V356z M464,316c0,4.418-3.582,8-8,8H24c-4.418,0-8-3.582-8-8V156c0-4.418,3.582-8,8-8h432c4.418,0,8,3.582,8,8V316z" />
      <path d="M376,164c-39.764,0-72,32.235-72,72c0,39.764,32.236,72,72,72c39.765,0,72-32.236,72-72C447.956,196.254,415.746,164.044,376,164z M376,292c-30.928,0-56-25.072-56-56c0-30.928,25.072-56,56-56c30.928,0,56,25.072,56,56C431.965,266.913,406.913,291.965,376,292z" />
      <path d="M376,196c-22.091,0-40,17.909-40,40s17.909,40,40,40c22.091,0,40-17.909,40-40C415.974,213.92,398.08,196.026,376,196zM376,260c-13.255,0-24-10.745-24-24s10.745-24,24-24s24,10.745,24,24S389.255,260,376,260z" />
      <path d="M112,196H48c-4.418,0-8,3.582-8,8s3.582,8,8,8h64c4.418,0,8-3.582,8-8S116.418,196,112,196z" />
      <path d="M176,196h-32c-4.418,0-8,3.582-8,8s3.582,8,8,8h32c4.418,0,8-3.582,8-8S180.418,196,176,196z" />
      <path d="M112,228H48c-4.418,0-8,3.582-8,8s3.582,8,8,8h64c4.418,0,8-3.582,8-8S116.418,228,112,228z" />
      <path d="M176,228h-32c-4.418,0-8,3.582-8,8s3.582,8,8,8h32c4.418,0,8-3.582,8-8S180.418,228,176,228z" />
      <path d="M112,260H48c-4.418,0-8,3.582-8,8s3.582,8,8,8h64c4.418,0,8-3.582,8-8S116.418,260,112,260z" />
      <path d="M176,260h-32c-4.418,0-8,3.582-8,8s3.582,8,8,8h32c4.418,0,8-3.582,8-8S180.418,260,176,260z" />
    </IconWrapper>
  )
}

ProjectorIcon.propTypes = propTypes

export default ProjectorIcon
