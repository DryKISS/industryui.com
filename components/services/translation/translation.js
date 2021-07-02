/**
 * Components - Services - Translation
 */

// React
// import { useContext } from 'react'

// Axios
import axios from 'axios'

// Config
// import ConfigContext from '../../services/config/context'

const Translate = async (text, from = 'es', to = 'en') => {
  // const { RapidApi } = useContext(ConfigContext)

  const RapidApi = {
    apiKey: '1882a05a31mshaf0342eab29f980p18a203jsna9807a52e188'
  }

  try {
    const { data } = await axios.post(
      'https://microsoft-translator-text.p.rapidapi.com/translate',
      [{ Text: text }],
      {
        params: {
          to,
          'api-version': '3.0',
          profanityAction: 'NoAction',
          textType: 'plain'
        },
        headers: {
          'content-type': 'application/json',
          'x-rapidapi-key': RapidApi.apiKey,
          'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com'
        }
      }
    )

    return { response: data[0]?.translations[0]?.text || text, hasError: false }
  } catch (error) {
    return { response: 'Error while translating text', hasError: true }
  }
}

export default Translate
