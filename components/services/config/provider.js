/**
 * Services - Config - Provider
 */

// Context
import { ConfigContext } from '../../'

export const ConfigProvider = props => {
  return <ConfigContext.Provider value={props.config} {...props} />
}
