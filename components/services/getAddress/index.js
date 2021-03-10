// Axios
import axios from 'axios'

// React
import { func, number, string } from 'prop-types'

const getAddressesApi = async (apiKey, postCode) => {
  try {
    const { data } = await axios.get(`https://api.getAddress.io/find/${postCode}?api-key=${apiKey}`)
    return { response: data, hasError: false }
  } catch (error) {
    return { response: 'Error While Getting Address List', hasError: true }
  }
}

let timeout

const getAddresses = ({ apiKey, callback: callFunc, callThrottle, postCode, validator }) => {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    const isValid = validator(postCode)
    if (isValid) {
      const data = getAddressesApi(apiKey, postCode)
      data.then((res) => {
        callFunc(res)
      })
    } else {
      callFunc({ response: 'Invalid Postal Code', hasError: true })
    }
  }, callThrottle)
}

const addressStringSeparator = ', '

const fixAddresses = (addresses) => {
  return addresses
    .map((addressString) => {
      const elements = addressString.split(addressStringSeparator).filter((part) => {
        return part !== ''
      })
      return elements.join(', ')
    })
    .map((item, index) => {
      return { name: item, id: index }
    })
}

export const GetAddressService = { fixAddresses, getAddresses, getAddressesApi }

getAddresses.propTypes = {
  callback: func.isRequired,
  callThrottle: number.isRequired,
  postCode: string.isRequired,
  validator: func.isRequired
}
