/**
 * Layout
 */

// React
import { node } from 'prop-types'

// Components
import { Layout } from 'components'

const MainLayout = ({ children }) => <Layout>{children}</Layout>

MainLayout.propTypes = {
  children: node.isRequired
}

export default MainLayout
