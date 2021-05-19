/**
 * App
 */

// UI
import { MyApp } from '@drykiss/industry-ui'

// Layout
import Layout from '../layouts/index'

// Config
import { Config } from '../config/config'
import { Theme } from '../config/theme'

// Icons
import '../config/icons'

const PageApp = (props) => (
  <MyApp config={Config} Layout={Layout} theme={Theme} {...props} />
)

export default PageApp
