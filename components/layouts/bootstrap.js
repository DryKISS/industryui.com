/**
 * Layout
 */

// React
import { node } from 'prop-types'

// UI
import { Copyright, Footer, Navbar } from '../../'

export const Bootstrap = ({
  brand,
  brandLogo,
  children,
  copyright,
  footer,
  navigation
}) => {
  return (
    <>
      <Navbar brand={brandLogo} links={navigation} />

      {children}

      <Footer columns={footer} />

      <Copyright brand={brand} links={copyright} />
    </>
  )
}

Bootstrap.propTypes = {
  children: node.isRequired
}
