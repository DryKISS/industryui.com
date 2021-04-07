/**
 * App - Apollo
 */

// React
import React from 'react'
import { node, object } from 'prop-types'

// Apollo
import { ApolloProvider } from '@apollo/client'

const AppApollo = ({ client, children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

AppApollo.propTypes = {
  children: node.isRequired,
  client: object.isRequired
}

export default AppApollo
