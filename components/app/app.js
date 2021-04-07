/**
 * App
 * Bootstrap file for a NextJS app to selectively load up the providers required by the app.
 */

// React
import React from 'react'
import { any, bool, func, object, oneOfType } from 'prop-types'

// Next
import App from 'next/app'
import dynamic from 'next/dynamic'

// Google Tag Manager
// import TagManager from 'react-gtm-module'

// UI
import AppLayout from './layout'
import AppTheme from './theme'
import AuthorizationProvider from '../services/authorization/provider'
import compose from './compose'
import ConfigProvider from '../services/config/provider'
import NotificationsProvider from '../services/notifications/provider'
import OffCanvasProvider from '../services/offCanvas/provider'
import ThemeStyle from '../theme/global/style'
import UserProvider from '../services/authentication/provider'
const AppApollo = dynamic(() => import('./apollo'))

export default class MyApp extends App {
  static propTypes = {
    apolloClient: oneOfType([bool, object]),
    Component: func.isRequired,
    config: object,
    google: oneOfType([bool, object]),
    Layout: any.isRequired,
    offCanvas: bool,
    pageProps: object,
    pageProgressBar: bool,
    theme: object,
    user: bool
  }

  static defaultProps = {
    apolloClient: false,
    google: false,
    offCanvas: false,
    pageProgressBar: false,
    theme: {},
    user: false
  }

  // componentDidMount() {
  //   const { google } = this.props

  //   if (google) {
  //     TagManager.initialize({ gtmId: google.analytics })
  //   }
  // }

  render() {
    const {
      apolloClient,
      Component,
      config,
      Layout,
      offCanvas,
      pageProgressBar,
      pageProps,
      router,
      theme,
      user
    } = this.props

    const SuperProvider = compose([
      (props) =>
        apolloClient ? (
          <AppApollo client={apolloClient} children={props.children} />
        ) : (
          props.children
        ),
      (props) => (user ? <UserProvider children={props.children} /> : props.children),
      (props) => (user ? <AuthorizationProvider children={props.children} /> : props.children),
      (props) => (user ? <NotificationsProvider children={props.children} /> : props.children),
      (props) => (offCanvas ? <OffCanvasProvider children={props.children} /> : props.children)
    ])

    // elements() {
    //   const { offCanvas, user } = this.props

    //   return (
    //     <>
    //       <ThemeStyle />
    //       {user && (
    //         <UserProvider>
    //           <AuthorizationProvider>
    //               <NotificationsProvider>
    //                 {offCanvas ? (
    //                   <OffCanvasProvider>{this.layout()}</OffCanvasProvider>
    //                 ) : (
    //                   this.layout()
    //                 )}
    //               </NotificationsProvider>
    //           </AuthorizationProvider>
    //         </UserProvider>
    //       )}

    //       {!user && this.layout()}
    //     </>
    //   )
    // }

    return (
      <AppTheme theme={theme}>
        <ConfigProvider config={config}>
          <ThemeStyle />
          <SuperProvider>
            <AppLayout
              Component={Component}
              Layout={Layout}
              pageProgressBar={pageProgressBar}
              pageProps={pageProps}
              router={router}
            />
          </SuperProvider>
        </ConfigProvider>
      </AppTheme>
    )
  }
}
