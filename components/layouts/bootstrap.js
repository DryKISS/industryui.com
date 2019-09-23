/**
 * Layout
 * Sets up a container for all the pages, called on each route change
 */

// React
import { useContext } from 'react'
import { array, node, object, string } from 'prop-types'

// UI
import { Copyright, Footer, Navbar, UserContext } from '../../'

export const Bootstrap = ({
  brand,
  brandLogo,
  children,
  copyright,
  footer,
  navigation,
  navigationAdmin
}) => {
  // const user = null
  const { user, signOut } = useContext(UserContext) || {}

  return (
    <>
      {user &&
        <>
          {user.roles && user.roles[0] === 'ADMIN' &&
            <Navbar brand={brandLogo} links={navigationAdmin(signOut)}/>}

          {user.roles && user.roles[0] === 'SUPPLIER' &&
            <Navbar brand={brandLogo} links={navigationSupplier(signOut)} />}
        </>
      }

      {!user && <Navbar brand={brandLogo} links={navigation} />}

      {children}

      {footer && <Footer columns={footer} />}

      <Copyright brand={brand} links={copyright} />
    </>
  )
}

Bootstrap.propTypes = {
  brand: string,
  brandLogo: string,
  children: node.isRequired,
  copyright: array,
  footer: array,
  navigation: object
}
